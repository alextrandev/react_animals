import HomepageCard from '../components/home/HomepageCard'
import animals_image from '/images/animals_image.jpeg'
import birds_image from '/images/birds_image.webp'
import fishes_image from '/images/fishes_image.jpeg'
import insects_image from '/images/insects_image.webp'

export default function Home() {

  return (
    <div className="main p-10">
      <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-lg">
        <HomepageCard name="Animals" image={animals_image} />
        <HomepageCard name="Birds" image={birds_image} />
        <HomepageCard name="Fishes" image={fishes_image} />
        <HomepageCard name="Insects" image={insects_image} />
      </div>
    </div>
  )
}
