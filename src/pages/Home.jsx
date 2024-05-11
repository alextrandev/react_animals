import { Link } from 'react-router-dom'
import HomepageCard from '../components/home/HomepageCard'

export default function Home({ zoo }) {
  return (
    <div className="main p-10">
      <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-lg">
        {Object.keys(zoo).map(category => // mapping object by turning it into array
          <Link to={'/' + category} key={category}>
            <HomepageCard name={category} image={`/images/${category}_image.webp`} />
          </Link>
        )}
      </div>
    </div>
  )
}
