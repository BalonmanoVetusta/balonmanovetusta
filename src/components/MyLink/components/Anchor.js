export function Anchor({ children, ...props }) {
  props.rel = props.rel ?? "";
  if (!props.rel.contains("noopener")) props.rel += " noopener ";

  if (!props.rel.contains("noreferrer")) props.rel += " noreferrer ";

  return <a {...props}>{children}</a>;
}
