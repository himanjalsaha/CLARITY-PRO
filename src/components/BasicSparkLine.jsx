import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  const currentDate = new Date();
  const timeData = Array.from({ length: 9 }, (_, index) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - index);
    return date;
  }).reverse();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className='bg-white m-2 rounded-lg'>
      <LineChart
        xAxis={[
          {
            data: timeData,
            scaleType: 'time',
            valueFormatter: (date) => weekdays[date.getDay()],
          },
        ]}
        series={[
          {
            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3],
            showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        width={600}
        height={300}
        axisStyles={{
          axis: { stroke: '#fff' }, // Make axis lines white
          ticks: { stroke: '#fff' }, // Make tick lines white
        }}
        seriesStyles={{
          stroke: '#fff', // Make line chart stroke white
        }}
      />
    </div>
  );
}
