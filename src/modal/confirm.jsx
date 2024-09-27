import { IconAlertTriangle } from "@tabler/icons-react";
import { Col, Color } from "../util";
import { Modal } from "./modal";
import { Button } from "../button";
import React, { useState, useCallback } from "react";
import { H3, Text } from "../typography";

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
