import PageLayout from "components/PageLayout";

export default function AvisoLegalPage() {
  return (
    <PageLayout>
      <section>
        <header>
          <h1>Aviso Legal</h1>
          <nav>
            <h2>Índice</h2>
            <ol>
              <li>
                <a href="#cookies">Cookies y/o Archivos temporales</a>
              </li>
              <li>
                <a href="#source-code">
                  Código fuente, iconos y fuente de texto
                </a>
              </li>
            </ol>
          </nav>
        </header>

        <article id="cookies">
          <header>
            <h3>Cookies y/o Archivos temporales</h3>
          </header>
          <main>
            <p></p>
          </main>
        </article>

        <article id="source-code">
          <header>
            <h3>Código fuente, iconos y fuente de texto</h3>
          </header>
          <main>
            <p>
              El código fuente de esta página es libre y se distribuye en Github
              bajo la cuenta del autor del mismo.
            </p>
            <p>
              Todo lo relativo en cuanto a licencias de software y atribuciones
              de paquetes que se incluyen en esta web están en la
              <a
                href="https://github.com/gtrabanco/balonmanovetusta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                web del proyecto en Github
              </a>
              .
            </p>
            <p>
              Este sitio web se ha elaborado usando
              <a
                href="http://nextjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                NextJS
              </a>
            </p>
            <p>
              Entre los iconos se encuentran iconos con diversas licencias del
              proyecto
              <a
                href="https://github.com/Templarian/MaterialDesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Material Design
              </a>
              . También hay iconos sin licencia del proyecto{" "}
              <a
                href="https://systemuicons.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                System UI Icons
              </a>{" "}
              y un pictograma (
              <a
                href="https://es.m.wikipedia.org/wiki/Archivo:Handball_pictogram.svg"
                rel="noopener noreferrer"
              >
                pictograma de balonmano
              </a>
              ) extraído de la wikipedia.
            </p>
            <p>
              Entre las fuentes de texto usadas se encuentra la fuente{" "}
              <a
                href="https://github.com/googlefonts/alumni"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alumni One
              </a>{" "}
              con licencia{" "}
              <a
                href="http://scripts.sil.org/OFL"
                target="_blank"
                rel="noopener noreferrer"
              >
                OFL
              </a>
            </p>
          </main>
        </article>
      </section>
    </PageLayout>
  );
}
