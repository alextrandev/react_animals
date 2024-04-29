import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-500 flex justify-between text-white py-4 px-10">
      <div>
        <Link to={"/"}>
          <h1 className="text-xl"> React Zoo App</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          <li><NavLink to={"/"}>Home</NavLink ></li>
          <li><NavLink to={"/animals"}>Animals</NavLink ></li>
          <li><NavLink to={"/birds"}>Birds</NavLink ></li>
        </ul>
      </div>
    </div >
  );
}
