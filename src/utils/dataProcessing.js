import * as d3 from 'd3';
export const loadEVData=async () => {
    const data=await d3.csv('/Electric_Vehicle_Population_Data.csv');
    return data;
}

export const processData=(data)=>{
    const totalEVs=data.length;
    const vehiclesByYear=d3.group(data, d=>d['Model Year']);
    const vehiclesByMake=d3.group(data, d=>d['Make']);

    const groupedData=Array.from(vehiclesByYear,([year, values])=>({
        name:year,
        groupA:values.filter(v=>v.Make==='MakeA').length,
        groupB:values.filter(v=>v.Make==='MakeB').length,
    }))

   

    return {
        totalEVs,
        vehiclesByMake,
        vehiclesByYear,
        groupedData,
        
    }
}