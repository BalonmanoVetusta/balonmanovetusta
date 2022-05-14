import { useEffect, useState } from "react";

export function useDetectScreenSize({
  minWidth = 0,
  maxWidth = 0,
  minHeight = 0,
  maxHeight = 0,
} = {}) {
  const [isScreenSize, setIsScreenSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = globalThis ||
        window ||
        global || { innerHeight: 0, innerWidth: 0 };

      const isMinWidth = minWidth === 0 || innerWidth >= minWidth;
      const isMaxWidth = maxWidth === 0 || innerWidth <= maxWidth;
      const isScreenSizeWidth = isMinWidth && isMaxWidth;

      const isMinHeight = minHeight === 0 || innerHeight >= minHeight;
      const isMaxHeight = maxHeight === 0 || innerHeight <= maxHeight;
      const isScreenSizeHeight = isMinHeight && isMaxHeight;
      setIsScreenSize(isScreenSizeWidth && isScreenSizeHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxHeight, maxWidth, minHeight, minWidth]);

  return isScreenSize;
}
