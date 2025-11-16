// src/components/cards/ChartCard.jsx
const ChartCard = ({ title, children }) => {
  return (
    <div className="
      bg-gradient-to-br from-pink-50 via-white to-rose-50 
      rounded-2xl p-6 shadow-sm border border-gray-100
      hover:shadow-md transition-all
    ">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>

      <div className="w-full h-64">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
