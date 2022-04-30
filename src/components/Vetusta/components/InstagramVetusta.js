import { MotionInstagram } from "components/Icons";
import { MotionLink } from "./MotionLink";
import { Fragment } from "react";
import { motion } from "framer-motion";

const animateProps = {
  variants: {
    onTap: { scale: 0.85, opacity: 1 },
    onHoverFocus: { scale: 1.1, opacity: 1 },
    initial: { scale: 1, opacity: 0.9 },
  },
  initial: "initial",
  whileHover: "onHoverFocus",
  whileTap: "onTap",
};

export function InstagramVetusta({
  text = false,
  icon = true,
  iconClassName = "instagram-icon",
  textClassName = "instagram-text",
  fill = "#febf2e",
  pathProps = animateProps,
}) {
  pathProps.variants ??= animateProps.variants;
  pathProps.initial ??= animateProps.initial;
  pathProps.whileHover ??= animateProps.whileHover;
  pathProps.whileTap ??= animateProps.whileTap;

  return (
    <Fragment>
      <MotionLink
        href="https://instagram.com/BalonmanoVetusta"
        title="Instagram del Club Balonamno Vetusta de Oviedo"
        rel="nofollow noreferrer"
        aria-label="Instagram del Club Balonamno Vetusta de Oviedo"
      >
        {icon ? (
          <MotionInstagram
            width="100%"
            height="100%"
            aria-hidden="true"
            className={iconClassName}
            pathProps={pathProps}
            fill={fill}
          />
        ) : null}

        {text ? (
          <motion.span className={textClassName}>
            Instagram del Club Balonmano Vetusta
          </motion.span>
        ) : null}
      </MotionLink>
    </Fragment>
  );
}
