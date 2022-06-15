import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./chart.css"
 const Chart = () => {
    const COLORS = ["#fca311", "#14213d", "#d9d9d9", "#FF8042", "#AF19FF"];
    const pieData = [
        {
           name: "2 visitantes",
           value: 10
        },
        {
           name: "4 visitantes",
           value: 47.91
        },
        
        {
           name: "Por reservar",
           value: 10.25
        }
     ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
           return (
           <div
              className="custom-tooltip"
              style={{
                 backgroundColor: "#ffff",
                 padding: "5px",
                 border: "1px solid #cccc"
              }}
           >
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
           </div>
        );
     }
     return null
    };

    return (
    <div className="chart">
    <PieChart width={300} height={300}>
      <Pie className="cell"
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell 
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
    </PieChart>
    </div>
  )
}
export default Chart;