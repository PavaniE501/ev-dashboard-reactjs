import * as d3 from 'd3';
export const loadEVData=async () => {
    const data=await d3.csv('/Electric_Vehicle_Population_Data.csv');
    return data;
}

export const processData=(data)=>{
    const totalEVs=data.length;
    const vehiclesByYear=d3.group(data, d=>d['Model Year']);
    const vehiclesByMake=d3.group(data, d=>d['Make']);

    return {
        totalEVs,
        vehiclesByMake,
        vehiclesByYear
    }
}