import PageLayout from "components/PageLayout";
import Link from "next/link";
import { Fragment } from "react";

export default function ColaboraPage() {
  return (
    <PageLayout>
      <Fragment>
        <section>
          <article>
            <header>
              <h1>Formas de colaborar</h1>
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
                  Seguirnos en redes sociales (también hacer retwits y comentar
                  nuestras publicaciones nos ayuda muchísimo)
                </li>
                <li>Asistir a los partidos</li>
                <li>Hacerse socio (abono de temporada)</li>
                <li>
                  Si eres entrenador de balonmano puedes escribirnos para
                  participar activamente en el club
                </li>
                <li>Patrocinar un equipo o a todo el club</li>
              </ol>
            </main>
          </article>
        </section>
      </Fragment>
    </PageLayout>
  );
}
