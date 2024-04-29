import AnimalsGrid from "../components/animalPages/AnimalsGrid";
import { birds } from "../assets/animalsList";

export default function Birds() {
  return <AnimalsGrid animals={birds} categoryName="Birds" />
}
