import React from "react";
import { BarChart } from '@mui/x-charts/BarChart'; 


const TaskBarChart = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <BarChart
      borderRadius={10}
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'],colorMap:{color:['black']} }]}
      series={[{ data: [4, 3, 5] }]}
      width={500}
      height={300}
      loading={true}
    />
    </div>
  );
};

export default TaskBarChart;
