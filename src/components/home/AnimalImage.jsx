import { useState } from 'react';
import { createClient } from 'pexels';

export default function AnimalImage({name, categoryName}) {
  const [imageLink, setImageLink] = useState("");

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

  const query = name + " " + categoryQuery;
  const client = createClient(import.meta.env.VITE_API_KEY);

  client.photos.search({ query,  orientation: "landscape", per_page: 1 }).then(photos => {
    setImageLink(photos.photos[0].src.original);
  });

  return (
    <img src={imageLink} className="h-full" alt={`image of a/an ${name}`}/>
  )
}
