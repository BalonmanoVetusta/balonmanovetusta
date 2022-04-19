import { useState, useEffect } from "react";

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

export default function useMenuHide({
  ref = null,
  maxWidth = IGNORE_SCREEN_SIZE,
  maxHeight = IGNORE_SCREEN_SIZE,
  touchMovePersistMs = 125,
} = {}) {
  const [shouldBeViewed, setShouldBeViewed] = useState(true);

  useEffect(() => {
    const selfWindow = globalThis || window;

    // To detect if touchmove was previously lanunched
    let touchMove = false;

    const updateStateByTouchMoveOrScroll = (event) => {
      if (!ref.current) return;

      touchMove = true;
      setShouldBeViewed(false);
    };

    const updateStateByTapEvent = (event) => {
      if (!ref) return;

      if (touchMove) {
        setTimeout(() => {
          touchMove = false;
        }, touchMovePersistMs);
        return;
      }

      // FIXME Use react instead of native events by using a context
      if (!shouldBeViewed) {
        setShouldBeViewed(true);
      } else if (
        !(ref.current.contains(event.target) || ref.current === event.target)
      ) {
        setShouldBeViewed((prev) => !prev);
      }
    };

    const updateScreenSize = (event) => {
      setShouldBeViewed(true);
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

    addEventListener("touchend", updateStateByTapEvent);
    addEventListener("touchmove", updateStateByTouchMoveOrScroll);
    addEventListener("scroll", updateStateByTouchMoveOrScroll);
    addEventListener("wheel", updateStateByTouchMoveOrScroll);

    return () => {
      removeEventListener("touchend", updateStateByTapEvent);
      removeEventListener("touchmove", updateStateByTouchMoveOrScroll);
      removeEventListener("scroll", updateStateByTouchMoveOrScroll);
      removeEventListener("wheel", updateStateByTouchMoveOrScroll);
    };
  }, [ref]);

  return ref === null || shouldBeViewed;
}
