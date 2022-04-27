import { splitHex, splitRGBAHSLAColor } from "./splitters";

export function convert2AlphaPercentajeUnit(n = undefined, radix = 10) {
  if (typeof n === typeof undefined) {
    return 0;
  }

  if (Number(n) <= 1) {
    return Number(n);
  }

  if (n.contains("%")) {
    return Number(n.replace("%", "")) / 100;
  }

  return n / radix;
}

export function convertFromHexToRGBA(
  hex,
  alpha = undefined,
  fallbackColorValues = null // Must be a string with 3 or 4 values separated correctly to be a value for rgba
) {
  let red, green, blue;
  try {
    const [r, g, b, a] = splitHex(hex, alpha);
    red = parseInt(r, 16);
    green = parseInt(g, 16);
    blue = parseInt(b, 16);
    alpha = convert2AlphaPercentajeUnit(a, 16);
  } catch (error) {
    if (fallbackColorValues) {
      return `rgba(${fallbackColorValues})`;
    }
    throw new Error(`Invalid hex color ${hex}`);
  }

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function convertFromRGBToRGBA(rgb, alpha = undefined) {
  const [r, g, b, a = 1] = splitRGBAHSLAColor(rgb);

  if (typeof alpha !== typeof undefined && !isNaN(alpha)) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  if (rgb.contains("/") || rgb.contains("%")) {
    return `rgba(${r}, ${g}, ${b}, ${convert2AlphaPercentajeUnit(a, 100)})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${convert2AlphaPercentajeUnit(a, 255)})`;
}
