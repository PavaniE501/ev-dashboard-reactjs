import React from "react";
import { ScatterChart, XAxis, Scatter, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts";

const ScatterPlotComponent=({data,title})=>{
    const chartData=Array.from(data,([key, value])=>({
        x:parseInt(key,10),
        y:value.length
    }))
    return(
        <>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={370}>
            <ScatterChart margin={{top:20, bottom:20, right:20, left:20}}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Year" unit="" />
                <YAxis type="number" dataKey="y" name="Count" unit="" />
                <ZAxis type="number" range={[100]} />
                <Tooltip cursor={{strokeDasharray:'3 3'}} />
                <Scatter name="EV Population" data={chartData} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
        </>
    )
}

export default ScatterPlotComponent;