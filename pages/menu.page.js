import Menu from "components/Menu";
import { Fragment } from "react";

export default function MenuPage() {
  return (
    <Fragment>
      <Menu id="menu" />
      <style global jsx>{`
        @media screen and (max-width: 1023px) {
          @media screen and (min-height: 569px) {
            nav#menu {
              position: absolute;
              top: 1rem;
              right: 1rem;
              flex-direction: column;
              text-align: center;
              justify-content: center;
            }
          }

          @media screen and (max-height: 568px) {
            nav#menu {
              position: absolute;
              bottom: 1rem;
              right: 1rem;
              flex-direction: column-reverse;
              text-align: center;
              justify-content: center;
            }
            #nav > ul:hover > li,
            #nav > ul > li:hover {
              display: flex;
            }

            ul > li:hover {
              flex-flow: column-reverse nowrap;
            }

            ul > li:hover > ul {
              display: flex;
              flex-flow: column-reverse nowrap;
            }

            nav#menu input[type="checkbox"]:checked ~ ul {
              display: flex;
              flex-direction: column-reverse;
            }

            @media screen and (any-hover: hover) {
              nav#menu:hover input[type="checkbox"] ~ ul {
                display: flex;
                flex-direction: column-reverse;
              }
            }
          }

          #menu > label {
            display: flex;
            self-align: center;
          }

          #menu > label > div {
            margin-left: auto;
          }
        }
      `}</style>
    </Fragment>
  );
}
