// src/components/SevenDayChart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface SevenDayChartProps {
  data: number[];
}

const SevenDayChart: React.FC<SevenDayChartProps> = ({ data }) => {
  const formattedData = data.map((price, index) => ({ day: index + 1, price }));

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="day" hide />
        <YAxis hide />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SevenDayChart;
