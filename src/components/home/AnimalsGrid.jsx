import Card from "./Card";

export default function AnimalsGrid({animals}) {
  return (
    <>
        <div className="main p-10 grid grid-cols-8 gap-2">
            {animals.map(animal => <Card key={animal.name} {...animal}/>)}
        </div>
    </>
  )
}
