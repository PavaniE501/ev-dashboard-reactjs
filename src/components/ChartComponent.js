import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ChartComponent=({data, title})=>{
    const chartData=Array.from(data, ([key,value])=>({
        name:key,
        count:value.length,
    }));

    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r:8}} />
            </LineChart>
        </ResponsiveContainer>
        </>
    )
}

export default ChartComponent