import Card from "./components/home/Card";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { animals, birds, fishes, insects } from "./assets/animalsList";
import './App.css';

function App() {
  return (
    <>
    <div className="wrapper shadow-xl bg-white">
      <Header />

      <div className="main p-10 grid grid-cols-4 gap-5">
        {animals.map(animal => <Card key={animal.name} {...animal}/>)}
      </div>

      <Footer />
    </div>
    </>
  )
}

export default App
