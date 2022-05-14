export default function isTouchable() {
  if (typeof window === "undefined") return false;

  const { navigator } = globalThis || window || { navigator: {} };

  return (
    Boolean("ontouchstart" in window?.document?.documentElement) ||
    Boolean(navigator?.maxTouchPoints)
  );
}
