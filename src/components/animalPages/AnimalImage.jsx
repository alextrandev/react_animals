import logo from "/images/zoo_logo.webp";

import { useState } from "react";

export default function AnimalImage({ name, category }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  let categoryQuery = "animal";

  switch (category) {
    case "mammals":
      categoryQuery = "animal";
      break;
    case "birds":
      categoryQuery = "bird";
      break;
    case "fishes":
      categoryQuery = "fish";
      break;
    case "insects":
      categoryQuery = "insect";
      break;
  }

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
