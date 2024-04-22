import AnimalImage from "./AnimalImage";
import LikeCounter from "./LikeCounter";

function Card({name, likes, categoryName, hideAnimal}) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1).replace("-", " ");
  return (
    <div className="bg-gray-200 flex flex-col justify-between rounded shadow overflow-hidden">
        <div className="text-center flex justify-between text-white bg-gray-600 p-4">
            <h3 className="text-xs text-white">{formatedName}</h3>
            <span className="material-symbols-rounded" id={name} onClick={hideAnimal}>close</span>
        </div>
        <AnimalImage name={name} categoryName={categoryName}/>
        <LikeCounter likes={likes}/>
    </div>
  )
}

export default Card