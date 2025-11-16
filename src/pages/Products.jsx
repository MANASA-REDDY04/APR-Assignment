import React, { useState } from "react";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";
import PageWrapper from "../components/layouts/PageWrapper";

import TopProductsTable from "../components/tables/TopProductsTable";
import products from "../data/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex w-full">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">
        <Navbar
          onSearch={(txt) => setSearch(txt)}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <PageWrapper>
          <h1 className="text-2xl font-semibold mb-6">Products</h1>

          <TopProductsTable data={filtered} />
        </PageWrapper>
      </div>
    </div>
  );
};

export default Products;
