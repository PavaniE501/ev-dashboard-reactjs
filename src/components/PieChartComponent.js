import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#00FFFF'];

const processChartData = (data, topN = 5) => {
  const sortedData = Array.from(data, ([key, value]) => ({
    name: key,
    count: value.length,
  })).sort((a, b) => b.count - a.count);

  const topData = sortedData.slice(0, topN);
  const otherData = sortedData.slice(topN);

  const othersCount = otherData.reduce((acc, item) => acc + item.count, 0);
  if (othersCount > 0) {
    topData.push({ name: 'Others', count: othersCount });
  }

  return topData;
};

const PieChartComponent = ({ data, title }) => {
  const chartData = processChartData(data);

  return (
    <>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;
