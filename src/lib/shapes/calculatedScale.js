export default function calculateScale(
  originalWidth,
  originalHeight,
  { width = 0, height = 0, precission = 0 } = {}
) {
  const scaleX = width / originalWidth;
  const scaleY = height / originalHeight;

  if (scaleX === scaleY && width > 0 && height > 0) {
    return {
      width: Number(width.toFixed(precission)),
      height: Number(height.toFixed(precission)),
    };
  }

  if ((scaleX === 0 && scaleY > 0) || (scaleY < scaleX && scaleY > 0)) {
    const calculatedWidth = originalWidth * scaleY;
    return {
      width: Number(calculatedWidth.toFixed(precission)),
      height: Number(height.toFixed(precission)),
    };
  }

  if ((scaleY === 0 && scaleX > 0) || (scaleX < scaleY && scaleX > 0)) {
    const calculatedHeight = originalHeight * scaleX;
    return {
      width: Number(width.toFixed(precission)),
      height: Number(calculatedHeight.toFixed(precission)),
    };
  }

  return {
    width: Number(originalWidth.toFixed(precission)),
    height: Number(originalHeight.toFixed(precission)),
  };
}
