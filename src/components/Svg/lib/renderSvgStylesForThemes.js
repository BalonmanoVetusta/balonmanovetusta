export default function renderStyledSvgStylesForThemes({
  cssVariableNamePrefix = undefined,
  cssVariablePrefix,
  lightFillColor = "#000",
  lightStrokeColor = "transparent",
  lightShadow = "transparent",
  darkFillColor = "#FFF",
  darkStrokeColor = "transparent",
  darkShadow = "transparent",
  shadow = false,
} = {}) {
  if (cssVariableNamePrefix) {
    if (!cssVariablePrefix) {
      throw new Error("cssVariablePrefix is required");
    }

    return `
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

        fill: var(${cssVariablePrefix}-fill, #000);
        stroke: var(${cssVariablePrefix}-stroke, transparent);
        ${
          shadow
            ? `filter: drop-shadow(5px 5px 3px var(${cssVariablePrefix}-shadow, rgba(0, 0, 0, 0, 0.9)));`
            : ""
        }
      `;
  }
}
