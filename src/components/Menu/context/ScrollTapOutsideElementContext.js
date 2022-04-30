import { useMediaQuery } from "hooks/useMediaQuery";
import { createContext, useEffect, useContext } from "react";
import useScrollTapOutsideElementShowHideElement from "../hook/useScrollTapOutsideElementShowHideElement";
import isTouchable from "../lib/isTouchable";
import { motion } from "framer-motion";

const Context = createContext({
  isElementVisible: true,
});

// Context Component
export function ScrollTapOutsideElementContext({ children }) {
  const {
    isElementVisible,
    setRef,
    handleOnResize,
    handleOnTouchEnd,
    handleOnTouchMove,
    handleOnTouchCancel,
  } = useScrollTapOutsideElementShowHideElement();

  const menuShouldBeVisibleAlways = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    const { document } = globalThis.window || global.window || window;

    if (isTouchable() && !menuShouldBeVisibleAlways) {
      document.addEventListener("touchmove", handleOnTouchMove, false);
      document.addEventListener("resize", handleOnResize, false);
    }

    return () => {
      document.removeEventListener("touchmove", handleOnTouchMove, false);
      document.removeEventListener("resize", handleOnResize, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuShouldBeVisibleAlways]);

  const touchProps = {};
  if (!menuShouldBeVisibleAlways) {
    touchProps.onTouchEnd = handleOnTouchEnd;
    touchProps.onTouchCancel = handleOnTouchCancel;
    touchProps.onTouchCancel = handleOnTouchCancel;
  }

  return (
    <Context.Provider value={{ isElementVisible, setRef }}>
      <motion.div layoutId="touchable-area-hide-show-menu" {...touchProps}>
        {children}
      </motion.div>
    </Context.Provider>
  );
}

// Hook
export function useVisibleMenu() {
  const context = useContext(Context);

  if (!context)
    throw new Error(
      "useVisibleMenu must be used within ScrollTapOutsideElementContext"
    );

  return context;
}
