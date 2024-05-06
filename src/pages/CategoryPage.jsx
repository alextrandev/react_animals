import { useParams } from "react-router-dom";
import AnimalsGrid from "../components/animalPages/AnimalsGrid";

export default function CategoryPage({ ...zoo }) {
  const { category } = useParams();
  const categoryAnimals = zoo[category];

  return <AnimalsGrid
    animals={categoryAnimals}
    categoryName={category[0].toUpperCase() + category.slice(1)}
  />;
}

