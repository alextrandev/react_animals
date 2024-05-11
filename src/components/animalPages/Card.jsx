import { Link } from "react-router-dom";
import { useState } from "react";
import AnimalImage from "./AnimalImage";
import LikeCounter from "./LikeCounter";

function Card({ name, likes, categoryName, hideAnimal }) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1).replace("-", " ");
  const [likeCounter, setLikeCounter] = useState(likes);

  const handleLike = e => {
    if (e.target.id == "addLike") {
      setLikeCounter(likeCounter + 1);
    } else if (e.target.id == "removeLike") {
      setLikeCounter(likeCounter - 1);
    }
  }

  return (
    <div className="bg-gray-200 flex flex-col justify-between rounded shadow overflow-hidden">
      <div className="text-center flex justify-between text-white bg-gray-600 p-4">
        <Link to={`${name}`}>
          <h3 className="text-xs text-white">{formatedName}</h3>
        </Link>
        <span className="material-symbols-rounded" id={name} onClick={hideAnimal}>close</span>
      </div>
      <Link to={`${name}`}>
        <AnimalImage name={name} categoryName={categoryName} />
      </Link>
      <LikeCounter likeCounter={likeCounter} handleLike={handleLike} />
    </div>
  )
}

export default Card