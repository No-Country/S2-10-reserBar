import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./chart.css"

 const Chart = (infoBar) => {
   
    const COLORS = ["#14213d","#fca311", "#d9d9d9", "#FF8042", "#AF19FF"];
     let values = infoBar.info.reserves.map((reserva)=>
      parseInt(reserva.visitors)
   
 )
 const reducer = (accumulator, curr) => accumulator + curr;
 const result =(values.reduce(reducer)*100)/infoBar.info.capacity;

    const pieData = [
        {
           name: "Reservas",
           value: result
        },
        {
           name: "Por reservar",
           value: 100-result
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