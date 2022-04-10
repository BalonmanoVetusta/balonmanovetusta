import LogoVetusta from "components/LogoVetusta";
import PageLayout from "components/PageLayout";
import Head from "next/head";
import { Fragment } from "react";
import { welcome } from "styles/pages/Index.module.css";

export default function Home() {
  return (
    <Fragment>
      <PageLayout>
        <h1>Contenido principal</h1>
      </PageLayout>
    </Fragment>
  );
}
