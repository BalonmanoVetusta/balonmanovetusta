import PageLayout from "components/PageLayout";

export default function IndexPage() {
  return (
    <PageLayout>
      <section>
        <a
          className="twitter-timeline"
          href="https://twitter.com/BM_Vetusta?ref_src=twsrc%5Etfw"
        >
          Tweets by BM_Vetusta
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </section>
    </PageLayout>
  );
}
