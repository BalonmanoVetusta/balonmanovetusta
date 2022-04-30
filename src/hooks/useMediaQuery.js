import { useState, useEffect } from "react";

export function useMediaQuery(media) {
  const [matches, setMatches] = useState(
    typeof window !== typeof undefined && window.matchMedia(media).matches
  );

  useEffect(() => {
    const { matchMedia } = globalThis || window || global;
    const mediaQueryList = matchMedia(media);

    const listener = ({ matches = false } = {}) => setMatches(matches);
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media]);

  return Boolean(matches);
}
