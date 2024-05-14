import './about.css';

export default function About() {
  return (
    <div className="main p-10">
      <h1 className="text-4xl">About React Zoo</h1>
      <div className='text-wrapping'>
        <p>This is a A zoo site to display various animals filtered into 4 categories. Visitor can search for animals, mark favourites, give likes, etc.</p>
      </div>
      <div className='text-wrapping'>
        <h2 className="text-xl font-bold">Funtions</h2>
        <li>Display various animals from json file, unsplash api and wiki api</li>
        <li>Filter animal as 4 categories</li>
        <li>Fetch a random image for each animal from unsplash and pexel api</li>
        <li>Placeholder image when loading image from api</li>
        <li>Search function</li>
        <li>Debounce for search input</li>
        <li>Give likes to animal, and view number of likes</li>
        <li>Hide any animal that you dont like</li>
      </div>
      <div className='text-wrapping'>
        <h2 className="text-xl font-bold">Technologies used</h2>
        <div>
          <div>
            <h3 className="text-l font-bold">Languages:</h3>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
          </div>
          <div>
            <h3 className="text-l font-bold">Libraries:</h3>
            <li><a href="https://tailwindcss.com/" target="blank">Tailwind</a></li>
            <li><a href="https://github.com/axios/axios" target="blank">Axios</a></li>
            <li><a href="https://www.npmjs.com/package/react-router-dom" target="blank">React Router Dom</a></li>
          </div>
        </div>
      </div>
      <div className='text-wrapping'>
        <h2 className="text-xl font-bold">API sources</h2>
        <p>
          <li><a href="https://unsplash.com/developers" target="blank">Unsplash API</a></li>
          <li><a href="https://www.mediawiki.org/wiki/API" target="blank">Wiki API</a></li>
        </p>
      </div>
    </div >
  )
}
