import Link from "next/link";
import { LogoVetusta } from "components/Vetusta";
import { motion } from "framer-motion";
import { header, logo } from "styles/components/Header.module.css";
import { Fragment } from "react";

const variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export function Header() {
  return (
    <Fragment>
      <motion.header
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={header}
      >
        <div className={logo} aria-hidden="true">
          <Link href="/">
            <a title="Ir a la página principal" tabIndex={0} aria-hidden="true">
              <LogoVetusta aria-hidden="true" width="100%" />
            </a>
          </Link>
        </div>
        <Link href="/">
          <a title="Ir a la página principal" tabIndex={0}>
            <h1>Club Balonmano Vetusta</h1>
          </a>
        </Link>
      </motion.header>
    </Fragment>
  );
}
