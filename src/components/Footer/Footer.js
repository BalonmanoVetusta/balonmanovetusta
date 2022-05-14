import { Facebook, Instagram, Twitter } from "components/Icons";
import Link from "next/link";
import { Fragment } from "react";

export function Footer() {
  return (
    <footer>
      <section>
        <article>
          <header>
            <h4>Mapa del sitio</h4>
          </header>
          <main>
            <nav>
              <ul>
                <li>
                  <Link scroll={false} href="/">
                    <a title="Página principal">Página Principal</a>
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/socios">
                    <a title="Página para registrarse como socio o acceder a tu cuenta de socio">
                      Socios
                    </a>
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/equipos">
                    <a title="Equipos del club">Equipos</a>
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/practica-balonmano">
                    <a title="Practica balonmano con el Club Balonmano Vetusta de Oviedo">
                      Practica balonmano en Oviedo
                    </a>
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/quienes-somos">
                    <a title="Quienes somos y como llegamos a este momento en el club">
                      Quienes somos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/aviso-legal">
                    <a title="Cosas que la ley nos obliga a decir o que esta bien mencionar">
                      Aviso Legal
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </article>
        <article>
          <header>
            <h4>¡Siguenos!</h4>
          </header>
          <main>
            <ul className="social-networks">
              <li>
                <Instagram width="100%" height="100%" aria-hidden="true" />
              </li>
              <li>
                <Facebook width="100%" height="100%" aria-hidden="true" />
              </li>
              <li>
                <Twitter width="100%" height="100%" aria-hidden="true" />
              </li>
            </ul>
          </main>
        </article>
      </section>

      <section>
        <header>
          <h4>Legal</h4>
        </header>
        <main>
          <summary>
            <p>
              Club Balonmano Vetusta es una entidad deportiva localizada en
              Oviedo con NIF XXXX, puede consultar todos los datos legales en la
              página
              <Link href="/aviso-legal">
                <a title="Información legal"> Aviso Legal</a>
              </Link>
              .
            </p>
          </summary>
        </main>
      </section>
    </footer>
  );
}
