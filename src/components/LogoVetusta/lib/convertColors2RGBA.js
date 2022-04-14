// red, green, blue
// const LOGO_YELLOW = "#FCEB00"; // 252, 235, 0
// const LOGO_BLACK = "#151111"; // 21, 17, 17

// const LOGO_YELLOW = "rgba(252, 235, 0, 100)"; // 252, 235, 0
// const LOGO_BLACK = "rgba(21, 17, 17, 100)"; // 21, 17, 17

const NO_ALPHA = -1;

function convert2AlphaPercentajeUnit(n, radix) {
  if (n === NO_ALPHA) {
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

function splitRGBAHSLAColor(color) {
  if (color.contains(",") && !color.contains("/")) {
    return color.split(",");
  }

  if (color.contains("/") && !color.contains(",")) {
    const [onlyColor, a] = color.split("/");
    const [r, g, b] = onlyColor.split(/\s+/);

    return [r, g, b, a];
  }

  if (color.contains("/") && color.contains(",")) {
    const [r, g, b, a] = color.split(/[,/]/);

    return [r, g, b, a];
  }
}

export function convertFromHexToRGBA(
  hex,
  alpha = NO_ALPHA,
  fallbackColor = null
) {
  let r, g, b;
  hex = hex.replace("#", "");
  if (hex.length >= 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 3) {
    r = parseInt(hex.slice(0, 1), 16);
    g = parseInt(hex.slice(1, 2), 16);
    b = parseInt(hex.slice(2, 3), 16);
  } else if (fallbackColor) {
    return convertFromHexToRGBA(fallbackColor, alpha);
  } else {
    throw new Error("Invalid hex color");
  }

  let a;
  if (alpha > NO_ALPHA) {
    a = alpha;
  } else {
    try {
      a = parseInt(hex.slice(6, 8), 16);
      a = convert2AlphaPercentajeUnit(a, 255);
      if (isNaN(a))
        throw new Error(
          `Invalid alpha ${a} - ${parseInt(hex.slice(6, 8), 16).toString(10)}`
        );
    } catch (error) {
      a = 1;
    }
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function convertFromRGBToRGBA(rgb, alpha = NO_ALPHA) {
  const [r, g, b, a = 1] = splitRGBAHSLAColor(rgb);

  if (alpha > NO_ALPHA) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  if (rgb.contains("/") || rgb.contains("%")) {
    return `rgba(${r}, ${g}, ${b}, ${convert2AlphaPercentajeUnit(a, 100)})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${convert2AlphaPercentajeUnit(a, 255)})`;
}

export default function convertColors2RGBA(color, alpha = NO_ALPHA) {
  const splitedColor = color.split(",");
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
