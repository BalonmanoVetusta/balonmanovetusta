import { useEffect, useState } from "react";

export default function useSSR() {
  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(typeof window === typeof undefined);
  }, []);

  return isSSR;
}
