import { Col, Color } from "../util";
import { Modal } from "./modal";
import { Button } from "../button";
import React, { useState, useCallback } from "react";
import { H3, Text } from "../typography";

const IconAlertTriangle = ({ size, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9v4" />
    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
    <path d="M12 16h.01" />
  </svg>
);

const ConfirmBase = ({ open, onDecision, children, modalId, status }) => {
  return (
    <Modal
      open={open}
      onClose={() => onDecision(false)}
      modalId={modalId}
      status={"danger"}
    >
      {children}
    </Modal>
  );
};

const DangerConfirm = ({
  open,
  onDecision,
  title,
  text,
  commitText,
  cancelText,
}) => {
  return (
    <ConfirmBase
      open={open}
      onDecision={onDecision}
      modalId="asdfpiuhs987huyoasidfa"
    >
      <div class="modal-body text-center py-4">
        <Color color="danger">
          <IconAlertTriangle size={64} strokeWidth={1} />
        </Color>
        <H3>{title}</H3>
        <Text className="text-secondary">{text}</Text>
      </div>
      <div class="modal-footer">
        <div class="w-100">
          <div class="row">
            <div class="col">
              <Button className="w-100" onClick={() => onDecision(false)}>
                {cancelText}
              </Button>
            </div>
            <div class="col">
              <Button
                className="w-100"
                color="danger"
                onClick={() => onDecision(true)}
              >
                {commitText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConfirmBase>
  );
};

export const useConfirm = (options) => {
  const title = options?.title;
  const text = options?.text;
  const commitText = options?.commitText;
  const cancelText = options?.cancelText;

  const [confirmState, setConfirmState] = useState({
    open: false,
    resolve: null,
  });

  const confirm = useCallback((message) => {
    return new Promise((resolve) => {
      setConfirmState({
        open: true,
        resolve,
      });
    });
  }, []);

  const handleDecision = (decision) => {
    if (confirmState.resolve) {
      confirmState.resolve(decision);
      setConfirmState({ ...confirmState, open: false, resolve: null });
    }
  };

  const ConfirmModal = (
    <DangerConfirm
      open={confirmState.open}
      onDecision={handleDecision}
      title={title || "Are you sure?"}
      text={text || "This action cannot be undone."}
      commitText={commitText || "Confirm"}
      cancelText={cancelText || "Cancel"}
    />
  );

  return { confirm, ConfirmModal };
};
