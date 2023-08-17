import { NavLink, Link } from "@remix-run/react";
import Search from "./search";

const Header = () => {
  return (
    <div className="mb-10 text-white bg-teal-500 shadow-md ">
      <div className="container flex items-center justify-between px-5 py-5 mx-auto ">
        <h1 className="mb-0 text-3xl font-bold text-white uppercase">
          <Link to="/">My Blog</Link>
        </h1>
        <div className="flex justify-between gap-5">
          <nav className="flex gap-5 text-xl [&>a:hover]:underline">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
