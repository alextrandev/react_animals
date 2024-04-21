import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { animals, birds, fishes, insects } from "./assets/animalsList";
import './App.css';
import AnimalsGrid from "./components/home/AnimalsGrid";
import { useState } from "react";

function App() {
  const [animalClass, setAnimalClass] = useState("mammal");
  const navClickHandling = e => {
    setAnimalClass(e.currentTarget.id)
  };

  return (
    <>
    <div className="wrapper shadow-xl bg-white">
      <Header navClickHandling={navClickHandling}/>

      {animalClass == "mammal" && <AnimalsGrid animals={animals} categoryName="Terrestrial animals"/>}
      {animalClass == "bird" && <AnimalsGrid animals={birds} categoryName="Birds"/>}
      {animalClass == "fish" && <AnimalsGrid animals={fishes} categoryName="Fishes"/>}
      {animalClass == "insect" && <AnimalsGrid animals={insects} categoryName="Insects"/>}

      <Footer />
    </div>
    </>
  )
}

export default App
