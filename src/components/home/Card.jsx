import AnimalImage from "./AnimalImage";

function Card({name}) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1).replace("-", " ");
  return (
    <div className="bg-gray-200 flex flex-col justify-between rounded shadow overflow-hidden">
        <AnimalImage name={name}/>
        <div className="text-center bg-gray-600 p-4">
            <h3 className="text-xs text-white">{formatedName}</h3>
        </div>
    </div>
  )
}

export default Card