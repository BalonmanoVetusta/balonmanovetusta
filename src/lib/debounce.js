export default function debounce(callback, waitTime, ...args) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
    }, waitTime);
  };
}
