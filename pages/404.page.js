import { Fragment } from "react";

export default function Error404Page() {
  return (
    <Fragment>
      <h1>Error 404</h1>
      <h2>Hemos perdido el balón de juego!</h2>
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
      `}</style>
    </Fragment>
  );
}
