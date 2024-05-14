import logo from "/images/zoo_logo.webp";

import { useState } from "react";

export default function AnimalImage({ name, category }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  let categoryQuery = category.slice(0, -1);
  const imageLink = `https://source.unsplash.com/400x400/?${name}+${categoryQuery}`

  // const imageLink = "https://graylinghospitalforanimals.com/wp-content/uploads/sites/19/2022/08/Placeholder-725-×-725-px.png"
  //simple placeholder image to speedup testing

  return (
    <>
      {/* conditional rendering a placeholder image when image still loading. */}
      {!imageLoaded && <img src={logo} className="h-full w-full opacity-50" alt="Placeholder image" />}
      <img
        src={imageLink}
        className={`h-full w-full ${!imageLoaded && "hidden"}`} // this one is to fix layout shift
        onLoad={() => setImageLoaded(true)}
        alt={`image of a/an ${name}`}
      />
    </>
  )
}
