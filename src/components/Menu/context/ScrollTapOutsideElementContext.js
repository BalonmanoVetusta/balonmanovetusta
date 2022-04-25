import { createContext, useEffect, useContext } from "react";
import useScrollTapOutsideElementShowHideElement from "../hook/useScrollTapOutsideElementShowHideElement";
import isTouchable from "../lib/isTouchable";

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

  useEffect(() => {
    const { document } = globalThis.window || global.window || window;

    if (!isTouchable()) return;

    // document.addEventListener("touchmove", handleOnTouchMove, false);
    document.addEventListener("resize", handleOnResize, false);

    return () => {
      // document.removeEventListener("touchmove", handleOnTouchMove, false);
      document.removeEventListener("resize", handleOnResize, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider value={{ isElementVisible, setRef }}>
      <div
        onTouchEnd={handleOnTouchEnd}
        onTouchCancel={handleOnTouchCancel}
        onTouchMove={handleOnTouchMove}
      >
        {children}
      </div>
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
