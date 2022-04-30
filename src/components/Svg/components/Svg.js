import { useId, useState } from "react";
import convertColors2RGBA from "../lib/colors";
import { motion } from "framer-motion";
import renderStyledSvgStylesForThemes from "../lib/renderSvgStylesForThemes";

// cssVariableName scope will be global so should be a unique value or name,
// if you provide color values as props the css colors will be added to
// support dark mode in the svg component.
// If you provide css variable name dark/light mode color definition must be
// added by you in your css code. If the value is null the variable will be
// created by using "useId" function and add automatically the css in the
// component but it will be added with global scope to make dark/light mode
// works.
export function Svg({
  children,
  title,
  description,
  cssVariableNamePrefix = undefined,
  titleId = undefined,
  descriptionId = undefined,
  fill = undefined,
  fillDark = undefined,
  stroke = undefined,
  strokeDark = undefined,
  shadow = false,
  shadowLightColor = undefined, // if null the shadow color if enabled will be the same as fill
  shadowDarkColor = undefined, // if null the shadow color if enabled will be the same as fillDark
  safeLightFillColor = "#000000",
  safeDarkFillColor = "#FFFFFF",
  safeLightStrokeColor = undefined,
  safeDarkStrokeColor = undefined,
  safeLightShadowColor = "rgba(0, 0, 0, 0.5)",
  safeDarkShadowColor = "rgba(0, 0, 0, 0.5)",
  motion: shouldBeMotionSvg = false,
  ...props
} = {}) {
  // ids & default css variable name
  const id = useId();
  titleId = titleId || `${id}-title`;
  descriptionId = descriptionId || `${id}-description`;
  const [cssVariablePrefix] = useState(
    cssVariableNamePrefix || `--svg-${id.match(/\w/gi).join("-")}`
  );

  // Default color values
  const [lightFillColor] = useState(fill || safeLightFillColor);
  const [darkFillColor] = useState(fillDark || fill || safeDarkFillColor);
  const [lightStrokeColor] = useState(stroke || safeLightStrokeColor);
  const [darkStrokeColor] = useState(
    strokeDark || stroke || safeDarkStrokeColor
  );

  // Default values reduce the size of SVG files
  props.xmlns = props.xmlns || "http://www.w3.org/2000/svg";
  props.xmlnsXlink = props.xmlnsXlink || "http://www.w3.org/1999/xlink";
  props.role = props.role || "img";
  props.preserveAspectRatio = props.preserveAspectRatio || "xMidYMid meet";

  // Use rgba colors for shadows
  const [lightShadow] = useState(() => {
    try {
      return convertColors2RGBA(shadowLightColor || lightFillColor, 0.5);
    } catch (error) {
      return safeLightShadowColor;
    }
  });
  const [darkShadow] = useState(() => {
    try {
      return convertColors2RGBA(shadowDarkColor || darkFillColor, 0.5);
    } catch (error) {
      return safeDarkShadowColor;
    }
  });

  // Title and description
  if (!props["aria-labelledby"] && (title || description)) {
    const labelledby =
      (title ? titleId : "") + (description ? ` ${descriptionId}` : "");
    props["aria-labelledby"] = props["aria-labelledby"] || labelledby;
  }

  const conditionalSylesForThemes = () => {
    return typeof cssVariableNamePrefix === typeof undefined ||
      (cssVariableNamePrefix === null && cssVariablePrefix)
      ? renderStyledSvgStylesForThemes({
          cssVariablePrefix,
          lightFillColor,
          lightStrokeColor,
          lightShadow,
          darkFillColor,
          darkStrokeColor,
          darkShadow,
        })
      : null;
  };

  const ConditionalSvg = ({ children, ...props }) =>
    shouldBeMotionSvg ? (
      <motion.svg {...props}>{children}</motion.svg>
    ) : (
      <svg {...props}>{children}</svg>
    );

  return (
    <ConditionalSvg {...props}>
      <title id={titleId}>{title}</title>
      <desc id={descriptionId}>{description}</desc>
      {children}
      {conditionalSylesForThemes}
      <style jsx>{`
        svg {
          fill: var(${cssVariablePrefix}-fill);
          stroke: var(${cssVariablePrefix}-stroke, transparent);
          ${shadow
            ? `filter: drop-shadow(5px 5px 3px var(${cssVariablePrefix}-shadow, rgba(0, 0, 0, 0, 0.9)));`
            : ""}
        }
      `}</style>
    </ConditionalSvg>
  );
}

export function MotionSvg({ children, ...props }) {
  props.motion = true;
  return <Svg {...props}>{children}</Svg>;
}
