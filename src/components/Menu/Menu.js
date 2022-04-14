import { Close, MenuHamburger } from "components/Icons";
import Link from "next/link";
import { Fragment, useId } from "react";

const teams = [
  {
    label: "Primera Nacional",
    href: "10-primera-nacional",
    title: "Equipo de la liga Primera Nacional masculina",
  },
  {
    label: "Senior Territorial",
    href: "20-segunda-nacional-senior-territorial",
    title:
      "Equipo de la liga Segunda Nacional masculina o liga territorial masculina de Asturias",
  },
  {
    label: "Juvenil maculino",
    href: "30-primera-nacional",
    title: "Equipo de la liga Juvenil masculina de Asturias",
  },
  {
    label: "Cadete masculino",
    href: "40-cadete",
    title: "Equipo de la liga Cadete masculina de Asturias",
  },
  {
    label: "Infantil mixto",
    href: "50-infantil-mixto",
    title:
      "Equipo de la liga Infantil masculina de Asturias en el que contamos con niños y niñas",
  },
  {
    label: "Escuelas deportivas",
    href: "100-escuelas-deportivas",
    title:
      "Equipos de niños y niñas comprendidos entre los 7 y los 11 años de las categorías de Benjamínes a Alevines de los distintos colegios de Oviedo",
  },
];

// Variables for css styles
// /** Colors **/
// --menu-background: tomato;
// --menu-item-background-color: #339af0;
// --menu-item-background-color-hover: #9900aa;

// /** Sizes **/
// --menu-icon-size: 2rem;
// --menu-external-border-radius: 0.5rem;

export function Menu({ idIcon = "menu", ...props }) {
  const id = useId();
  return (
    <Fragment>
      <nav {...props}>
        <input type="checkbox" name="drop-1" id="drop-1" aria-hidden="true" />
        <label htmlFor="drop-1" aria-hidden="true">
          <div className="menu-icon">
            <span className="open">
              <MenuHamburger
                id={`icon-open-menu-${idIcon}`}
                width="100%"
                height="100%"
              />
            </span>
            <span className="close">
              <Close
                id={`icon-close-menu-${idIcon}`}
                width="100%"
                height="100%"
              />
            </span>
          </div>
        </label>

        <ul aria-hidden="false">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/quienes-somos">
              <a title="InhtmlFormación sobre el club">¿Quienes somos?</a>
            </Link>
          </li>

          <li>
            <Link href="/socios">
              <a>Socios</a>
            </Link>
          </li>

          <li>
            <Link href="/practica-balonmano">
              <a title="Dónde y cuándo practicar balonmano con nosotros">
                Practica balonmano
              </a>
            </Link>
          </li>

          <li>
            <input type="checkbox" name="teams" id="teams" />
            <label htmlFor="teams">Equipos</label>
            <ul aria-hidden="false">
              {teams.map(({ href, label, title }) => (
                <li key={`${href}-${id}`}>
                  <Link href={`/equipo/${href}`}>
                    <a title={title}>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/contacto">
              <a title="Contacta con nosotros">Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        // Menu appearance
        nav {
          display: flex;
          flex-direction: row;
          // background: var(--menu-background, transparent);
          background: tomato;
          overflow: hidden;
        }

        // Items appearance
        li {
          position: relative;
          margin: 0.1rem;
          padding: 0.2rem;
          background: var(--menu-item-background-color, transparent);
          widht: 100%;
          font-weight: bold;
        }

        li:hover {
          font-weight: bolder;
          background: var(--menu-item-background-color-hover, transparent);
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          justity-items: space-between;
        }

        // Icons sizes
        nav label div {
          display: inline-block;
          width: var(--menu-icon-size, 2rem);
        }

        // Drop list appearance
        nav > ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        // Tab sub menus
        ul > li > ul {
          padding-left: 1rem;
          list-style: none;
        }

        // Menu Behavior
        // Hamburguer Menu Open/Close
        input[type="checkbox"] {
          display: none;
        }

        nav input[type="checkbox"] ~ label .close,
        nav input[type="checkbox"]:checked ~ label .open {
          display: none;
        }

        nav input[type="checkbox"] ~ label .open,
        nav input[type="checkbox"]:checked ~ label .close {
          display: block;
        }

        @media screen and (max-width: 1023px) {
          nav {
            // Small devices only
            margin: 1rem 0;
            max-width: max-content;
            border-radius: var(--menu-external-border-radius, 0.5rem);
          }

          nav input[type="checkbox"] ~ ul {
            display: none;
          }

          nav input[type="checkbox"]:checked ~ ul {
            display: block;
          }

          // Icon + in vertical menu only
          // Expandable submenus
          nav > ul > li > input[type="checkbox"] ~ label:before {
            content: " + ";
            cursor: pointer;
          }

          nav > ul > li > input[type="checkbox"]:checked ~ label:before {
            content: " X ";
            cursor: pointer;
          }

          // Support hover, expandable when hover
          @media screen and (any-hover: hover) {
            // Do not show close icon
            // nav input[type="checkbox"] ~ label:hover .close {
            //   display: none;
            // }

            nav ul,
            ul li > ul {
              display: none;
              position: relative;
              visibility: hidden;
              height: 0px;
              widht: 0px;
              opacity: 0;
            }

            nav > label:hover + ul,
            nav > label + ul:hover,
            li ul:hover,
            input[type="checkbox"]:checked ~ ul,
            ul > li:hover > ul {
              display: block;
              position: relative;
              visibility: visible;
              height: max-content;
              widht: max-content;
              opacity: 1;
            }

            nav > ul > li > input[type="checkbox"]:checked ~ label:before {
              content: " X ";
              cursor: pointer;
            }
          }
        }
        // Menu design depending on the screen size
        // Large sizes screens
        @media screen and (min-width: 1024px) {
          nav {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow: visible;
            border-radius: var(--menu-external-border-radius, 0.5rem);
          }

          li {
            margin: 0.5rem;
          }

          nav > input[type="checkbox"] ~ label {
            display: none;
          }

          nav > label + ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            // justify-items: space-between;
            margin: auto auto;
          }

          nav > label + ul li {
            display: flex;
          }

          ul > li ul {
            display: none;
            position: absolute;
          }

          li > input[type="checkbox"]:checked ~ label + ul {
            display: inline-block;
            position: absolute;
            top: 100%;
            left: 0;
            padding-bottom: 1rem;
            width: max-content;
            // background: var(--menu-submenu-background-color, transparent);
            border-radius: 0 0 var(--menu-external-border-radius, 0.5rem)
              var(--menu-external-border-radius, 0.5rem);
          }

          nav > ul > li > input[type="checkbox"] ~ label:before {
            content: " ↓ ";
            margin-right: 0.5rem;
            cursor: pointer;
          }

          @media screen and (any-hover: hover) {
            ul > li:hover > ul {
              display: inline-block;
              position: absolute;
              top: 100%;
              left: 0;
              padding-bottom: 1rem;
              width: max-content;
              // background: var(--menu-submenu-background-color, transparent);
              border-radius: 0 0 var(--menu-external-border-radius, 0.5rem)
                var(--menu-external-border-radius, 0.5rem);
            }
          }
        }
      `}</style>
    </Fragment>
  );
}
