import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
  
class ApexChart extends React.Component {
   COLORS = ["#fca311", "#14213d", "#d9d9d9", "#FF8042", "#AF19FF"];
  
   /* opciones 
    count = 0
    count2 = 0
      ALGO.reserves.map((reserva)=>
         if(reserva.visitors=="2"){
            count =+ 1
         }if (reserva.visitors=="4"){
            count2 =+ 1
         }
      )
      values = []
      values.push(count*100/ALGO.capacity)
      values.push(count2*100/ALGO.capacity)
   
   */
   pieData = [
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
   CustomTooltip = ({ active, payload, label }) => {
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
   return null;
};
render() {
   return (
      <PieChart width={730} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      );
   }
}


export default ApexChart;