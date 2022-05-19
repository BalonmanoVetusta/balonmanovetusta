import PageLayout from "components/PageLayout";
import {
  AbonoCarnet,
  InstagramVetusta,
  TwitterVetusta,
} from "components/Vetusta";
import Link from "next/link";
import { Fragment } from "react";

export default function ColaboraPage() {
  return (
    <PageLayout>
      <Fragment>
        <div>
          <h3>Contamos contigo</h3>
        </div>
        <section>
          <article>
            <header>
              <h1>Formas de colaborar</h1>
              <h2>Índice</h2>
            </header>
            <main>
              <p>
                Existen diversas formas de colaborar con el Club Balonmano
                Vetusta. Aquí explicamos algunas pero si estuviera interesado en
                ser patrocinador, le recomendamos que{" "}
                <Link href="/contacto">
                  <a>contacte con nosotros</a>
                </Link>
                .
              </p>
              <ol>
                <li>
                  <a href="#social-networks">
                    Seguirnos en redes sociales (también hacer retwits y
                    comentar nuestras publicaciones nos ayuda muchísimo)
                  </a>
                </li>
                <li>
                  <a href="#matches">
                    Asistir a los partidos/Hacerse socio (abono de temporada)
                  </a>
                </li>
                <li>
                  <a href="#coach">Ser entrenador del club</a>
                </li>
                <li>
                  <a href="#sponsor">
                    Ser patrocinador o colaborador (económico)
                  </a>
                </li>
              </ol>
              <div className="top">
                <a href="#index">Volver al Indice</a>
              </div>
            </main>
          </article>

          <article id="social-networks">
            <header>
              <h2>Redes Sociales</h2>
            </header>
            <main>
              <ul>
                <li>
                  <InstagramVetusta text={true} />
                </li>
                <li>
                  <TwitterVetusta text={true} />
                </li>
              </ul>
            </main>
          </article>

          <article id="matches">
            <header>
              <h2>Asistir a los partidos</h2>
            </header>
            <main>
              <div className="member-card">
                <AbonoCarnet memberName="Contamos Contigo" />
              </div>

              <p>
                La información más actualizada de los partidos siempre estará en
                la web de la Real Federación Española de Balonmano, en el{" "}
                <a
                  href="https://www.rfebm.com/competiciones/competicion.php"
                  rel="nofollow noopener noreferrer"
                >
                  apartado competiciones
                </a>
                .
              </p>

              {/* <p>
                También actualizamos los enlaces en la parte de equipos para que
                acceda directamente a la competición que debe ver para saber
                cuando es el siguiente partido.
              </p> */}

              <p>
                Tenga en cuenta que el acceso a los partidos es gratis salvo los
                encuentros del equipo de Primera Nacional que tienen coste{" "}
                <sup>*</sup>. Precios para la temporada 2022/23:
              </p>

              <div>
                {/* TODO: Update prices */}
                <ul>
                  <li>Adultos (mayores de 15 años): 10 €</li>
                  <li>
                    <sup>**</sup> Abono de adultos: 40 € (+5 € con bufanda)
                  </li>
                  <li>Niños: 5€</li>
                  <li>
                    <sup>**</sup> Abono de menores de 15 años: 15 €
                  </li>
                </ul>
              </div>

              <p>
                Los abonos se podrán comprar cuando abramos la campaña de
                abonados 2022/23.
              </p>

              <p>
                <small>
                  <sup>*</sup> Todas las temporadas hay un partido de acceso
                  libre que se comunica en redes sociales el mismo día del
                  partido. En cualquier caso{" "}
                </small>
              </p>

              <p>
                <small>
                  <sup>**</sup> Los abonos incluyen todos los partidos de liga
                  regular y amistosos que se jueguen como local. No incluyen
                  otros posibles partidos como fase de ascenso si se consiguiera
                  tal clasificación y jugar dicha fase en Oviedo.
                </small>
              </p>
            </main>
          </article>

          <article id="coach">
            <header>
              <h2>Ser entrenador del club</h2>
            </header>
            <main>
              <p>
                Para ser entrenador del club usa la página de contacto y
                envianos tu CV deportivo.
              </p>
            </main>
          </article>

          <article>
            <header>
              <h2>Ser patrocinador o colaborador (económico)</h2>
            </header>
            <main>
              <p>
                Los patrocinios se cierran de manera individualizada y hacemos
                diferentes campañas a lo largo de la temporada de las que su
                empresa se puede ver beneficiada además de los beneficios
                fiscales que genera colaborar con entidades sin ánimo de lucro.
              </p>
              <p>
                Se facilitará más información de dónde aparecerá el logotipo y
                que herramientas de patrocinio disponemos por privado mediante
                la página de{" "}
                <a
                  href="https://forms.gle/hoFNc4ijVAqUxv7P9"
                  rel="nofollow noopener noreferrer"
                >
                  contacto
                </a>
                .
              </p>
            </main>
          </article>
        </section>
        <style jsx>
          {`
            div ul {
              margin-left: 2rem;
            }
            div.top {
              position: sticky;
              bottom: 5rem;
              right: 2rem;
            }
            article#social-networks main ul {
              list-style: none;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
            }
            article#social-networks main ul li {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 50%;
              max-width: 10rem;
            }
            div.member-card {
              float: right;
              width: 22rem;
              max-width: 100%;
              margin: 0.5rem 1rem;
              border-radius: 0.5rem;
              overflow: hidden;
            }
          `}
        </style>
      </Fragment>
    </PageLayout>
  );
}
