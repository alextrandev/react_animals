import { useParams } from "react-router-dom"
import AnimalImage from "../components/animalPages/AnimalImage";
import axios from 'axios';
import { useState } from "react";
import AnimalData from "../components/singleAnimalPages/AnimalData";

export default function AnimalPage() {
  const { category, animal } = useParams();
  let animalData = {};

  axios
    .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${animal}`,
      {
        headers: { 'accept': 'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.4.2"' }
      })
    .then(response => animalData = response)
    .catch(error => console.log(error));

  console.log(animalData);

  return (
    <div className="main p-10">
      <div className="grid grid-cols-2 border-2 border-black rounded-xl overflow-hidden shadow-xl">
        <AnimalImage name={animal} categoryName={category} />
        <div className="flex flex-col p-7 bg-gray-300">
          <div className="text-4xl flex justify-between">
            <h1>{animal[0].toUpperCase() + animal.slice(1)}</h1>
            <span className="material-symbols-rounded text-4xl">close</span>
          </div>
          <AnimalData />
        </div>
      </div>
    </div>
  )
}
