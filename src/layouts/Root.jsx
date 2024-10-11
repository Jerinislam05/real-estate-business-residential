import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-serif">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
