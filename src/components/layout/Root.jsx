import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
