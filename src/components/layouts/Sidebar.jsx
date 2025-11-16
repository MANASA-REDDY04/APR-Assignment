import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ open, setOpen }) => {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Products", path: "/products" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-gradient-to-b from-blue-50 to-purple-50 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
      >
        {/* Close button — mobile only */}
        <button
          className="lg:hidden absolute top-4 right-4 text-3xl text-gray-700"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        <h2 className="text-xl font-semibold p-6">Menu</h2>

        <nav className="px-6 space-y-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
