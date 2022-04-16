import Head from "next/head";
import { Fragment } from "react";
import Header from "components/Header";
import MenuWrapper from "./MenuWrapper";

export function PageLayout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>🤾‍♂️ Club Balonmano Vetusta 🤾‍♂️</title>
        <meta description="Web oficial del Club Balonmano Vetusta en la que puedes encontrar información sobre partidos, horarios de los entrenamientos, información sobre los equipos, hacerse socio o contactar con nosotros." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.svg" color="#151111" />

        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#151111" />
        <link rel="manifest" href="site.webmanifest" />
      </Head>
      <Header />
      <MenuWrapper />
      <main>{children}</main>
    </Fragment>
  );
}
