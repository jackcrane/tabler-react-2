import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../button";

export const Modal = ({
  open,
  onClose,
  title,
  buttons,
  children,
  modalId,
  status,
  modalBodyStyle,
}) => {
  return (
    <>
      <div
        className={`modal fade ${open ? "show" : ""}`}
        id={modalId}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {status && <div className={`modal-status bg-${status}`} />}
            {title ? (
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                />
              </div>
            ) : (
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            )}
            <div
              className="modal-body"
              style={{
                maxHeight: "80dvh",
                overflow: "auto",
                ...modalBodyStyle,
              }}
            >
              {children}
            </div>
            <div className="modal-footer">
              {buttons?.map((button, index) => (
                <Button
                  variant={button.variant}
                  key={index}
                  {...button.attrs}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the backdrop when open */}
      {open && <div className="modal-backdrop fade show" />}
    </>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      variant: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  children: PropTypes.node.isRequired,
  modalId: PropTypes.string.isRequired,
};

export const useModal = (options) => {
  const [modalState, setModalState] = useState({
    open: false,
    resolve: () => {},
    title: options?.title,
    text: options?.text,
    buttons: options?.buttons,
  });

  const modal = useCallback((newOptions = {}) => {
    return new Promise((resolve) => {
      setModalState((prevState) => ({
        ...prevState,
        open: true,
        resolve,
        // Overwrite title and other options if provided
        title: newOptions.title || prevState.title,
        text: newOptions.text || prevState.text,
        buttons: newOptions.buttons || prevState.buttons,
      }));
    });
  }, []);

  const handleDecision = (decision) => {
    if (modalState.resolve) {
      modalState.resolve(decision);
    }
    setModalState((prevState) => ({
      ...prevState,
      open: false,
      // resolve: null,
    }));
  };

  const update = () => {
    setModalState({
      ...modalState,
      text: options.text,
    });
  };

  const ModalElement = (
    <Modal
      open={modalState.open}
      onClose={() => handleDecision(false)}
      title={modalState.title} // Use dynamic title
      buttons={modalState.buttons?.map((button) => ({
        text: button.text,
        variant: button.variant,
        onClick: () => handleDecision(button.value), // Fix onClick behavior
      }))}
      {...(options.modalProps || {})}
    >
      {modalState.text}
    </Modal>
  );

  return {
    modal,
    ModalElement,
    update,
    close: (v = false) => handleDecision(v),
  };
};
