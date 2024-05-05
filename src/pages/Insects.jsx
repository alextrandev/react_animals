import AnimalsGrid from "../components/animalPages/AnimalsGrid";
import { insects } from "../assets/animalsList";

export default function Animals() {
  return <AnimalsGrid animals={insects} categoryName="Insects" />;
}
