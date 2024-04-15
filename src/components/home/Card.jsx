function Card({name}) {
  return (
    <div className="bg-gray-200 rounded shadow overflow-hidden">
        <img src="/react.svg" className="w-full p-5" alt="animal image"/>
        <div className="text-center bg-gray-600 p-4">
            <h3 className="text-xl text-white">{name}</h3>
        </div>
    </div>
  )
}

export default Card