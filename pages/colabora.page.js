import { ArrowUp } from "components/Icons";
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
          <article id="index">
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
            </main>
          </article>

          <article id="social-networks">
            <header>
              <h2>Redes Sociales</h2>
            </header>
            <main>
              <div>
                <InstagramVetusta text={true} />
              </div>
              <div>
                <TwitterVetusta text={true} />
              </div>
            </main>
          </article>

          <article id="matches">
            <header>
              <h2>Asistir a los partidos</h2>
            </header>
            <main>
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
                Tenga en cuenta que el acceso a <strong>los partidos</strong> es
                gratis salvo los encuentros del equipo{" "}
                <strong>de Primera Nacional</strong>
                <sup>*</sup> que <strong>tienen coste</strong>.
              </p>{" "}
              <p>Precios para la temporada 2022/23:</p>
              <div>
                {/* TODO: Update prices */}
                <ul>
                  <li>
                    Adultos (mayores de 15 años): <strong>10 €</strong>
                  </li>
                  <li>
                    Abono<sup>**</sup> de adultos:{" "}
                    <strong>40 € (+5 € con bufanda)</strong>
                  </li>
                  <li>
                    Niños: <strong>5 €</strong>
                  </li>
                  <li>
                    Abono<sup>**</sup> de menores de 15 años:{" "}
                    <strong>15 €</strong>
                  </li>
                </ul>
              </div>
              <div className="row-center">
                <div className="member-card">
                  <AbonoCarnet memberName="Contamos Contigo" />
                </div>
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
              <h2>Ser parte del club</h2>
            </header>
            <main>
              <p>
                Puedes colaborar formando parte del club de diversas formas ya
                que a veces necesitamos personas voluntarias.
              </p>
              <p>
                También puedes ser entrenador del club, usa la página de
                contacto y envianos tu CV deportivo, es necesario contar al
                menos con la titulación de monitor de balonmano o equivalente.
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

          <div className="top">
            <a href="#index">
              <div className="icon">
                <ArrowUp
                  width="100%"
                  title="Volver al indice"
                  aria-hidden="true"
                  fill="var(--text-color-primary)"
                />
              </div>
              Volver al Indice
            </a>
          </div>
        </section>
        <style jsx>
          {`
            div.icon {
              display: inline-block;
              width: 2rem;
            }

            div ul {
              margin-left: 2rem;
            }
            div.top {
              position: sticky;
            }

            div.row-center {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0.5rem;
            }

            article#social-networks main {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              margin: 0 3rem;
            }
            article#social-networks main div {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: 50%;
              max-width: 10rem;
            }
            div.member-card {
              max-width: 100%;
              padding: 0;
              margin: 0.5rem auto;
              overflow: hidden;
              width: 22rem;
              height: auto;
            }
          `}
        </style>
      </Fragment>
    </PageLayout>
  );
}
