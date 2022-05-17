import Link from "next/link";

export function MyLink({
  children,
  href,
  as = undefined,
  replace = undefined,
  scroll = undefined,
  shallow = undefined,
  passHref = undefined,
  prefetch = undefined,
  locale = undefined,
  ...props
} = {}) {
  props.rel = props.rel ?? "";
  if (!props?.rel?.contains?.("noopener")) props.rel += " noopener ";

  if (!props?.rel?.contains?.("noreferrer")) props.rel += " noreferrer ";
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a {...props}>{children}</a>
    </Link>
  );
}
