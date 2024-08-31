import { count } from "d3";
import React from "react";
import { ResponsiveContainer, PieChart, Pie ,Cell,Tooltip, Legend} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const PieChartComponent=({data, title})=>{
    const chartData=Array.from(data, ([key, value])=>({
        name:key,
        count:value.length
    }));

    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={chartData} dataKey="count" nameKey="name" cx='50%' cy="50%" outerRadius={100} fill="#8884d8" label >
                    {chartData.map((entry, index)=>(
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
        </>
    )
}

export default PieChartComponent;
