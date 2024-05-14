import { NavLink, Link } from "react-router-dom";
import logo from "/images/zoo_logo.webp";

export default function Header({ zoo }) {
  return (
    <header className="bg-gray-500 flex justify-between items-center px-10 text-white h-[8vh]">
      <div>
        <Link to={"/"} className="flex items-center gap-3">
          <img className="h-7" src={logo} alt="Zoo app logo" />
          <h1 className="text-xl"> React Zoo App</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          <li><NavLink to={"/"}>Home</NavLink ></li>
          {Object.keys(zoo).map(category => // turn object into array to ilterate
            <li key={category}>
              <NavLink to={`/${category}`}>{category[0].toUpperCase() + category.slice(1)}</NavLink >
            </li>
          )}
          <li><NavLink to={"/about"}>About</NavLink></li>
        </ul>
      </div>
    </ header>
  );
}
