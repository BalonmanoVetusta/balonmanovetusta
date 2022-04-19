import { useState, useEffect } from "react";

const PIXELS_TO_BE_CLOSE = 50;
const IGNORE_SCREEN_SIZE = -1;

const addEventListener = (event, callback) => {
  const selfWindow = globalThis || window || {};

  if (selfWindow.addEventListener) {
    selfWindow.addEventListener(event, callback, false);
  }
};

const removeEventListener = (event, callback) => {
  const selfWindow = globalThis || window || {};

  if (selfWindow.addEventListener) {
    selfWindow.addEventListener(event, callback, false);
  }
};

const checkIfEventIsClose = (event, ref) => {
  if (!ref?.current) {
    return false;
  }

  const { clientX, clientY } = event;
  const { left, top, width, height } =
    ref.current.getBoundingClientRect() || {};

  const right = left + width;
  const bottom = top + height;

  const sideIsInOrClose =
    clientX > left - PIXELS_TO_BE_CLOSE || right + PIXELS_TO_BE_CLOSE > clientX;

  const heightIsInOrClose =
    clientY > top - PIXELS_TO_BE_CLOSE || bottom + PIXELS_TO_BE_CLOSE > clientY;

  return sideIsInOrClose && heightIsInOrClose;
};

export default function useMenuHide({
  ref = null,
  maxWidth = IGNORE_SCREEN_SIZE,
  maxHeight = IGNORE_SCREEN_SIZE,
} = {}) {
  const [shouldBeViewed, setShouldBeViewed] = useState(true);

  useEffect(() => {
    const selfWindow = globalThis || window;

    const updateStateByTouchEvent = (event) => {
      if (!ref) return;

      if (checkIfEventIsClose(event, ref)) {
        setShouldBeViewed(false);
      }

      if (!checkIfEventIsClose(event)) {
        setShouldBeViewed(true);
      }
    };

    const updateStateByTouchMoveOrScroll = (event) => {
      if (!ref.current) return;

      setShouldBeViewed(false);
    };

    const updateScreenSize = (event) => {
      const {
        window: {
          screen: { width, height },
        },
      } = window;

      if (
        (maxWidth !== IGNORE_SCREEN_SIZE && width > maxWidth) ||
        (maxHeight !== IGNORE_SCREEN_SIZE && height > maxHeight)
      ) {
        setShouldBeViewed(true);
      }
    };

    const {
      screen: { width, height },
    } = selfWindow;

    if (maxWidth !== IGNORE_SCREEN_SIZE && width > maxWidth) {
      setShouldBeViewed(true);
      addEventListener("resize", updateScreenSize);
      return () => {
        removeEventListener("resize", updateScreenSize);
      };
    }

    if (maxHeight !== IGNORE_SCREEN_SIZE && height > maxHeight) {
      setShouldBeViewed(true);
      addEventListener("resize", updateScreenSize);
      return () => {
        removeEventListener("resize", updateScreenSize);
      };
    }

    addEventListener("touchstart", updateStateByTouchEvent);
    addEventListener("touchend", updateStateByTouchEvent);
    addEventListener("touchmove", updateStateByTouchMoveOrScroll);
    addEventListener("scroll", updateStateByTouchMoveOrScroll);
    addEventListener("wheel", updateStateByTouchMoveOrScroll);

    return () => {
      removeEventListener("touchstart", updateStateByTouchEvent);
      removeEventListener("touchend", updateStateByTouchEvent);
      removeEventListener("touchmove", updateStateByTouchMoveOrScroll);
      removeEventListener("scroll", updateStateByTouchMoveOrScroll);
      removeEventListener("wheel", updateStateByTouchMoveOrScroll);
    };
  }, [ref]);

  return ref === null || shouldBeViewed;
}
