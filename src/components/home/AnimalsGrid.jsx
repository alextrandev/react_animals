import { useState } from "react";
import Card from "./Card";

export default function AnimalsGrid({animals, categoryName}) {
  const [currentPage, setCurrentPage] = useState(1);

  const animalsPerPage = 21; // 7 item per row, render 3 rows
  const numberOfAnimals = animals.length;
  const numberOfPages = Math.ceil(numberOfAnimals / animalsPerPage);

  // console.log(animalsNumber);

  return (
    <>
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
        <div className="main p-10 pt-1 grid grid-cols-7 gap-2">
            {animals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
        <div>
          <input type="button" name="previous" value="< Previous" />
          <input type="button" name="next" value="Next >" />
        </div>
    </>
  )
}
