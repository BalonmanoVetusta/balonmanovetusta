import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function DialogTrigger({
  children,
  Trigger,
  focusRef = null,
  ...props
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      if (focusRef !== null) {
        focusRef?.current?.focus?.();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      {open ? (
        <Modal
          open={open}
          onCloseRequest={() => {
            setOpen(false);
          }}
        >
          <div id="modal-dialog" role="dialog" {...props} tabIndex={0}>
            {children}
          </div>
        </Modal>
      ) : (
        <Trigger
          onClick={() => {
            setOpen(true);
          }}
        />
      )}
    </>
  );
}
