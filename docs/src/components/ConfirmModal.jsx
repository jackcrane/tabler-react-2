import React from "react";
import { Button, useConfirm } from "tabler-react-2";

export const ConfirmModal = ({ on = () => {}, hookProps, buttonOn }) => {
  const { confirm, ConfirmModal } = useConfirm(hookProps);

  return (
    <>
      <Button onClick={async () => on(await confirm(buttonOn))}>
        Open confirm modal
      </Button>
      {ConfirmModal}
    </>
  );
};
