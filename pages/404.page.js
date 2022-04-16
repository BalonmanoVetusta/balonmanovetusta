import { Fragment } from "react";

export default function Error404Page() {
  return (
    <Fragment>
      <h1>Error 404</h1>
      <h2>¡Hemos perdido el balón de juego!</h2>
      <p>La página no existe.</p>
      <p>
        Si el error persiste puede notificarlo{" "}
        <a href="https://github.com/gtrabanco/balonmanovetusta" rel="nofollow">
          a nuestro equipo de desarrollo
        </a>
        .
      </p>
      <style jsx>{`
        h1 {
          color: red;
          font-size: 4rem;
          font-weight: bolder;
          text-align: center;
        }
        h2 {
          margin: 1rem;
          text-align: center;
        }
        p {
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
}
