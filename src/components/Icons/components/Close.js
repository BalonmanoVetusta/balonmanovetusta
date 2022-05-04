// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/
import Svg, { Path } from "components/Svg";

export function Close({ title = "Close", motion = false, ...props }) {
  return (
    <Svg viewBox="0 0 24 24" title={title} motion={motion} {...props}>
      <Path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </Svg>
  );
}
