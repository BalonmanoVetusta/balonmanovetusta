// Copy & adapated code from https://www.w3.org/WAI/tutorials/menus/application-menus-code/

import { useEffect, useState } from "react";

const Keys = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const registerEvent = (register, event, handler) => {
  if ("addEventListener" in register) {
    register.addEventListener(event, handler);
  }
};

const unregisterEvent = (register, event, handler) => {
  if ("removeEventListener" in register) {
    register.removeEventListener(event, handler);
  }
};

const eventForElement = (element, event, handler) => {
  if (event.target === element || element.contains(event.target)) {
    handler(event);
  }
};

function useBrowser() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    const { matchMedia, document } = globalThis || window || global || {};

    if (!(document && document.createElement)) {
      return;
    }

    const isSystemDark = Boolean(
      matchMedia("(prefers-color-scheme: dark)").matches
    );
    const isForcedDarkMode = Boolean(
      document.querySelector(":root").getAttribute("data-theme")
    );

    setIsBrowser(true);
  }, []);

  return {
    isBrowser,
  };
}

const querySelectors = {
  MENU: '[role="appmenu"]',
  SUBMENU: '[role="menu"]',
  MENU_ITEM: '[role="menuitem"]',
  MENU_ITEM_BUTTON: '[role="menuitem"] button',
  MENU_ITEM_LINK: '[role="menuitem"] a',
};

// Make react navegable menu with keyboard
// https://www.w3.org/WAI/tutorials/menus/application-menus-code/
export default function useMenu() {
  const { isBrowser } = useBrowser();
  const [menu, setMenu] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (event) => {};
  const handleClick = (event) => {};

  useEffect(() => {
    const { document = null } = globalThis || window || global || {};

    if (!document) return;
    if (menu === null && isBrowser) {
      setMenu(document.querySelector("[role=appmenu]"));
    }

    registerEvent(document, "keydown", handleKeyDown);
    registerEvent(document, "click", handleClick);

    return () => {
      unregisterEvent(document, "keydown", handleKeyDown);
      unregisterEvent(document, "click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
