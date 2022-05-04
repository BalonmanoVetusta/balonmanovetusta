import { motion } from "framer-motion";
import useSvgMotionElement from "../context/SvgMotionContext";

export function Circle({ children, ...props }) {
  const isSvgMotion = useSvgMotionElement();

  return isSvgMotion ? (
    <motion.circle {...props}>{children}</motion.circle>
  ) : (
    <circle {...props}>{children}</circle>
  );
}
