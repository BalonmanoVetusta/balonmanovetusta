// If you want to support very old browser you can install the polyfill for IntersectionObserver
// npm install intersection-observer
// More info: https://www.npmjs.com/package/intersection-observer
import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef = null,
  once = true,
} = {}) {
  const [isNearScreen, setNearScreen] = useState(false);

  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef?.current ?? fromRef.current;

    const onObserved = (entries, observer) => {
      const el = entries && entries[0] ? entries[0] : { isIntersecting: false };

      if (el.isIntersecting) {
        setNearScreen(true);
        once && observer.unobserve(el.target);
      } else {
        !once && setNearScreen(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
      //  In case you have installed the polyfill you can use next two lines by
      // uncoment them and comment the previous one

      // typeof IntersectionObserver !== "undefined" ||
      //   import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onObserved, {
        rootMargin: distance,
      });

      if (element) observer.observe(element);
    });

    return () => {
      if (typeof element === typeof Element) {
        observer && observer.disconnect();
      }
    };
  }, [distance, externalRef, once]);

  return { isNearScreen, fromRef };
}
