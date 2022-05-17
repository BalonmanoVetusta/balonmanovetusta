import Image from "next/image";
import PageLayout from "components/PageLayout";
import imgAscenso from "assets/images/FotoAscenso.jpeg";
import imgTerritorial from "assets/images/Senior_Territorial.jpeg";
import imgPrimeraNacional from "assets/images/Primera_Nacional.jpeg";
import { image as imageClass } from "styles/pages/QuienesSomos.module.css";

export default function QuienesSomosPage() {
  return (
    <PageLayout>
      <section>
        <article>
          <header>
            <h1>¿Quiénes somos?</h1>
          </header>
          <main>
            <p>
              El Balonmano Vetusta <strong> es un Club de balonmano </strong>{" "}
              que nace en el año 2012 en la capital del Principado de Asturias,
              disputa todos sus encuentros en el
              <strong> Polideportivo Florida Arena de Oviedo</strong>, logrando
              recientemente el ascenso a la categoría de Primera Nacional
              (Temporada 2021/22). En la actualidad cuenta con
              <strong> dos equipos de categoría sénior </strong> (edad adulta)
              masculino. Del mismo modo,
              <strong> también cuenta con varios equipos de base</strong>, es
              decir, de categorías inferiores: juvenil, cadete, infantil, alevín
              y benjamín.
            </p>
            <div className={imageClass}>
              <Image
                src={imgAscenso}
                alt="Equipo que logró el ascenso a Primera Nacional en la temporada 2020/2021"
                layout="intrinsic"
                placeholder="blur"
                loading="lazy"
                objectFit="cover"
                quality={75}
              />
            </div>
            <p>
              Gracias a un acuerdo alcanzado en el año 2016 con el Colegio
              Maristas Auseva el Club Balonmano Vetusta gestiona la sección de
              balonmano de dicho centro educativo, dotando al Club de una sólida
              estructura de cantera, sobre la cual asienta sus cimientos.
            </p>
            <p>
              Una vez logrado el objetivo marcado por el Club años atrás, de
              asentar una sólida base económica, deportiva y social, que
              permiten al Club Balonmano Vetusta asegurar{" "}
              <strong>
                un próspero futuro y seguir creciendo para fomentar el balonmano
                en la ciudad de Oviedo
              </strong>
              , en la actualidad se marca como principal objetivo el seguir
              potenciando la Escuela Deportiva del Balonmano Vetusta en varios
              Colegios, para dar a conocer este deporte entre los más pequeños y
              así difundir el balonmano en Oviedo.
            </p>
            <p>
              En la actualidad, el Club, tiene presencia en los siguientes
              <strong> Colegios Públicos de la ciudad de Oviedo</strong>:
            </p>
            <ul>
              <li>Colegio Público Germán Fernández Ramos</li>
              <li>Colegio Público Veneranda Manzano</li>
              <li>Colegio Púbico San Pedro de los Arcos</li>
              <li>Colegio Público Pablo Miaja</li>
            </ul>
            <p>
              Cabe destacar que durante la temporada 2017/18 el Club Balonmano
              Vetusta ha sido el segundo equipo de la región que más deportistas
              aporto a las selecciones territoriales del Principado de Asturias
              con un total de siete jugadores que han participado en la disputa
              del Campeonato de España por selecciones disputado en enero del
              2018 en Galicia. Del mismo modo, también cuenta con tres jugadores
              internacionales por España (categoría infantil y juvenil), un
              jugador internacional por Reino Unido (categoría absoluta),
              incluso un jugador internacional por Uruguay que ha disputado el
              Campeonato Mundial de Balonmano Masculino (categoría absoluta) de
              selecciones nacionales, durante la temporada 2020/21, el cual,
              repetirá participación en enero del año 2023.
            </p>

            <p>
              En la temporada 2021/22 el Club Balonmano Vetusta debuta en
              Primera Nacional Masculina (Real Federación Española de
              Balonmano), logrando ser el mejor equipo debutante en la categoría
              a nivel nacional, consiguiendo un total de dieciséis victorias a
              lo largo de la temporada y dos empates.
            </p>
            <div className={imageClass}>
              <Image
                src={imgPrimeraNacional}
                alt="Equipo que debutó en la categoría de Primera Nacional en la temporada 2021/22"
                layout="intrinsic"
                placeholder="blur"
                loading="lazy"
                objectFit="cover"
                quality={75}
              />
            </div>

            <p>
              El apoyo social está siendo fundamental para la construcción de
              unos sólidos cimientos sobre los cuales construir un futuro
              favorable para el Club, ya que se cuenta con un gran número de
              socios, superando los 800 socios simpatizantes, esto supone un
              importante apoyo económico por parte de nuestros seguidores, sobre
              el cual se aposentan nuestros cimientos.
            </p>

            <p>
              En las Redes Sociales también se cuenta con un gran apoyo,
              llegando a superar la cifra de 3.000 seguidores entre{" "}
              <a
                href="https://twitter.com/BM_Vetusta"
                rel="nofollow noreferrer"
                title="Balonmano Vetusta en Twitter"
              >
                Twitter (@BM_Vetusta)
              </a>
              {" e "}
              <a
                href="https://instagram.com/balonmanovetusta"
                rel="nofollow noreferrer"
                title="Balonmano Vetusta en Instagram"
              >
                Instagram (@balonmanovetusta)
              </a>
              .
            </p>
          </main>
        </article>
        <article>
          <header>
            <h2>Objetivos</h2>
          </header>
          <main>
            <p>
              La principal idea reside en llegar a ser en un corto periodo de
              tiempo, un Club de base y que esta misma, sea nuestra principal
              seña de identidad, por ello desde el Club Balonmano Vetusta se
              cree firmemente que el deporte es una excelente forma de trasmitir
              valores, que consigan no solo enseñar la práctica de un
              determinado deporte, sino también educar personas y, mediante esta
              educación, poder formar jugadores de balonmano que sepan competir
              tanto fuera, como dentro de la cancha, logrando así una mejor
              apreciación del esfuerzo, la solidaridad y las reglas sociales por
              parte de los niños/as.
            </p>
            <p>
              El principal objetivo que se marcan para los equipos de base
              consiste en generar en ellos un clima que fomente la socialización
              y la relación entre los más pequeños, donde se combinará la
              trasmisión de valores que fomenten sentimientos de cohesión y de
              grupo, con el objetivo de superación colectiva, para llegar a ser
              mejores personas, ciudadanos y deportistas.
            </p>

            <p>
              La idea del Club es lograr educar y formar jóvenes, utilizando
              para ello el ejercicio físico, la competición y los múltiples
              valores que pueden emanar del deporte, ya que consideramos que el
              deporte y la educación física aportan las bases necesarias para el
              desarrollo y el bienestar de los niños y los jóvenes tanto en la
              sociedad como en el sistema educativo. Desde el Club Balonmano
              Vetusta se intentará unir y cohesionar las motivaciones e
              intereses de cada jugador, con los del propio Club o equipo.
            </p>

            <p>
              Otro ambicioso objetivo propuesto por el Club es la creación de un
              Fondo Económico mediante el cual, se permita becar a todos
              aquellos deportistas y familias que por diversas causas no puedan
              hacer frente a los costes económicos que cualquier práctica
              deportiva actual requiere.
            </p>

            <p>
              Para ello, en todos nuestros equipos la igualdad de oportunidades
              será una realidad entre nuestros jugadores y jugadoras,
              independientemente de las diferencias de género, de las
              capacidades, o del objetivo individual que busquen en el deporte.
            </p>

            <div className={imageClass}>
              <Image
                src={imgTerritorial}
                alt="Equipo Senior de la categoría de Segunda Nacional en la temporada 2021/22"
                layout="intrinsic"
                placeholder="blur"
                loading="lazy"
                objectFit="cover"
                quality={75}
              />
            </div>
          </main>
        </article>
      </section>
    </PageLayout>
  );
}
