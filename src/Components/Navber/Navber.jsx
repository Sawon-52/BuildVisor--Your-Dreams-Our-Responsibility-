import { NavLink } from "react-router-dom";

const Navber = () => {
  const links = (
    <>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/about">
        About Us
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/work">
        Our Work
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/service">
        Service
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/blog">
        Blog
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "border-b-4 border-b-primary " : "")} to="/contact">
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div>
      <nav className="flex  flex-col md:flex-row justify-between items-center py-8">
        <div className="font-inter text-2xl font-bold">
          <h1>BuildVisor</h1>
        </div>
        <div>
          <ul className="flex flex-col items-center  md:flex-row  gap-5 text-md font-inter  font-medium">{links}</ul>
        </div>
        <div className="flex gap-5 text-md font-inter  font-medium">
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
