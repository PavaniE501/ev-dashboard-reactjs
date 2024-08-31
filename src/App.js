import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { loadEVData, processData } from "./utils/dataProcessing";
import ChartComponent from "./components/ChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";

function App () {
  const [evData, setEVData]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      const rawData=await loadEVData();
      const processedData=processData(rawData);
      setEVData(processedData)
    };
    fetchData()
  },[]);

  if(!evData) return <div>Loading....</div>;

  return(
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Electric Vehicle Population Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <ChartComponent data={evData.vehiclesByYear} title="EV Population by Year" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <BarChartComponent data={evData.vehiclesByMake} title="EVs by Manufacturer" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <PieChartComponent data={evData.vehiclesByMake} title="EV Proportion by Manufacturer" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App