// This is copied from Material Design Icons, see:
//   - https://github.com/Templarian/MaterialDesign
//   - https://materialdesignicons.com
import Svg from "components/Svg";
import { motion } from "framer-motion";

export function CardAccount({
  title = "Tarjeta de cuenta",
  pathProps = {},
  ...props
} = {}) {
  return (
    <Svg as={motion.svg} viewBox="0 0 24 24" title={title} {...props}>
      <motion.path
        {...pathProps}
        d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6h-8m0 2v1h8V8h-8m0 2v1h7v-1h-7m-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"
      />
    </Svg>
  );
}
