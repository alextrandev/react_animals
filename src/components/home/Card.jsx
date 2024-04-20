import AnimalImage from "./AnimalImage";

function Card({name}) {
  return (
    <div className="bg-gray-200 rounded shadow overflow-hidden">
        <AnimalImage name={name}/>
        <div className="text-center bg-gray-600 p-4">
            <h3 className="text-xl text-white">{name}</h3>
        </div>
    </div>
  )
}

export default Card