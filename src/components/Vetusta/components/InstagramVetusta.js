import { Instagram } from "components/Icons";
import { Fragment } from "react";
import { MotionLink } from "./MotionLink";

export function InstagramVetusta({
  text = false,
  icon = true,
  width = "48",
  height = "48",
  iconClassName = "instagram-icon",
  textClassName = "instagram-text",
  fillColorVariable = "--instagram-icon-fill",
  fillColorDefaultColor = "#febf2e",
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
            className={iconClassName}
          />
        ) : null}

        {text ? (
          <span className={textClassName}>
            Instagram del Club Balonmano Vetusta
          </span>
        ) : null}
      </MotionLink>
      <style jsx>{`
        svg path {
          fill: var(${fillColorVariable}, ${fillColorDefaultColor});
        }
      `}</style>
    </Fragment>
  );
}
