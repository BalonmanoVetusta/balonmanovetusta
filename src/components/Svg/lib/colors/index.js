import { convertFromHexToRGBA, convertFromRGBToRGBA } from "./converters";
import { namedColors } from "./namedColors";

export default function convertColors2RGBA(color, alpha = undefined) {
  if (color.toLowerCase() === "none" || color.toLowerCase() === "transparent") {
    return color;
  }

  if (namedColors[color]) {
    return convertFromHexToRGBA(namedColors[color], alpha);
  }

  if (color.startsWith("rgba")) {
    return color;
  }

  if (color.startsWith("#")) {
    return convertFromHexToRGBA(color, alpha);
  }

  if (color.startsWith("hsla")) {
    throw new Error("hsla colors are not supported");
  }

  if (color.startsWith("rgb") || color.contains(",")) {
    return convertFromRGBToRGBA(color, alpha);
  }

  throw new Error(`${color} is not a valid color`);
}
