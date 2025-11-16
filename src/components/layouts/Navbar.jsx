import { Link } from "react-router-dom";
const Navbar = ({ onMenuClick }) => {
  return (
    <nav className=" fixed top-0 right-0 h-16 bg-white shadow flex items-center px-4 sm:px-8 z-40 w-full lg:w-[calc(100%-16rem)] lg:ml-64 ">
      {" "}
      <button className="lg:hidden p-2 mr-3" onClick={onMenuClick}>
        {" "}
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />{" "}
        </svg>{" "}
      </button>{" "}
      <h1 className="text-lg sm:text-xl font-semibold text-gray-700">
        {" "}
        APR Hub Dashboard{" "}
      </h1>{" "}
      <div className="ml-auto flex items-center gap-4">
        {" "}
        <div className="w-9 h-9 bg-gray-200 rounded-full"></div>{" "}
        <Link
          to="/login"
          className="hidden sm:block px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600"
        >
          {" "}
          Login{" "}
        </Link>{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;
