import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const GroupedChartComponent=({data, title})=>{
    const chartData=[
        {name:'2020', groupA:4000,groupB:2400},
        {name:'2021',groupA:3000,groupB:1398},
        {name:'2022', groupA:2000,groupB:9800},
        {name:'2023',groupA:2780, groupB:3908},
        {name:'2024',groupA:1890,groupB:4800},
    ]
    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={360}>
            <BarChart data={chartData} margin={{top:20,right:30,left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="groupA" fill="#8884d8" />
                <Bar dataKey="groupB" fill="#8884d9" />
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

export default GroupedChartComponent