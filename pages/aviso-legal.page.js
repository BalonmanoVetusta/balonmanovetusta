import PageLayout from "components/PageLayout";
import { Fragment, useState } from "react";

export default function AvisoLegalPage({
  domain,
  socialName,
  legalName,
  sourceURL,
  cif = "",
  mailParts = [],
  rfebmLink = "",
}) {
  const [emailAddress, setEmailAddress] = useState(false);

  const handleClick = () => {
    setEmailAddress(true);
  };

  const renderEmail = () => {
    const [address, domain, extension] = mailParts;

    const email = `${address.join("")}@${domain.join("")}.${extension.join(
      ""
    )}`;

    return (
      <Fragment>
        {" "}
        {emailAddress ? (
          <a href={`mailto:${email}`} rel="noindex noopener">
            <code>{email}</code>
          </a>
        ) : (
          <Fragment>
            <button onClick={handleClick} aria-hidden="false">
              Click para ver la dirección de correo electrónico
            </button>
            <style jsx>{`
              button {
                background-color: transparent;
                border: none;
                color: var(--text-color-primary);
                cursor: pointer;
                font-weight: bolder;
                font-size: 1.2rem;
              }
            `}</style>
          </Fragment>
        )}{" "}
      </Fragment>
    );
  };

  return (
    <PageLayout>
      <section>
        <header>
          <h1>Aviso Legal</h1>
          <nav id="index">
            <h2>Índice</h2>
            <ol>
              <li>
                <a href="#legal">Aviso Legal: Consideraciones</a>
              </li>
              <li>
                <a href="#data">Datos identificativos</a>
              </li>
              <li>
                <a href="#responsability-warranty">
                  Exención de responsabilidades
                </a>
              </li>
              <li>
                <a href="#web-content">Contenido de la web</a>
              </li>
              <li>
                <a href="#privacy-policy">Política de Privacidad</a>
              </li>
              <li>
                <a href="#cookies">
                  Política de Cookies y/o Archivos temporales
                </a>
              </li>
              <li>
                <a href="intellectual-property">
                  Derechos de propiedad intelectual
                </a>
              </li>
              <li>
                <a href="#source-code">
                  Código fuente, iconos y fuente de texto
                </a>
              </li>
              <li>
                <a href="#data-rights">Datos para ejercer sus derechos</a>
              </li>
            </ol>
          </nav>
        </header>
        <article>
          <header>
            <h3>Aviso Legal: Consideraciones</h3>
          </header>
          <main>
            <p>
              Club Balonmano Vetusta, responsable del sitio web, en adelante
              RESPONSABLE, pone a disposición de los usuarios el presente
              documento, con el que pretende dar cumplimiento a las obligaciones
              dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE
              Nº 166, así como informar a todos los usuarios del sitio web
              respecto a cuáles son las condiciones de uso.
            </p>

            <p>
              Toda persona que acceda a este sitio web asume el papel de
              usuario, comprometiéndose a la observancia y cumplimiento riguroso
              de las disposiciones aquí dispuestas, así como a cualquier otra
              disposición legal que fuera de aplicación.
            </p>

            <p>
              Club Balonmano Vetusta se reserva el derecho de modificar
              cualquier tipo de información que pudiera aparecer en el sitio
              web, sin que exista obligación de preavisar o poner en
              conocimiento de los usuarios dichas obligaciones, entendiéndose
              como suficiente con la publicación en el sitio web de CB Remudas
            </p>
          </main>
        </article>

        <article id="data">
          <header>
            <h3>Datos identificativos</h3>
          </header>
          <main>
            <ul>
              <li>
                Nombre de dominio:{" "}
                <code>
                  <strong>{domain}</strong>
                </code>
              </li>
              <li>
                Nombre comercial:{" "}
                <code>
                  <strong>{legalName}</strong>
                </code>
              </li>
              <li>
                Denominación Social:{" "}
                <code>
                  <strong>{socialName}</strong>
                </code>
              </li>
              <li>NIF/CIF: {cif}</li>
              <li>Correo electrónico: {renderEmail()}</li>
              <li>
                Domicilio social así como otros datos relevantes actualizados
                pueden consultarse en{" "}
                <a href={rfebmLink} rel="noreferrer nofollow">
                  {" "}
                  la web de datos del club de la Real Federación de Balonmano de
                  España
                </a>
                .
              </li>
            </ul>
          </main>
        </article>

        <article id="responsability-warranty">
          <header>
            <h3>Exención de responsabilidades</h3>
          </header>
          <main>
            <p>
              El RESPONSABLE se exime de cualquier tipo de responsabilidad
              derivada de la información publicada en su sitio web siempre que
              esta información haya sido manipulada o introducida por un tercero
              ajeno al mismo.
            </p>
            <p>
              Sobre las garantías y responsabilidades del código fuente, debe
              consultarlas en el fichero{" "}
              <a
                href={`${sourceURL}/blob/main/LICENSE.md`}
                rel="nofollow noreferrer"
              >
                LICENSE.md
              </a>{" "}
              (en inglés) del{" "}
              <a href={sourceURL} rel="nofollow noreferrer">
                código fuente
              </a>
              .
            </p>
          </main>
        </article>

        <article id="web-content">
          <header>
            <h3>Contenido de la web</h3>
          </header>
          <main>
            <p>
              El {socialName} se reserva el derecho a actualizar, modificar o
              eliminar la información contenida en sus páginas web pudiendo
              incluso limitar o no permitir el acceso a dicha información a
              ciertos usuarios.
            </p>
            <p>
              {socialName} no asume responsabilidad alguna por la información
              contenida en páginas web de terceros a las que se pueda acceder
              por “links” o enlaces desde cualquier página web propiedad de{" "}
              {socialName}
            </p>
            <p>
              La presencia de “links” o enlaces en las páginas web de{" "}
              {socialName} tiene finalidad meramente informativa y en ningún
              caso supone sugerencia, invitación o recomendación sobre los
              mismos.
            </p>
          </main>
        </article>

        <article id="privacy-policy">
          <header>
            <h3>Política de Privacidad</h3>
          </header>
          <main>
            <p>
              {socialName}, en adelante RESPONSABLE, es el Responsable del
              tratamiento de los datos personales del Usuario y le informa que
              estos datos serán tratados de conformidad con lo dispuesto en el
              Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a
              la protección de las personas físicas en lo que respecta al
              tratamiento de datos personales y a la libre circulación de estos
              datos, por lo que se le facilita la siguiente información del
              tratamiento:
            </p>
            <p>
              Fin del tratamiento: mantener una relación comercial con el
              Usuario. Las operaciones previstas para realizar el tratamiento
              son:
            </p>
            <p>
              Tramitar encargos, solicitudes o cualquier tipo de petición que
              sea realizada por el usuario a través de cualquiera de las formas
              de contacto que se ponen a su disposición.
            </p>
            <p>
              Criterios de conservación de los datos: se conservarán mientras
              exista un interés mutuo para mantener el fin del tratamiento y
              cuando ya no sea necesario para tal fin, se suprimirán con medidas
              de seguridad adecuadas para garantizar la seudonimización de los
              datos o la destrucción total de los mismos.
            </p>
            <p>
              Comunicación de los datos: No se comunicarán los datos a terceros
              salvo obligación legal.
            </p>
            <p>Derechos que asisten al Usuario:</p>
            <ol>
              <li>
                <p>Derecho a retirar el consentimiento en cualquier momento.</p>
              </li>
              <li>
                <p>
                  Derecho de acceso, rectificación, portabilidad y supresión de
                  sus datos y a la limitación u oposición al su tratamiento.
                </p>
              </li>
              <li>
                <p>
                  Derecho a presentar una reclamación ante la autoridad de
                  control (agpd.es) si considera que el tratamiento no se ajusta
                  a la normativa vigente.
                </p>
              </li>
            </ol>
          </main>
        </article>

        <article id="cookies">
          <header>
            <h3>Política de Cookies y/o Archivos temporales</h3>
          </header>
          <main>
            <p></p>
          </main>
        </article>

        <article id="intellectual-property">
          <header>
            <h3>Propiedad intelectual</h3>
          </header>
          <main>
            <p>
              La autoria del código fuente de este sitio web corresponde a
              <a href="https://github.com/gtrabanco" rel="nofollow noreferrer">
                Gabriel Trabanco Llano
              </a>{" "}
              el cual ha cedido todos los derechos de uso sobre el Club
              Balonmano Vetusta, el cual se le cita como el RESPONSABLE del
              sitio web en este aviso legal.
            </p>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo
              su programación, edición, compilación y demás elementos necesarios
              para su funcionamiento, los diseños, logotipos, texto y/o
              gráficos, son propiedad de el RESPONSABLE o, si es el caso,
              dispone de licencia o autorización expresa por parte de los
              autores.
            </p>
            <p>
              Todos los contenidos del sitio web se encuentran debidamente
              protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p>
              Independientemente de la finalidad para la que fueran destinados,
              la reproducción total o parcial, uso, explotación, distribución y
              comercialización, requiere en todo caso de la autorización escrita
              previa por parte del RESPONSABLE o el autor. Cualquier uso no
              autorizado previamente se considera un incumplimiento grave de los
              derechos de propiedad intelectual o industrial del autor.
            </p>
            <p>
              Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y
              que pudieran aparecer en el sitio web, pertenecen a sus
              respectivos propietarios, siendo ellos mismos responsables de
              cualquier posible controversia que pudiera suscitarse respecto a
              los mismos.
            </p>
            <p>
              El RESPONSABLE reconoce a favor de sus titulares los
              correspondientes derechos de propiedad intelectual e industrial,
              no implicando su sola mención o aparición en el sitio web la
              existencia de derechos o responsabilidad alguna sobre los mismos,
              como tampoco respaldo, patrocinio o recomendación por parte del
              mismo.
            </p>
            <p>
              Para realizar cualquier tipo de observación respecto a posibles
              incumplimientos de los derechos de propiedad intelectual o
              industrial, así como sobre cualquiera de los contenidos del sitio
              web, puede hacerlo a través del correo electrónico
              {renderEmail()}
            </p>

            <h4>
              CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA
              POR EL USUARIO
            </h4>
            <p>
              Los Usuarios, mediante la marcación de las casillas
              correspondientes y entrada de datos en los campos, marcados con un
              asterisco (*) en los formularios de contactos, aceptan
              expresamente y de forma libre e inequívoca, que sus datos son
              necesarios para atender su petición, por parte del prestador,
              siendo voluntaria la inclusión de datos en los campos restantes.
              El Usuario garantiza que los datos personales facilitados al
              RESPONSABLE son veraces y se hace responsable de comunicar
              cualquier modificación de los mismos. El RESPONSABLE informa y
              garantiza expresamente a los usuarios que sus datos personales no
              serán cedidos en ningún caso a terceros, y que siempre que
              realizara algún tipo de cesión de datos personales, se pedirá
              previamente el consentimiento expreso, informado e inequívoco por
              parte los Usuarios. Todos los datos solicitados a través del sitio
              web son obligatorios, ya que son necesarios para la prestación de
              un servicio óptimo al Usuario. En caso de que no sean facilitados
              todos los datos, no se garantiza que la información y servicios
              facilitados sean completamente ajustados a sus necesidades.
            </p>

            <h4>MEDIDAS DE SEGURIDAD</h4>
            <p>
              Que de conformidad con lo dispuesto en las normativas vigentes en
              protección de datos personales, el RESPONSABLE está cumpliendo con
              todas las disposiciones de las normativas GDPR para el tratamiento
              de los datos personales de su responsabilidad, y manifiestamente
              con los principios descritos en el artículo 5 del GDPR, por los
              cuales son tratados de manera lícita, leal y transparente en
              relación con el interesado y adecuados, pertinentes y limitados a
              lo necesario en relación con los fines para los que son tratados.
              El RESPONSABLE garantiza que ha implementado políticas técnicas y
              organizativas apropiadas para aplicar las medidas de seguridad que
              establecen el GDPR con el fin de proteger los derechos y
              libertades de los Usuarios y les ha comunicado la información
              adecuada para que puedan ejercerlos.
            </p>
          </main>
        </article>

        <article id="source-code">
          <header>
            <h3>Código fuente, iconos y fuente de texto</h3>
          </header>
          <main>
            <p>
              El código fuente de esta página es libre y se distribuye en Github
              desde la organización creada a tal efecto del Club Balonmano
              Vetusta.
            </p>
            <p>
              Todo lo relativo en cuanto a licencias de software y atribuciones
              de paquetes que se incluyen en esta web están en la
              <a href={sourceURL} target="_blank" rel="noopener noreferrer">
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

        <article id="rights-data">
          <header>
            <h3></h3>
          </header>
          <main>
            <p></p>
          </main>
        </article>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      domain: process.env.DOMAIN,
      socialName: "Balonmano Vetusta",
      legalName: "Club Balonmano Vetusta",
      cif: "G74174277",
      sourceURL: "https://github.com/balonmanovetusta/balonmanovetusta",
      rfebmLink: "https://www.rfebm.com/competiciones/club.php?id=2898",
      mailParts: [
        [
          "b",
          "a",
          "l",
          "o",
          "n",
          "m",
          "a",
          "n",
          "o",
          "v",
          "e",
          "t",
          "u",
          "s",
          "t",
          "a",
        ],
        ["g", "m", "a", "i", "l"],
        ["c", "o", "m"],
      ],
    },
  };
}
