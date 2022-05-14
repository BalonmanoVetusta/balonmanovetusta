import css from "styled-jsx/css";

export function svgStyles({ cssVariablePrefix, shadow }) {
  const { className, style } = css.resolve`
    fill: var(${cssVariablePrefix}-fill, #000000);
    stroke: var(${cssVariablePrefix}-stroke, transparent);
    ${shadow
      ? `filter: drop-shadow(
      5px 5px 3px
        var(${cssVariablePrefix}-shadow, rgba(0, 0, 0, 0.8))
    );`
      : ""}
  `;

  return { svgClassName: className, svgStyle: style };
}
