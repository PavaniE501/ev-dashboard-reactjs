import React from 'react';
import { FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const processPyramidChartData = (data, topN = 5) => {
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

const PyramidChartComponent = ({ data, title }) => {
  const chartData = processPyramidChartData(data);

  return (
    <>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart width={400} height={400}>
          <Tooltip />
          <Legend />
          <Funnel
            dataKey="count"
            data={chartData}
            isAnimationActive
            label={({ name, value }) => `${name}: ${value}`}
            fill="#8884d8"
          >
            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </>
  );
};

export default PyramidChartComponent;
