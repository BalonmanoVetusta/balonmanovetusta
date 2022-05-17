import { Fragment } from "react";
import { motion } from "framer-motion";
import { Instagram } from "components/Icons";
import { MotionLink } from "components/MyLink";

export function InstagramVetusta({
  text = false,
  icon = true,
  variants = {
    onTap: { scale: 0.85, opacity: 1 },
    onHoverFocus: { scale: 1.1, opacity: 1 },
    initial: { scale: 1, opacity: 0.9 },
  },
  initial = "initial",
  whileHover = "onHoverFocus",
  whileTap = "onTap",
  ...props
}) {
  return (
    <Fragment>
      <MotionLink
        href="https://instagram.com/BalonmanoVetusta"
        title="Instagram del Club Balonamno Vetusta de Oviedo"
        rel="nofollow noreferrer"
        aria-label="Instagram del Club Balonamno Vetusta de Oviedo"
      >
        {icon ? (
          <Instagram
            width="100%"
            height="100%"
            aria-hidden="true"
            variants={variants}
            initial={initial}
            whileHover={whileHover}
            whileTap={whileTap}
            {...props}
          />
        ) : null}

        {text ? (
          <motion.span aria-hidden="false">
            Instagram del Club Balonmano Vetusta
          </motion.span>
        ) : null}
      </MotionLink>
    </Fragment>
  );
}
