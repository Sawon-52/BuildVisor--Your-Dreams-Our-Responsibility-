import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">This is Root Component</h2>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
