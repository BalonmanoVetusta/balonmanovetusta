// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/

export function MenuHamburger({
  title = "menu",
  titleId = "titleMenuhamburgerId",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      aria-labelledby={titleId}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <path
        d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}
