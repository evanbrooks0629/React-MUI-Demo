import { Grid, Typography } from '@mui/material';

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4} />
      <Grid item xs={4} align="center" style={{backgroundColor: "blue"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item 12</Typography>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4} />
      <Grid item xs={4} align="center" style={{backgroundColor: "green"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item 6</Typography>
      </Grid>
      <Grid item xs={4} />
      
      <Grid item xs={4} />
      <Grid item xs={4} align="center" style={{backgroundColor: "yellow"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item 6</Typography>
      </Grid>
      <Grid item xs={4} />

      <Grid item xs={4} sm={4} md={6} lg={1} align="center" style={{backgroundColor: "red"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item resize</Typography>
      </Grid>

      <Grid item xs={4} sm={4} md={3} lg={7} align="center" style={{backgroundColor: "orange"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item 6</Typography>
      </Grid>

      <Grid item xs={4} sm={4} md={3} lg={4} align="center" style={{backgroundColor: "purple"}}>
        <Typography variant="h5" style={{color: "white", lineHeight: "80px"}}>Grid item 6</Typography>
      </Grid>

    </Grid>
  );
}

export default App;
