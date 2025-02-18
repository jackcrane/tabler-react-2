import React from "react";
import { Button, useModal } from "tabler-react-2";

export const ButtonedHookModal = ({ hookProps, buttonOn, on = () => {} }) => {
  const { modal, ModalElement } = useModal(hookProps);

  return (
    <>
      <Button onClick={async () => on(await modal(buttonOn))}>
        Open hook-driven modal
      </Button>
      {ModalElement}
    </>
  );
};
