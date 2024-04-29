import AnimalsGrid from "../components/animalPages/AnimalsGrid";
import { animals } from "../assets/animalsList";

export default function Animals() {
  return <AnimalsGrid animals={animals} categoryName="Terrestrial animals" />;
}
