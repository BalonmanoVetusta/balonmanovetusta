import { useRouter } from "next/router";

export default function PracticaBalonmano() {
  const router = useRouter();
  const { id } = router.query;

  const teamFormatted = (queryId) => {
    const team = queryId.split("-").slice(1).join(" ");
    // Capitalize first letter of each word
    const words = team.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  };

  return <h1>Plantilla de: {id ? teamFormatted(id) : "Sin plantilla 🤔"}!</h1>;
}
