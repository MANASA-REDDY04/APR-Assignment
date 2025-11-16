const TopProductsTable = ({ data }) => {
  return (
    <div className="
      bg-gradient-to-br from-teal-50 via-white to-green-50 
      rounded-2xl p-6 shadow-sm border border-gray-100
    ">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Top Products
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 text-gray-600">Product</th>
              <th className="p-3 text-gray-600">Units Sold</th>
              <th className="p-3 text-gray-600">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/70 transition-all rounded-lg"
              >
                <td className="p-3 font-medium text-gray-700">{item.name}</td>
                <td className="p-3 text-gray-600">{item.units}</td>
                <td className="p-3 text-gray-700 font-semibold">
                  ₹{item.revenue.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;
