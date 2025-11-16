// src/components/charts/BarChart.jsx
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BarChart = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis dataKey="label" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />

        <Tooltip contentStyle={{ borderRadius: "10px" }} />

        <Bar
          dataKey={dataKey}
          fill="#FBCFE8"     // pastel pink
          radius={[10, 10, 0, 0]}
        />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
