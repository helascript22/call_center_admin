import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "Mon", calls: 40 },
    { name: "Tue", calls: 67 },
    { name: "Wed", calls: 52 },
    { name: "Thu", calls: 61 },
    { name: "Fri", calls: 52 },
    { name: "Sat", calls: 52 },
    { name: "Sun", calls: 74 },
  ];
  
  export default function CallAnalyticsChart() {
    return (
      <div className="w-full h-[450px] flex flex-col justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f3f" />
            <XAxis dataKey="name" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
            <YAxis tick={{ fill: "#a1a1aa", fontSize: 12 }} domain={[0, 80]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#2a2a2a", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="calls" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  