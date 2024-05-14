export default function About() {
  return (
    <div className="main p-10">
      <div>
        <h1 className="text-4xl">About React Zoo</h1>
        <p>This is a A zoo site to display various animals filtered into 4 categories. Visitor can search for animals, mark favourites, give likes, etc.</p>
      </div>
      <div>
        <h2>Funtions</h2>
        <p>
          - Display various animals from json file, unsplash api and wiki api
          - Filter animal as 4 categories
          - Fetch a random image for each animal from unsplash and pexel api
          - Placeholder image when loading image from api
          - Search function
          - Debounce for search input
          - Give likes to animal, and view number of likes
          - Hide any animal that you dont like
        </p>
      </div>
      <div>
        <h2>Technologies used</h2>
        <p>
          Languages:
          - Javascript
          - CSS
          - HTML

          Libraries and frameworks:
          - React
          - <a href="https://vitejs.dev/" target="blank">Vite</a>
          - <a href="https://tailwindcss.com/" target="blank">Tailwind</a>
          - <a href="https://github.com/axios/axios" target="blank">Axios</a>
          - <a href="https://www.npmjs.com/package/react-router-dom" target="blank">React Router Dom</a>
          - Rest APIs
        </p>
      </div>
      <div>
        <h2>API sources</h2>
        <p>
          - <a href="https://unsplash.com/developers" target="blank">Unsplash API</a>
          - <a href="https://github.com/pexels/pexels-javascript.git" target="blank">Pexel API / library</a>
          - <a href="https://www.mediawiki.org/wiki/API" target="blank">Wiki API</a>
        </p>
      </div>
    </div >
  )
}
