import { ScrollTapOutsideElementContext } from "components/Menu";
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import "styles/globals/main.css";
import "styles/globals/mediaqueriesandrootvars.css";
import "styles/globals/menu.css";
import "styles/globals/logoscolor.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ScrollTapOutsideElementContext>
        <AnimatePresence>
          <Component
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
            {...pageProps}
          />
        </AnimatePresence>
      </ScrollTapOutsideElementContext>
    </Fragment>
  );
}

export default MyApp;
