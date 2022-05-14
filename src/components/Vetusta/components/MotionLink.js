import Link from "next/link";
import { motion } from "framer-motion";

const linkVariants = {
  onTap: { scale: 0.85, opacity: 1 },
  onHoverFocus: { scale: 1.1, opacity: 1 },
  initial: { scale: 1, opacity: 0.9 },
};

export function MotionLink({
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
}) {
  return (
    <motion.span
      variants={linkVariants}
      initial="initial"
      whileHover="onHoverFocus"
      whileTap="onTap"
      whileFocus="onHoverFocus"
    >
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
    </motion.span>
  );
}
