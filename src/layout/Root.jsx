import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
