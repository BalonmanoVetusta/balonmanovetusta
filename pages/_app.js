import PageLayout from "components/PageLayout";
import { Fragment } from "react";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Fragment>
  );
}

export default MyApp;
