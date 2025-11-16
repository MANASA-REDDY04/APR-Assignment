import React, { useState } from "react";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";
import PageWrapper from "../components/layouts/PageWrapper";

import ChartCard from "../components/cards/ChartCard";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import DualAxisChart from "../components/charts/DualAxisChart";

import salesOverTime from "../data/salesOverTime";
import campaigns from "../data/campaigns";

const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const impressionsData = campaigns.map((c) => ({
    label: c.campaign,
    impressions: c.impressions,
  }));

  return (
    <div className="flex w-full">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <PageWrapper>
          <h1 className="text-2xl font-semibold mb-6">Reports Overview</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ChartCard title="Sales Over Time">
              <LineChart data={salesOverTime} />
            </ChartCard>

            <ChartCard title="Campaign Impressions">
              <BarChart data={impressionsData} dataKey="impressions" />
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <ChartCard title="Spend vs ROAS">
              <DualAxisChart
                data={campaigns.map((c) => ({
                  label: c.campaign,
                  spend: c.spend,
                  roas: c.roas,
                }))}
              />
            </ChartCard>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
};

export default Reports;
