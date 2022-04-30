import { motion } from "framer-motion";

export function Path({ motion: shouldUseMotion = false, children, ...props }) {
  const ConditionalPath = ({ children, ...props }) =>
    shouldUseMotion ? (
      <motion.path {...props}>{children}</motion.path>
    ) : (
      <path {...props}>{children}</path>
    );
  return <ConditionalPath {...props}>{children}</ConditionalPath>;
}
