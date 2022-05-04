import { motion } from "framer-motion";
import useSvgMotionElement from "../context/SvgMotionContext";

export function Path({ children, ...props }) {
  const isMotionSvg = useSvgMotionElement();

  return isMotionSvg ? (
    <motion.path {...props}>{children}</motion.path>
  ) : (
    <path {...props}>{children}</path>
  );
}
