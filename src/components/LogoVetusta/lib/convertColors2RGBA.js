// red, green, blue
// const LOGO_YELLOW = "#FCEB00"; // 252, 235, 0
// const LOGO_BLACK = "#151111"; // 21, 17, 17

// const LOGO_YELLOW = "rgba(252, 235, 0, 100)"; // 252, 235, 0
// const LOGO_BLACK = "rgba(21, 17, 17, 100)"; // 21, 17, 17

const NO_ALPHA = -1;

function convertFromHexToRGBA(hex, alpha = NO_ALPHA) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  let a;
  if (alpha > NO_ALPHA) {
    a = alpha;
  } else {
    try {
      a = parseInt(hex.slice(7, 9), 16);
    } catch (error) {
      a = 100;
    }
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function convertFromRGBToRGBA(rgb, alpha = NO_ALPHA) {
  const r = parseInt(rgb.slice(1, 3), 10);
  const g = parseInt(rgb.slice(3, 5), 10);
  const b = parseInt(rgb.slice(5, 7), 10);
  let a;
  if (alpha > NO_ALPHA) {
    a = alpha;
  } else {
    try {
      a = parseInt(rgb.slice(7, 9), 10);
    } catch (error) {
      a = 100;
    }
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function convertFromHslatoRGBA(color, alpha = NO_ALPHA) {
  const hsl = color.slice(4, -1).split(",");
  const h = parseInt(hsl[0], 10);
  const s = parseInt(hsl[1], 10);
  const l = parseInt(hsl[2], 10);
  let a;
  if (alpha > NO_ALPHA) {
    a = alpha;
  } else {
    try {
      a = parseInt(hsl[3], 10);
    } catch (error) {
      a = 100;
    }
  }

  return `rgba(${h}, ${s}, ${l}, ${a})`;
}

export default function convertColors2RGBA(color, alpha = NO_ALPHA) {
  const splitedColor = color.split(",");
  if (color.startsWith("rgba")) {
    return color;
  }

  if (color.startsWith("rgb")) {
    return convertFromRGBToRGBA(color, alpha);
  }

  if (color.startsWith("#")) {
    return convertFromHexToRGBA(color, alpha);
  }

  if (color.startsWith("hsla")) {
    return convertFromHslatoRGBA(color, alpha);
  }

  // separated for commas value supposed to be rgb or rgba
  if (splitedColor.split(",").length >= 3) {
    splitedColor[3] = splitedColor[3] ? splitedColor[3] : 100;
    return alpha > NO_ALPHA
      ? `rgba(${splitedColor.slice(0, 3).join(",")}, ${alpha})`
      : `${splitedColor.join(",")}`;
  }

  throw new Error(`${color} is not a valid color`);
}
