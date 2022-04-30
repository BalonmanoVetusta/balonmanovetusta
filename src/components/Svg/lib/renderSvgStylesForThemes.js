export default function renderStyledSvgStylesForThemes({
  cssVariablePrefix = undefined,
  lightFillColor = "#000",
  lightStrokeColor = "transparent",
  lightShadow = "transparent",
  darkFillColor = "#FFF",
  darkStrokeColor = "transparent",
  darkShadow = "transparent",
} = {}) {
  if (
    typeof cssVariablePrefix === typeof undefined ||
    cssVariablePrefix === null
  ) {
    throw new Error('"cssVariablePrefix" is required');
  }
  return (
    <style global jsx>{`
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
    `}</style>
  );
}
