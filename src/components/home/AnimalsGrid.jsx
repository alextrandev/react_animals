import { useState } from "react";
import Card from "./Card";

export default function AnimalsGrid({animals, categoryName}) {
  const [page, setPage] = useState(0);

  const animalsPerPage = 14; // 7 item per row, render 3 rows
  const numberOfAnimals = animals.length;
  const numberOfPages = Math.ceil(numberOfAnimals / animalsPerPage);
  const displayAnimals =  animals.slice(page * animalsPerPage, (page + 1) * animalsPerPage);

  const previousClickHandler = () => {
    setPage(page - 1);
  }

  const nextClickHandler = () => {
    setPage(page + 1);
  }

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
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
        <div className="main p-10 py-1 grid grid-cols-7 grid-rows-2 gap-2">
            {displayAnimals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
      <div className="text-center p-6">
        <p>Displaying {page * animalsPerPage + 1} -  {(page + 1) * animalsPerPage +1} animals out of {numberOfAnimals}</p>
      </div>
    </>
  )
}
