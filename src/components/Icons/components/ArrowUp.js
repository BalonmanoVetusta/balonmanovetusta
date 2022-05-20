import Svg from "components/Svg";
import { motion } from "framer-motion";

export function ArrowUp({ title = "Arrow Up", ...props }) {
  return (
    <Svg as={motion.svg} viewBox="0 0 24 24" title={title} {...props}>
      <motion.path d="M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12Z" />
    </Svg>
  );
}
