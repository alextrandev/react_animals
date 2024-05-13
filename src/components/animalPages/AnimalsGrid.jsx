import { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import debounce from "../../functions/debounce";

export default function AnimalsGrid({ animals, categoryName }) {
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [hiddenAnimals, setHiddenAnimals] = useState([]);

  // search function using filter
  const formatedInput = searchInput.trim().toLowerCase();
  const filteredAnimals = animals.filter(animal =>
    animal.name.includes(formatedInput)
    && !hiddenAnimals.includes(animal.name) // to exclude closed animal from result
  );

  // pagination function using slice
  const animalsPerPage = 10;
  const numberOfAnimals = filteredAnimals.length;
  const numberOfPages = Math.ceil(numberOfAnimals / animalsPerPage);
  const displayAnimals = filteredAnimals.slice(page * animalsPerPage, (page + 1) * animalsPerPage);

  if (displayAnimals.length == 0 && page !== 0) {
    setPage(page - 1);
  } // to move to previous page when page is empty

  const previousClickHandler = () => {
    setPage(page - 1);
  }

  const nextClickHandler = () => {
    setPage(page + 1);
  }

  const searchChangeHandler = debounce(e => setSearchInput(e.target.value), 1000);

  const hideAnimal = e => setHiddenAnimals([...hiddenAnimals, e.target.id]);

  return (
    <div className="main">
      <div className="flex px-10 justify-between">
        <h2 className="text-xl font-boldpb-1">{categoryName}</h2>
        <SearchBar searchChangeHandler={searchChangeHandler} />
        <div className="flex gap-4">
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
      <div className="px-10 py-6 grid grid-cols-5 grid-rows-2 gap-2">
        {displayAnimals.map(animal =>
          <Card
            key={animal.name}
            {...animal}
            categoryName={categoryName}
            hideAnimal={hideAnimal}
          />)}
      </div>
      <div className="text-center px-6">
        {numberOfAnimals !== 0
          ? <p>Displaying {page * animalsPerPage + 1} - {page * animalsPerPage + displayAnimals.length} animals out of {numberOfAnimals}</p>
          : <p>No animal to display</p>
        }
      </div>
    </div>
  )
}
