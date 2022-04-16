import PageLayout from "components/PageLayout";
import { Fragment } from "react";
import "styles/globals/main.css";
import "styles/globals/mediaqueriesandroot.css";
import "styles/globals/menu.css";

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
