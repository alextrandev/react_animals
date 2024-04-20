import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { animals, birds, fishes, insects } from "./assets/animalsList";
import './App.css';
import AnimalsGrid from "./components/home/AnimalsGrid";

function App() {
  return (
    <>
    <div className="wrapper shadow-xl bg-white">
      <Header />

      <AnimalsGrid animals={animals}/>

      <Footer />
    </div>
    </>
  )
}

export default App
