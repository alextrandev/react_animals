import { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import debounce from "../../functions/debounce";

// need work. too long and messy. need to move pagination to a new component and maybe search as well

export default function AnimalsGrid({ animals, category, addLike, removeLike }) {
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [hiddenAnimals, setHiddenAnimals] = useState([]); // need work. move this state to App.jsx

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

  if (displayAnimals.length == 0 && page !== 0) setPage(page - 1); // to move to previous page when page is empty

  // change pagination page functions
  const previousClickHandler = () => setPage(page - 1);
  const nextClickHandler = () => setPage(page + 1);

  const searchChangeHandler = debounce(e => setSearchInput(e.target.value), 1000); // add debounce to search
  const hideAnimal = e => setHiddenAnimals([...hiddenAnimals, e.target.id]);

  return (
    <div className="main">
      <div className="flex px-10 justify-between">
        <h2 className="text-xl font-boldpb-1">{category[0].toUpperCase() + category.slice(1)}</h2>
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
            name={animal.name}
            likes={animal.likes}
            category={category}
            hideAnimal={hideAnimal}
            addLike={() => addLike(animal.name, category, "add")}
            removeLike={() => removeLike(animal.name, category, "remove")}
          />)}
        {displayAnimals.length == 0 &&
          <Card
            name="Kitty"
            likes={999}
            category="animals"
            hideAnimal={console.log("Cannot hide")}
            addLike={console.log("Kitty is already maximum loved")}
            removeLike={console.log("Can't dislike a kitty")}
          /> // a secret animal, render when no animal is found. a workaround to prevent layout shift
        }
      </div>
      <div className="text-center px-6">
        {numberOfAnimals !== 0
          ? <p>Displaying {page * animalsPerPage + 1} - {page * animalsPerPage + displayAnimals.length} animals out of {numberOfAnimals}</p>
          : <p>No animal found. So here is a kitty to keep you companied</p>
        }
      </div>
    </div>
  )
}
