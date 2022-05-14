import { createContext, useContext } from "react";

const Context = createContext({ motion: false });

export function MotionContextProvider({ children, motion = false } = {}) {
  return <Context.Provider value={{ motion }}>{children}</Context.Provider>;
}

export default function useSvgMotionElement() {
  const context = useContext(Context);

  if (!context)
    throw new Error("useMotion must be used within a MotionContextProvider");

  return context.motion;
}
