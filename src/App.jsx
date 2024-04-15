import Card from "./components/home/Card";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import './App.css';

function App() {

  return (
    <>
    <div className="wrapper shadow-xl bg-white">
      <Header />

      <div className="main p-10 grid grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
    </>
  )
}

export default App
