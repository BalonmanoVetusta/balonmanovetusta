export function splitHex(color, alpha = undefined) {
  const validateColorRegexp = /^#?(0-9a-fA-F]{3}){1,2}([0-9a-fA-F]{1,2})?$/;
  if (!validateColorRegexp.test(color)) {
    throw new Error(`Invalid hex color ${color}`);
  }

  const colorNumbers = color.replace("#", "");
  let r;
  let g;
  let b;
  let a;
  if (colorNumbers.length === 3 || colorNumbers.length === 4) {
    [r, g, b, a = alpha || "FF"] = colorNumbers.split("");

    return [`${r}${r}`, `${g}${g}`, `${b}${b}`, `${a}${a}`];
  }

  [r, g, b, a = alpha || "FF"] = colorNumbers.match(/[\da-fA-F]{1,2}/g);

  return [r, g, b, a];
}

export function splitRGBAHSLAColor(color) {
  if (color.contains(",") && !color.contains("/")) {
    return color.split(",");
  }

  if (color.contains("/") && !color.contains(",")) {
    const [onlyColor, a = "100"] = color.split("/");
    const [r, g, b] = onlyColor.split(/\s+/);

    return [r, g, b, a];
  }

  if (color.contains("/") && color.contains(",")) {
    const [r, g, b, a = "100"] = color.split(/[,/]/);

    return [r, g, b, a];
  }
}
