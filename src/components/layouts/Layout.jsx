import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full h-screen flex bg-gray-100">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1 lg:ml-64">

        <Navbar onMenuClick={() => setOpen(!open)} />

        <main className="p-4 overflow-auto h-[calc(100vh-64px)] mt-16 lg:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
