import { useParams } from "react-router-dom";
import AnimalsGrid from "../components/animalPages/AnimalsGrid";

export default function CategoryPage({ addLike, removeLike, ...zoo }) {
  const { category } = useParams();
  const categoryAnimals = zoo[category];

  return <AnimalsGrid
    animals={categoryAnimals}
    category={category}
    addLike={addLike}
    removeLike={removeLike}
  />;
}

