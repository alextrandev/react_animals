import { useParams } from "react-router-dom";
import AnimalsGrid from "../components/animalPages/AnimalsGrid";
import { animals, birds, fishes, insects } from "../assets/animalsList";

export default function CategoryPage() {
  const categories = { animals, birds, fishes, insects };
  const { category } = useParams();

  console.log(categories[category]);

  return <AnimalsGrid
    animals={categories[category]}
    categoryName={category[0].toUpperCase() + category.slice(1)}
  />;
}

