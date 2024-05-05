export default function HomepageCard({ name, image }) {
  return (
    <div className="relative h-full">
      <img className="h-full" src={image} alt={`image of various ${name}`} />
      <div className="absolute bottom-4 right-4 backdrop-blur-[2px] rounded-lg p-1">
        <h1 className="text-white font-bold text-5xl">{name.toUpperCase()}</h1>
      </div>
    </div >
  )
}
