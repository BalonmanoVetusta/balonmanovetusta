import PageLayout from "components/PageLayout";

export default function Error404Page() {
  return (
    <PageLayout>
      <h1>Error 404</h1>
      <h2>¡Hemos perdido el balón de juego!</h2>
      <p>La página no existe.</p>
      <p>
        Si el error persiste puede notificarlo{" "}
        <a
          href="https://github.com/BalonmanoVetusta/balonmanovetusta/issues/new"
          rel="nofollow noopener"
        >
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
    </PageLayout>
  );
}
