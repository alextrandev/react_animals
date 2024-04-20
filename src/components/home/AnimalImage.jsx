import axios from 'axios';
import { useState } from 'react';

export default function AnimalImage({name}) {
  const [imageLink, setImageLink] = useState("");
  const imageQuery = `https://api.iconify.design/search?query=${name}&limit=32`;
  axios
    .get(imageQuery)
    .then(response => {
      const imageName = response.data.icons[0] ?? "cil:animal";
      const imageLinkParts = imageName.split(":");
      setImageLink(`https://api.iconify.design/${imageLinkParts[0]}/${imageLinkParts[1]}.svg`);
    })
    .catch(error => console.log(error))
    return (
      <img src={imageLink} className="w-full p-5" alt={`image of a/an ${name}`}/>
    )
}
