import { useNavigate, useParams } from "react-router-dom"
import AnimalImage from "../components/animalPages/AnimalImage";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function AnimalPage() {
  const { category, animal } = useParams();
  const [animalData, setAnimalData] = useState({})

  const navigate = useNavigate(); // for the back button, like history.go but not refreshing the page
  // use effect here to prevent infinite re-rendering
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${animal}`,
          {
            headers: { 'accept': 'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.4.2"' }
          })
        .then(response => setAnimalData(response.data))
        .catch(error => console.log(error));
    }
    fetchData();
  }, [animal]);

  return (
    <div className="main p-10">
      <div className="grid grid-cols-2 border-2 border-black rounded-xl overflow-hidden shadow-xl">
        <AnimalImage name={animal} categoryName={category} />
        <div className="flex flex-col p-7 bg-gray-300">
          <div className="text-4xl flex justify-between">
            <h1>{animal[0].toUpperCase() + animal.slice(1)}</h1>
            <button onClick={() => navigate(-1)}>
              <span className="material-symbols-rounded text-4xl">close</span>
            </button>
          </div>
          <div className="py-3">
            <p>Description</p><p>{animalData.extract}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
