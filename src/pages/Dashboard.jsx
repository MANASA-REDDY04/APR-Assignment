import React, { useState } from "react";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";
import PageWrapper from "../components/layouts/PageWrapper";

import MetricCard from "../components/cards/MetricCard";
import ChartCard from "../components/cards/ChartCard";

import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import DualAxisChart from "../components/charts/DualAxisChart";

import TopProductsTable from "../components/tables/TopProductsTable";
import CampaignTable from "../components/tables/CampaignTable";

import metrics from "../data/metrics.js";
import campaigns from "../data/campaigns.js";
import salesOverTime from "../data/salesOverTime.js";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const impressionsCTR = [
    { label: "Winter Sale 2025", impressions: 200000 },
    { label: "New Collection Drop", impressions: 310000 },
    { label: "Retargeting Boost", impressions: 120000 },
  ];

  const spendRoasData = [
    { label: "Week 1", spend: 2000, roas: 3.2 },
    { label: "Week 2", spend: 3500, roas: 2.9 },
    { label: "Week 3", spend: 2800, roas: 3.8 },
    { label: "Week 4", spend: 4000, roas: 4.2 },
  ];

  const topProducts = [
    { name: "T-Shirt", units: 120, revenue: 24000 },
    { name: "Sneakers", units: 90, revenue: 54000 },
    { name: "Cap", units: 60, revenue: 9000 },
  ];


  const filteredProducts = topProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCampaigns = campaigns.filter((c) =>
    c.campaign.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex w-full">

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">

        <Navbar
          onSearch={(text) => setSearch(text)}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <PageWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((m, idx) => (
              <MetricCard key={idx} title={m.title} value={m.value} change={m.change} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ChartCard title="Sales Over Time">
              <LineChart data={salesOverTime} />
            </ChartCard>

            <ChartCard title="Impressions">
              <BarChart data={impressionsCTR} dataKey="impressions" />
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-8">
            <ChartCard title="Spend vs ROAS">
              <DualAxisChart data={spendRoasData} />
            </ChartCard>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TopProductsTable data={filteredProducts} />
            <CampaignTable data={filteredCampaigns} />
          </div>

        </PageWrapper>
      </div>
    </div>
  );
};

export default Dashboard;
