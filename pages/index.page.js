import PageLayout from "components/PageLayout";
import { getLatestTimelineTwitts } from "lib/twitter/getLatestsTimelineTwitts";

export default function IndexPage({ latestTwits = {} } = {}) {
  return (
    <PageLayout>
      <section>
        <h1>Últimos Twitts</h1>
        <div>
          {/* <pre>{JSON.stringify(latestTwits, null, 2)}</pre> */} Por ahora
          aquí no se cargará nada hasta que esté listo
        </div>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps(context) {
  const latestTwits = await getLatestTimelineTwitts();
  return {
    props: {
      latestTwits,
    },
    revalidate: 300,
  };
}
