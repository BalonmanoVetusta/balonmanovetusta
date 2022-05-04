import { Fragment, useId } from "react";
import convertColors2RGBA from "../lib/colors";
import { motion } from "framer-motion";
import { MotionContextProvider } from "../context/SvgMotionContext";

// It will create a global css style scope to support dark and light mode
// the css variable prefix will be based on the id, so it must be unique
// if you define cssVariableNamePrefix you must define css variables and
// do the light/dark logic in your global css. Useful for reusable svgs
// Css variables are provided with fallback colors
const ConditionalSvg = ({
  children,
  id,
  shouldBeMotionSvg = false,
  cssVariableNamePrefix = undefined,
  fill = undefined,
  fillDark = undefined,
  stroke = undefined,
  strokeDark = undefined,
  shadow = false,
  shadowLightColor = undefined, // if null the shadow color if enabled will be the same as fill
  shadowDarkColor = undefined, // if null the shadow color if enabled will be the same as fillDark
  safeLightFillColor = "#000000",
  safeDarkFillColor = "#FFFFFF",
  safeLightStrokeColor = "transparent",
  safeDarkStrokeColor = "transparent",
  safeLightShadowColor = "rgba(0, 0, 0, 0.5)",
  safeDarkShadowColor = "rgba(0, 0, 0, 0.5)",
  ...props
}) => {
  // Default color values
  const lightFillColor = fill || safeLightFillColor;
  const darkFillColor = fillDark || fill || safeDarkFillColor;
  const lightStrokeColor = stroke || safeLightStrokeColor;
  const darkStrokeColor = strokeDark || stroke || safeDarkStrokeColor;

  // Use rgba colors for shadows
  let lightShadow, darkShadow;
  try {
    lightShadow = convertColors2RGBA(shadowLightColor || lightFillColor, 0.8);
    darkShadow = convertColors2RGBA(shadowDarkColor || darkFillColor, 0.8);
  } catch (error) {
    lightShadow = safeLightShadowColor;
    darkShadow = safeDarkShadowColor;
  }

  const cssVariablePrefix = `--${id.replace(/[^\w\d]/gi, "-")}`;

  return (
    <Fragment>
      {shouldBeMotionSvg ? (
        <motion.svg id={id} {...props}>
          {children}
        </motion.svg>
      ) : (
        <svg id={id} {...props}>
          {children}
        </svg>
      )}
      <style global jsx>
        {`
          @media only screen and (prefers-color-scheme: light) {
            :root:not([data-theme="dark"]) {
              ${cssVariablePrefix}-fill: ${lightFillColor};
              ${cssVariablePrefix}-stroke: ${lightStrokeColor};
              ${cssVariablePrefix}-shadow: ${lightShadow};
            }
          }
          [data-theme="light"] {
            ${cssVariablePrefix}-fill: ${lightFillColor};
            ${cssVariablePrefix}-stroke: ${lightStrokeColor};
            ${cssVariablePrefix}-shadow: ${lightShadow};
          }
          @media only screen and (prefers-color-scheme: dark) {
            :root:not([data-theme="light"]) {
              ${cssVariablePrefix}-fill: ${darkFillColor};
              ${cssVariablePrefix}-stroke: ${darkStrokeColor};
              ${cssVariablePrefix}-shadow: ${darkShadow};
            }
          }
          [data-theme="dark"] {
            ${cssVariablePrefix}-fill: ${darkFillColor};
            ${cssVariablePrefix}-stroke: ${darkStrokeColor};
            ${cssVariablePrefix}-shadow: ${darkShadow};
          }
        `}
      </style>
      <style jsx>
        {`
          svg {
            fill: var(${cssVariablePrefix}-fill, #000);
            stroke: var(${cssVariablePrefix}-stroke, transparent);
            ${shadow
              ? `filter: drop-shadow(
              5px 5px 3px
                var(${cssVariablePrefix}-shadow, rgba(0, 0, 0, 0.8))
            );`
              : null}
          }
        `}
      </style>
    </Fragment>
  );
};

export function Svg({
  children,
  title,
  description,
  cssVariableNamePrefix = undefined,
  titleId = undefined,
  descriptionId = undefined,
  motion: shouldBeMotionSvg = false,
  ...props
} = {}) {
  // ids & default css variable name
  const id = useId();
  titleId = titleId || `${id}-title`;
  descriptionId = descriptionId || `${id}-description`;

  // Default values reduce the size of SVG files
  props.xmlns = props.xmlns || "http://www.w3.org/2000/svg";
  props.xmlnsXlink = props.xmlnsXlink || "http://www.w3.org/1999/xlink";
  props.role = props.role || "img";
  props.preserveAspectRatio = props.preserveAspectRatio || "xMidYMid meet";

  // Title and description
  if (!props["aria-labelledby"] && (title || description)) {
    const labelledby =
      (title ? titleId : "") + (description ? ` ${descriptionId}` : "");
    props["aria-labelledby"] = props["aria-labelledby"] || labelledby;
  }

  return (
    <ConditionalSvg shouldBeMotionSvg={shouldBeMotionSvg} id={id} {...props}>
      <title id={titleId}>{title}</title>
      <desc id={descriptionId}>{description}</desc>
      {/* // Context to propagate if svg elements must be also motion elements or not */}
      <MotionContextProvider motion={motion}>{children}</MotionContextProvider>
    </ConditionalSvg>
  );
}

export function MotionSvg({ children, ...props }) {
  props.motion = true;
  return <Svg {...props}>{children}</Svg>;
}
