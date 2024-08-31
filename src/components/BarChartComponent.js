import { count } from "d3";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent=({data, title})=>{
    const chartData=Array.from(data, ([key, value])=>({
        name:key,
        count:value.length
    }));

    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{top:20, right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

export default BarChartComponent;
