import Link from "next/link";
import LogoVetusta from "components/LogoVetusta";
import { header, logo } from "styles/components/Header.module.css";
import Menu from "components/Menu";

export function Header() {
  return (
    <header className={header}>
      <Link href="/">
        <a title="Ir a la página principal">
          <h1>Club Balonmano Vetusta</h1>
        </a>
      </Link>
      <div className={logo}>
        <Link href="/">
          <a title="Ir a la página principal">
            <LogoVetusta
              shadow={false}
              title="Logo del Club Balonamno Vetusta"
              aria-hidden="true"
            />
          </a>
        </Link>
      </div>
      {/* <Menu /> */}
    </header>
  );
}
