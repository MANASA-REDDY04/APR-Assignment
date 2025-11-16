// src/components/tables/CampaignTable.jsx
const CampaignTable = ({ data }) => {
  return (
    <div className="
      bg-gradient-to-br from-orange-50 via-white to-amber-50 
      rounded-2xl p-6 shadow-sm border border-gray-100
    ">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Campaign Performance
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 text-gray-600">Campaign</th>
              <th className="p-3 text-gray-600">Spend</th>
              <th className="p-3 text-gray-600">ROAS</th>
              <th className="p-3 text-gray-600">Impressions</th>
              <th className="p-3 text-gray-600">CTR</th>
              <th className="p-3 text-gray-600">Purchases</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/70 transition-all rounded-lg"
              >
                <td className="p-3 font-medium text-gray-700">{row.campaign}</td>

                <td className="p-3 text-gray-700 font-semibold">
                  ₹{row.spend.toLocaleString()}
                </td>

                <td className="p-3 text-gray-600">{row.roas}x</td>

                <td className="p-3 text-gray-600">
                  {row.impressions.toLocaleString()}
                </td>

                <td className="p-3 text-gray-600">{row.ctr}%</td>

                <td className="p-3 text-gray-600">{row.purchases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
