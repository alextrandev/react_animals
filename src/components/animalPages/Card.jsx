import { Link } from "react-router-dom";
import AnimalImage from "./AnimalImage";
import LikeCounter from "./LikeCounter";

function Card({ name, likes, category, hideAnimal, addLike, removeLike }) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1).replace("-", " "); // some animal have hypening name so this one to format them properly

  return (
    <div className="bg-gray-200 flex flex-col justify-between rounded shadow overflow-hidden">
      <div className="text-center flex justify-between text-white bg-gray-600 p-4">
        <Link to={`${name}`}>
          <h3 className="text-xs text-white">{formatedName}</h3>
        </Link>
        <span className="material-symbols-rounded" id={name} onClick={hideAnimal}>close</span>
      </div>
      <Link to={`${name}`}>
        <AnimalImage name={name} category={category} />
      </Link>
      <LikeCounter likes={likes} addLike={addLike} removeLike={removeLike} />
    </div>
  )
}

export default Card