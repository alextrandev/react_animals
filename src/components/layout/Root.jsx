import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Root({ zoo }) {
  return (
    <>
      <div className="wrapper">
        <Header zoo={zoo} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
