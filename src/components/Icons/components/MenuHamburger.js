// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/
import Svg, { Path } from "components/Svg";

export function MenuHamburger({ title = "menu", motion = false, ...props }) {
  return (
    <Svg title={title} viewBox="0 0 21 21" motion={motion} {...props}>
      <Path
        d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"
        fill="none"
        stroke="currentColor"
      />
    </Svg>
  );
}
