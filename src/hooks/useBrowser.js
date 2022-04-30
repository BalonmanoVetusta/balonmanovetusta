import { useState, useEffect } from "react";
import useSSR from "./useSSR";

export default function useBrowser() {
  const isBrowser = !useSSR();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSystemDarkMode, setIsSystemDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth < 992);
    setIsDesktop(window.innerWidth > 992);

    setIsSystemDarkMode(isSystemDark);
    setIsDarkMode(isForcedDarkMode || isSystemDark);
  }, []);

  return {
    isBrowser,
    isMobile,
    isTablet,
    isDesktop,
    isSystemDarkMode,
    isDarkMode,
  };
}
