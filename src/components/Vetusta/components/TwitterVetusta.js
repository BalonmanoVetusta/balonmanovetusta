import { Fragment } from "react";
import { m } from "framer-motion";
import { Twitter } from "components/Icons";
import { MotionLink } from "components/MyLink";

export function TwitterVetusta({
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
        href="https://twitter.com/BM_Vetusta"
        title="Club Balonamno Vetusta de Oviedo en Twitter"
        rel="nofollow noreferrer"
        aria-label="Twitter del Club Balonamno Vetusta de Oviedo"
      >
        {icon ? (
          <Twitter
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
          <m.span aria-hidden="false">
            Twitter del Club Balonmano Vetusta
          </m.span>
        ) : null}
      </MotionLink>
    </Fragment>
  );
}
