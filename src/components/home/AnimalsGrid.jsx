import { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function AnimalsGrid({animals, categoryName}) {
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [hiddenAnimals, setHiddenAnimals] = useState([]);

  const animalsPerPage = 10;
  const numberOfAnimals = animals.length;
  const numberOfPages = Math.ceil(numberOfAnimals / animalsPerPage);
  const formatedSearchInput = searchInput.trim().toLowerCase();
  let filteredAnimals = animals.filter(animal => animal.name.includes(formatedSearchInput));
  filteredAnimals = filteredAnimals.filter(animal => !hiddenAnimals.includes(animal.name))
  const displayAnimals =  filteredAnimals.slice(page * animalsPerPage, (page + 1) * animalsPerPage);

  const previousClickHandler = () => {
    setPage(page - 1);
  }

  const nextClickHandler = () => {
    setPage(page + 1);
  }

  const searchChangeHandler = e => {
    setSearchInput(e.target.value);
  }

  const hideAnimal = e => {
    setHiddenAnimals([...hiddenAnimals, e.target.id])
  }

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
        <SearchBar searchChangeHandler={searchChangeHandler}/>
        <div className="p-10 flex gap-4">
          {page > 0 && 
            <input 
            onClick={previousClickHandler}
            type="button"
            name="previous"
            value="< Previous" 
            />}
          {page < numberOfPages - 1 && 
            <input 
            onClick={nextClickHandler}
            type="button"
            name="next"
            value="Next >"
            />}
            </div>
      </div>
        <div className="main p-10 py-1 grid grid-cols-5 grid-rows-2 gap-2">
            {displayAnimals.map(animal => 
              <Card 
                key={animal.name} 
                {...animal} 
                categoryName={categoryName}
                hideAnimal={hideAnimal}
              />)}
        </div>
      <div className="text-center p-6">
        <p>Displaying {page * animalsPerPage + 1} -  {(page + 1) * animalsPerPage} animals out of {numberOfAnimals}</p>
      </div>
    </>
  )
}
