import React, { useEffect, useRef } from "react";
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
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    let modalInstance;

    if (open) {
      modalInstance = new window.bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true,
      });
      modalInstance.show();

      modalElement.addEventListener("hidden.bs.modal", onClose);
    } else {
      modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("hidden.bs.modal", onClose);
      }
    };
  }, [open, onClose]);

  return (
    <div className="modal" id={modalId} ref={modalRef} tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {status && <div className={`modal-status bg-${status}`}></div>}
          {title ? (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
          ) : (
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          )}
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {buttons &&
              buttons.map((button, index) => (
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
