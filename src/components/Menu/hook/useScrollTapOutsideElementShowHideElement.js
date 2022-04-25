import { useState } from "react";
const WAIT_TIME_TO_END_TOUCHMOVE = 100; // ms

export default function useScrollTapOutsideElementShowHideElement() {
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [ref, setRef] = useState(null);
  const [touchMove, setTouchMove] = useState(false);

  const handleOnTouchCancel = () => {
    setTimeout(() => {
      setTouchMove(false);
    }, WAIT_TIME_TO_END_TOUCHMOVE);
  };

  const handleOnTouchEnd = (event) => {
    if (!ref?.current) return;

    if (touchMove) {
      console.log({ touchMove });
      setIsElementVisible(false);
      handleOnTouchCancel();
      return;
    }

    const prevStatus = isElementVisible;
    if (!(ref.current.contains(event.target) || ref.current === event.target)) {
      setIsElementVisible((prev) => !prev);
    } else {
      setIsElementVisible(true);
    }
    if (!prevStatus) {
      event.preventDefault();
    }
  };

  const handleOnResize = (event) => {
    if (!ref?.current) return;

    setIsElementVisible(true);
  };

  const handleOnTouchMove = (event) => {
    if (!ref?.current) return;

    setTouchMove(true);
    setIsElementVisible(true);
  };

  return {
    isElementVisible,
    setRef,
    handleOnResize,
    handleOnTouchEnd,
    handleOnTouchMove,
  };
}
