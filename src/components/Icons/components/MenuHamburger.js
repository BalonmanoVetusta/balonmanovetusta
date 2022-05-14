// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/
import Svg from "components/Svg";
import { motion } from "framer-motion";

export function MenuHamburger({
  title = "menu",
  pathProps = {},
  ...props
} = {}) {
  return (
    <Svg as={motion.svg} title={title} viewBox="0 0 21 21" {...props}>
      <motion.path
        {...pathProps}
        d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"
        fill="none"
        stroke="currentColor"
      />
    </Svg>
  );
}
