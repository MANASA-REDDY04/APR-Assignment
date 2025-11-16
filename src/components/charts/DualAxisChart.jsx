// src/components/charts/DualAxisChart.jsx
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DualAxisChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis dataKey="label" stroke="#6b7280" />
        <YAxis yAxisId="left" stroke="#60A5FA" />
        <YAxis yAxisId="right" orientation="right" stroke="#F472B6" />

        <Tooltip contentStyle={{ borderRadius: "10px" }} />

        {/* Ad Spend */}
        <Bar
          yAxisId="left"
          dataKey="spend"
          fill="#BFDBFE"     // pastel sky blue
          radius={[10, 10, 0, 0]}
        />

        {/* ROAS */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="roas"
          stroke="#F472B6"   // pastel rose
          strokeWidth={3}
          dot={{ r: 3, strokeWidth: 2 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default DualAxisChart;
