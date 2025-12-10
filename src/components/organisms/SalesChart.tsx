'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';
import YearFilter from '../atoms/YearFilter';
import ChartTypeSelector from '../molecules/ChartTypeSelector';
import { salesData } from '@/data/sales';

export default function SalesChart() {
  const [minSales, setMinSales] = useState(0);
  const [chartType, setChartType] = useState("bar");

  const filtered = salesData.filter(item => item.sales >= minSales);
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sales Chart</h2>

      <YearFilter onChange={setMinSales} />
      <ChartTypeSelector onChange={setChartType} />

      {chartType === "bar" && (
        <BarChart width={500} height={300} data={filtered}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      )}

      {chartType === "line" && (
        <LineChart width={500} height={300} data={filtered}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      )}

      {chartType === "pie" && (
        <PieChart width={400} height={300}>
          <Pie
            data={filtered}
            dataKey="sales"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {filtered.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </div>
  );
}
