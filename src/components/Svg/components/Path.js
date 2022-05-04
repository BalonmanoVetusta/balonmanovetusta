import { motion } from "framer-motion";

const ConditionalPath = ({ children, shouldUseMotion = false, ...props }) =>
  shouldUseMotion ? (
    <motion.path {...props}>{children}</motion.path>
  ) : (
    <path {...props}>{children}</path>
  );

export function Path({ motion: shouldUseMotion = false, children, ...props }) {
  return (
    <ConditionalPath shouldUseMotion={shouldUseMotion} {...props}>
      {children}
    </ConditionalPath>
  );
}
