import AnimalsGrid from "../components/animalPages/AnimalsGrid";
import { fishes } from "../assets/animalsList";

export default function Animals() {
  return <AnimalsGrid animals={fishes} categoryName="Fishes" />;
}
