import React, { useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "../button";

export const Offcanvas = React.memo(
  ({ show, onHide, position, children, size = 300, zIndex = 1000 }) => {
    // backdrop style
    const backdropStyle = useMemo(
      () => ({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.1)",
        zIndex: zIndex - 1,
      }),
      []
    );

    // offcanvas container style
    const containerStyle = useMemo(() => {
      const base = {
        position: "fixed",
        backgroundColor: "#fff",
        boxShadow: show ? "0 0.5rem 1rem rgba(0,0,0,0.15)" : "none",
        transition: "transform 0.3s ease-out",
        zIndex: zIndex,
        padding: 20,
        overflow: "auto",
      };

      switch (position) {
        case "end":
          return {
            ...base,
            top: 0,
            bottom: 0,
            right: 0,
            width: size,
            transform: show ? "translateX(0)" : "translateX(100%)",
          };
        case "top":
          return {
            ...base,
            left: 0,
            right: 0,
            top: 0,
            height: size,
            transform: show ? "translateY(0)" : "translateY(-100%)",
          };
        case "bottom":
          return {
            ...base,
            left: 0,
            right: 0,
            bottom: 0,
            height: size,
            transform: show ? "translateY(0)" : "translateY(100%)",
          };
        case "start":
        default:
          return {
            ...base,
            top: 0,
            bottom: 0,
            left: 0,
            width: size,
            transform: show ? "translateX(0)" : "translateX(-100%)",
          };
      }
    }, [position, show]);

    return (
      <>
        {show && <div style={backdropStyle} onClick={onHide} />}
        <div style={containerStyle} role="dialog" aria-hidden={!show}>
          {children}
        </div>
      </>
    );
  }
);

Offcanvas.displayName = "Offcanvas";

Offcanvas.propTypes = {
  /** Show or hide the offcanvas */
  show: PropTypes.bool.isRequired,
  /** Callback when the backdrop is clicked */
  onHide: PropTypes.func.isRequired,
  /** Position: 'start' (left), 'end' (right), 'top', or 'bottom' */
  position: PropTypes.oneOf(["start", "end", "top", "bottom"]),
  /** Content inside the offcanvas */
  children: PropTypes.node,
};

Offcanvas.defaultProps = {
  position: "start",
  children: null,
};

export const useOffcanvas = (options = {}) => {
  const [state, setState] = useState({
    show: false,
    resolve: null,
    content: options.content || null,
    position: options.position || "start",
  });
  const [rand, setRand] = useState(Math.random());

  const offcanvas = useCallback((newOptions = {}) => {
    return new Promise((resolve) => {
      setState((prev) => ({
        ...prev,
        show: true,
        resolve,
        content: newOptions.content ?? prev.content,
        position: newOptions.position ?? prev.position,
      }));
      setRand(Math.random());
    });
  }, []);

  const close = useCallback(() => {
    if (state.resolve) {
      state.resolve();
    }
    setState((prev) => ({
      ...prev,
      show: false,
      resolve: null,
    }));
  }, [state.resolve]);

  const OffcanvasElement = (
    <Offcanvas
      show={state.show}
      onHide={close}
      position={state.position}
      {...(options.offcanvasProps || {})}
    >
      {/* auto‑injected close button */}
      <Button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={close}
        style={{ position: "absolute", top: 10, right: 10 }}
      />
      <div key={rand}>{state.content}</div>
    </Offcanvas>
  );

  return { offcanvas, OffcanvasElement, close };
};
