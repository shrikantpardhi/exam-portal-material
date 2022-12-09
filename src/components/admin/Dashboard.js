import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import TileCard from "../UI/card/TileCard";

const Dashboard = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ m: 3 }}>
      {/* count tiles */}
      <Grid container direction="row" spacing={1}>
        <TileCard title="Customers" value="500" />
        <TileCard title="Exam Category" value="500" />
        <TileCard title="Exam" value="500" />
        <TileCard title="Subject" value="500" />
      </Grid>
      {/* charts */}
      <Grid container direction="row" spacing={1} sx={{ mt: 2 }}>
        <Grid item sm>
          google chart1
        </Grid>
        <Grid item sm>
          google chart2
        </Grid>
      </Grid>
    </Box>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
