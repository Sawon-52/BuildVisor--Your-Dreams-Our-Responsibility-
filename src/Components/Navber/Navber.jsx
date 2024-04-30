import { Link, NavLink } from "react-router-dom";

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
    <div className="">
      <nav className="flex gap-5 flex-col md:flex-row justify-between items-center py-8">
        <div className="font-syne text-4xl font-bold">
          <span className="text-primary">B</span>uild<span className="text-primary">V</span>isor
        </div>
        <div>
          <ul className="flex flex-col items-center  md:flex-row  gap-5 text-md font-inter">{links}</ul>
        </div>
        <div className="flex flex-col md:flex-row gap-5 font-inter">
          <button>
            <Link className="p-2 px-3 border-2 border-black text-black rounded-3xl hover:bg-black hover:text-white duration-500">Sign up</Link>
          </button>
          <button>
            <Link className="p-2 px-3 border-2 border-black text-black rounded-3xl  hover:bg-black hover:text-white duration-500">Sign in</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
