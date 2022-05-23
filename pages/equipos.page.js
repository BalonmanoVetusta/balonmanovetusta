import PageLayout from "components/PageLayout";

const CURRENT_SEASON = 2122;

const teams = [{ label: "Primera Nacional", value: "primera-nacional", id: 209500, federation: 9999, categoryId: 200017, competitionId: 202364 }];

export default function EquiposPage() {
  return (
    <PageLayout>
      <section>
        <header>
          <h1>Equipos del club</h1>
        </header>
        <main>{/* Carrousel */}</main>
      </section>
    </PageLayout>
  );
}
