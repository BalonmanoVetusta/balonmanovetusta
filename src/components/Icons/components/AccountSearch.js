// This is copied from Material Design Icons, see:
//   - https://github.com/Templarian/MaterialDesign
//   - https://materialdesignicons.com

export function AccountSearch({
  title = "Buscar cuenta",
  titleId = "titleAccountSearchId",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <path d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5M10 4a4 4 0 0 1 4 4c0 .91-.31 1.75-.82 2.43-.86.32-1.63.83-2.27 1.47L10 12a4 4 0 0 1-4-4 4 4 0 0 1 4-4M2 20v-2c0-2.12 3.31-3.86 7.5-4-.32.78-.5 1.62-.5 2.5 0 1.29.38 2.5 1 3.5H2Z" />
    </svg>
  );
}