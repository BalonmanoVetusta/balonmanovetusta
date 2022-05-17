import { motion } from "framer-motion";
import { MyLink } from "./MyLink";

export function MotionLink({ children, motionProps = {}, ...props }) {
  if (!motionProps?.variants) {
    motionProps.variants = {
      onTap: { scale: 0.85, opacity: 1 },
      onHoverFocus: { scale: 1.1, opacity: 1 },
      initial: { scale: 1, opacity: 0.9 },
    };

    motionProps.initial = "initial";
    motionProps.whileHover = "onHoverFocus";
    motionProps.whileTap = "onTap";
    motionProps.whileFocus = "onHoverFocus";
  }

  return (
    <motion.span {...motionProps}>
      <MyLink {...props}>{children}</MyLink>
    </motion.span>
  );
}
