import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[80%] mx-auto font-display">
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
