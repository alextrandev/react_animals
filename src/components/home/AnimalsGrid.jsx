import { useState } from "react";
import Card from "./Card";

export default function AnimalsGrid({animals, categoryName}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayAnimals, setDisplayAnimals] = useState([filterAnimals(currentPage)]);

  const animalsPerPage = 21; // 7 item per row, render 3 rows
  const numberOfAnimals = animals.length;
  const numberOfPages = Math.ceil(numberOfAnimals / animalsPerPage);

  const filterAnimals = page => animals.slice(page, page + animalsPerPage);

  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
    setDisplayAnimals(filterAnimals(currentPage));
  }

  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
    setDisplayAnimals(filterAnimals(currentPage));
  }

  return (
    <>
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
        <div className="main p-10 pt-1 grid grid-cols-7 gap-2">
            {displayAnimals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
        <div>
          {currentPage > 0 && 
            <input 
              onClick={previousClickHandler}
              type="button"
              name="previous"
              value="< Previous" 
            />}
          {currentPage < numberOfPages && 
            <input 
              onClick={nextClickHandler}
              type="button"
              name="next"
              value="Next >"
            />}
        </div>
    </>
  )
}
