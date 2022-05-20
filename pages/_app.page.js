import "styles/globals/main.css";
import "styles/globals/mediaqueriesandrootvars.css";
import "styles/globals/menu.css";
import "styles/globals/logoscolor.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
      {...pageProps}
    />
  );
}

export default MyApp;
