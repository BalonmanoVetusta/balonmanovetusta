// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/
import Svg, { Path } from "components/Svg";

export function Home({ motion = false, ...props }) {
  return (
    <Svg viewBox="0 0 21 21" motion={motion} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="m1.5 10.5 9-9 9 9" />
        <Path d="M3.5 8.5v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8" />
      </g>
    </Svg>
  );
}
