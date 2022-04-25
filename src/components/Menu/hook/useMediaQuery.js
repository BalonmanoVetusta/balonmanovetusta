import { useState, useEffect } from "react";

export function useMediaQuery(media) {
  const [matches, setMatches] = useState(
    typeof window !== typeof undefined && window.matchMedia(media).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(media);
    const listener = (e) => setMatches(e.matches);

    mediaQueryList.addListener(listener);

    return () => mediaQueryList.removeListener(listener);
  }, [media]);

  return matches;
}
