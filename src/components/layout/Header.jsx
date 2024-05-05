import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-500 flex justify-between items-center px-10 text-white h-[8vh]">
      <div>
        <Link to={"/"} className="flex items-center gap-3">
          <img className="h-7" src="https://graylinghospitalforanimals.com/wp-content/uploads/sites/19/2022/08/Placeholder-725-×-725-px.png" alt="Zoo app logo" />
          <h1 className="text-xl"> React Zoo App</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          <li><NavLink to={"/"}>Home</NavLink ></li>
          <li><NavLink to={"/animals"}>Animals</NavLink ></li>
          <li><NavLink to={"/birds"}>Birds</NavLink ></li>
          <li><NavLink to={"/fishes"}>Fishes</NavLink ></li>
          <li><NavLink to={"/insects"}>Insects</NavLink ></li>
        </ul>
      </div>
    </ header>
  );
}
