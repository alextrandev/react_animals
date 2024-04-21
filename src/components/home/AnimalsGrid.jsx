import { useState } from "react";
import Card from "./Card";

export default function AnimalsGrid({animals, categoryName}) {
  const [page, setPage] = useState(0);

  const animalsPerPage = 21; // 7 item per row, render 3 rows
  const numberOfPages = Math.ceil(animals.length / animalsPerPage);
  const displayAnimals =  animals.slice(page * animalsPerPage, (page + 1) * animalsPerPage);

  const previousClickHandler = () => {
    setPage(page - 1);
  }

  const nextClickHandler = () => {
    setPage(page + 1);
  }

  return (
    <>
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
        <div className="main p-10 pt-1 grid grid-cols-7 gap-2">
            {displayAnimals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
        <div>
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
    </>
  )
}
