import React, { useState } from "react";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";
import PageWrapper from "../components/layouts/PageWrapper";

import CampaignTable from "../components/tables/CampaignTable";
import campaigns from "../data/campaigns";

const Campaigns = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = campaigns.filter((c) =>
    c.campaign.toLowerCase().includes(search.toLowerCase())
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
          <h1 className="text-2xl font-semibold mb-6">Campaigns</h1>

          <CampaignTable data={filtered} />
        </PageWrapper>
      </div>
    </div>
  );
};

export default Campaigns;
