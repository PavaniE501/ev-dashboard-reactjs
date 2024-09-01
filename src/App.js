import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { loadEVData, processData } from "./utils/dataProcessing";
import ChartComponent from "./components/ChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import PyramidChartComponent from "./components/PyramidChartComponent";
import StackedAreaChartComponent from "./components/StackedAreaChartComponent";
import ScatterPlotComponent from "./components/ScatterPlotComponent";
import GroupedChartComponent from "./components/GroupedChartComponent";

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
    <Container style={{maxWidth:'100%', margin:'0 auto', padding:'20px'}}>
      <Typography variant="h4" component="h1" gutterBottom style={{textAlign:'center'}}>
        Electric Vehicle Population Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px'}}>
            <ChartComponent data={evData.vehiclesByYear} title="EV Population by Year" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px'}}>
            <BarChartComponent data={evData.vehiclesByMake} title="EVs by Manufacturer" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px', marginBottom:20}}>
            <PieChartComponent data={evData.vehiclesByMake} title="EV Proportion by Manufacturer" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', height: '400px' }}>
            <PyramidChartComponent data={evData.vehiclesByMake} title="EV Proportion Pyramid" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px'}}>
            <StackedAreaChartComponent data={evData.vehiclesByYear} title="EV Population Over Time" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px'}}>
            <ScatterPlotComponent data={evData.vehiclesByYear} title="EV Scatter Plot" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:'20px', height:'400px'}}>
            <GroupedChartComponent data={evData.vehiclesByYear} title="EV Grouped Bar Chart" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App