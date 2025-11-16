const MetricCard = ({ title, value, change }) => {
  return (
    <div className="
      bg-gradient-to-br from-indigo-50 via-white to-blue-50 
      rounded-2xl p-6 shadow-sm border border-gray-100 
      hover:shadow-md transition-all cursor-pointer
    ">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>

      <p className="text-2xl font-semibold text-gray-800">{value}</p>

      {change && (
        <p className={`mt-2 text-sm font-medium ${
          change.includes('-') ? 'text-red-500' : 'text-green-600'
        }`}>
          {change}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
