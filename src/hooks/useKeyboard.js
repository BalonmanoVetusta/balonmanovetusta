import { useCallback, useEffect, useState } from "react";

const commonEvent = (event) => {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  event?.stopImmediatePropagation?.();
};

export default function useKeyboardShortcut() {
  const [shortcuts, setShortcuts] = useState([]);
  const [pressedKeys, setPressedKeys] = useState({});

  const addShortcut = useCallback((keys, callback) => {
    setShortcuts((prev) => [
      ...prev,
      {
        keys,
        callback,
      },
    ]);
  }, []);

  const removeShortcut = useCallback((keys, callback = null) => {
    setShortcuts((prev) => {
      return [
        ...prev.filter((shortcut) => {
          if (callback) {
            return shortcut.keys !== keys && shortcut.callback !== callback;
          }

          return shortcut.keys !== keys;
        }),
      ];
    });
  }, []);

  const eventKeyDown = (event) => {
    const { key } = event;
    commonEvent(event);
    setPressedKeys((pressedKeys) => {
      pressedKeys[key] = true;

      return { ...pressedKeys };
    });
  };

  const eventKeyUp = (event) => {
    const { key } = event;
    commonEvent(event);
    setPressedKeys((pressedKeys) => {
      pressedKeys[key] = false;

      return { ...pressedKeys };
    });
  };

  // On Mount
  useEffect(() => {
    const selfwindow = globalThis || window;

    selfwindow.addEventListener("keydown", eventKeyDown, false);
    selfwindow.addEventListener("keyup", eventKeyUp, false);
    // On Unmount
    return () => {
      selfwindow.removeEventListener("keydown", eventKeyDown, false);
      selfwindow.removeEventListener("keyup", eventKeyUp, false);
    };
  }, []);

  useEffect(() => {
    const currentKeysStatus = Object.values(pressedKeys);
    if (
      currentKeysStatus.length > 0 &&
      currentKeysStatus.some((keyStatus) => keyStatus === true)
    ) {
      shortcuts.forEach((shortcut) => {
        const { keys, callback } = shortcut;
        const currentKeysStatus = Object.values(pressedKeys);
        if (keys.every((key) => pressedKeys[key] === true)) {
          callback();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressedKeys]);

  return { addShortcut, removeShortcut };
}
