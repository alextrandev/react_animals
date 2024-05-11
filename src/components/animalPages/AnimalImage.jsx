import logo from "/images/zoo_logo.webp";
// import { useState } from 'react';
// import { createClient } from 'pexels';

import { useState } from "react";

export default function AnimalImage({ name, categoryName }) {
  // const [imageLink, setImageLink] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  let categoryQuery = "animal";

  switch (categoryName) {
    case "Mammals":
      categoryQuery = "animal";
      break;
    case "Birds":
      categoryQuery = "bird";
      break;
    case "Fishes":
      categoryQuery = "fish";
      break;
    case "Insects":
      categoryQuery = "insect";
      break;
  }

  // const query = name + " " + categoryQuery;
  // const client = createClient(import.meta.env.VITE_API_KEY);

  // client.photos.search({ query, orientation: "landscape", per_page: 1 }).then(photos => {
  //   setImageLink(photos.photos[0].src.original);
  // });

  const imageLink = `https://source.unsplash.com/400x400/?${name}+${categoryQuery}`

  // const imageLink = "https://graylinghospitalforanimals.com/wp-content/uploads/sites/19/2022/08/Placeholder-725-×-725-px.png"
  //simple placeholder image to speedup testing

  return (
    <>
      {!imageLoaded && <img src={logo} className="h-full w-full opacity-50" alt="Placeholder image" />}
      <img
        src={imageLink}
        className={`h-full w-full ${!imageLoaded && "hidden"}`}
        onLoad={() => setImageLoaded(true)}
        alt={`image of a/an ${name}`}
      />
    </>
  )
}
