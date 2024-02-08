import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { orange } from '@mui/material/colors';

export default function BasicLineChart() {
  return (
    <div className=' flex flex-row '>
      <div  className=' bg-slate-50 flex-[0.5]  m-2 rounded-lg'>
      <LineChart 
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: orange[800], // Set the desired color (e.g., red)
          },
        ]}
        
        height={290}
      />
    </div>
     <div  className=' bg-slate-50 flex-[0.5] m-2 rounded-lg'>
     <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
   </div>
    </div>
    
  );
}
