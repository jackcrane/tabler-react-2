import React, { useState } from "react";
import { Modal } from "../components/LoadableTabler";
import { Button } from "../components/LoadableTabler";

export const ButtonedModal = ({
  button: buttonText,
  buttonProps,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} {...buttonProps}>
        {buttonText || "Open modal"}
      </Button>
      <Modal
        open={open}
        {...props}
        onClose={(d) => {
          setOpen(false);
          props.onClose && setTimeout(() => props.onClose(d), 0);
        }}
      />
    </>
  );
};
