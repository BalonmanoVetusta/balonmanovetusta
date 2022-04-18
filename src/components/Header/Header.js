import Link from "next/link";
import LogoVetusta from "components/LogoVetusta";
import { header, logo } from "styles/components/Header.module.css";
import { Fragment } from "react";

export function Header() {
  return (
    <Fragment>
      <header className={header}>
        <div className={logo} aria-hidden="true">
          <Link href="/">
            <a title="Ir a la página principal" tabIndex={0} aria-hidden="true">
              <LogoVetusta
                shadow={false}
                title="Logo del Club Balonamno Vetusta"
                aria-hidden="true"
              />
            </a>
          </Link>
        </div>
        <Link href="/">
          <a title="Ir a la página principal" tabIndex={0}>
            <h1>Club Balonmano Vetusta</h1>
          </a>
        </Link>
      </header>
    </Fragment>
  );
}
