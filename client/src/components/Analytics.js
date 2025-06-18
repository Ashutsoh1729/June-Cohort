import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", new: 18, old: 48, critical: 24 },
  { name: "Tue", new: 28, old: 44, critical: 25 },
  { name: "Wed", new: 36, old: 47, critical: 32 },
  { name: "Thu", new: 27, old: 51, critical: 37 },
  { name: "Fri", new: 38, old: 44, critical: 18 },
];

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-semibold text-gray-800">Analytics</h2>
        <span className="text-sm text-gray-500">week ▼</span>
      </div>

      <hr className="border-t border-gray-600 mb-4" />

      {/* Legends */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-300 rounded-full" />
          <span className="text-sm text-gray-700">new</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-300 rounded-full border border-yellow-700" />
          <span className="text-sm text-gray-700">Old</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-300 rounded-full" />
          <span className="text-sm text-gray-700">Critical</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis
              domain={[15, 55]}
              tick={{ fontSize: 12 }}
              ticks={[25, 35, 45, 55]}
              width={20}
            />
            <Tooltip />
            <Line
              type="linear"
              dataKey="new"
              stroke="#4ade80"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="linear"
              dataKey="old"
              stroke="#fca5a5"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="linear"
              dataKey="critical"
              stroke="#fde047"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
