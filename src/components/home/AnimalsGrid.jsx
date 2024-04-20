import Card from "./Card";

export default function AnimalsGrid({animals, categoryName}) {

  return (
    <>
        <h2 className="text-xl font-bold p-10 pb-1">{categoryName}</h2>
        <div className="main p-10 pt-1 grid grid-cols-7 gap-2">
            {animals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
    </>
  )
}
