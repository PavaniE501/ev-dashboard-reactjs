import React from "react";
import { AreaChart,Area, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer } from "recharts";

const StackedAreaChartComponent=({data,title})=>{
    const chartData=Array.from(data,([key,value])=>({
        name:key,
        count:value.length,
    }));

    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={chartData} margin={{top:10,right:30, left:0,bottom:0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="count" stackId="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
        </>
    )
}

export default StackedAreaChartComponent;