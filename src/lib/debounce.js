export default function debounce(callback, waitTime, ...args) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      // eslint-disable-next-line node/no-callback-literal
      callback(...args);
    }, waitTime);
  };
}
