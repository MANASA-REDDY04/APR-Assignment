// src/components/charts/LineChart.jsx
import {
  LineChart as ReLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReLineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="date" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />

        <Tooltip contentStyle={{ borderRadius: "10px" }} />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#818CF8"       // pastel indigo
          strokeWidth={3}
          dot={{ r: 4, stroke: "#6366F1", strokeWidth: 2 }}
        />
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
