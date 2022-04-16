import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { modalRoot } from "styles/components/ModalDialog.module.css";

// onCloseRequest should change "open" property value to false
export default function Modal({ children, onCloseRequest = () => {} }) {
  const [rootElement, setRootElement] = useState(null);
  const { addShortcut, removeShortcut } = useKeyboardShortcut();

  const onClose = (event) => {
    if (
      !Array.from(rootElement.children).some((child) =>
        child.contains(event.target)
      )
    )
      onCloseRequest();
  };

  // index.html
  // div#modal-root
  useEffect(() => {
    const {
      window: { document },
    } = globalThis || window;

    const element = document.createElement("div");

    element.setAttribute("id", "modal-root");
    element.className = { modalRoot };
    element.setAttribute("aria-modal", true);

    document.body.prepend(element);
    setRootElement(element);

    return () => {
      document.body.removeChild(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function clickEvent(event) {
      if (event.target.getAttribute("dialog-dismiss") === "true") {
        onCloseRequest();
      }
    }

    const selfwindow = globalThis || window;
    if (rootElement) {
      rootElement.addEventListener("click", onClose, false);
      addShortcut(["Escape"], onCloseRequest);
      selfwindow.addEventListener("click", clickEvent, false);
    }

    return () => {
      if (rootElement) {
        rootElement.removeEventListener("click", onClose, false);
        removeShortcut(["Escape"]);
        selfwindow.removeEventListener("click", clickEvent, false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootElement]);

  return rootElement ? (
    createPortal(children, rootElement, "modal-dialog")
  ) : (
    <></>
  );
}
