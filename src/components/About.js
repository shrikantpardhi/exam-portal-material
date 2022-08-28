import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
  missionStatement:{
    fontStyle:"italic",
    fontWeight:300,
    fontSize:"1.5em",
    maxWidth:"50em",
    lineWeight:1.4,
  },
}));

const About = (props) => {
    const classes = useStyle();
    const theme = useTheme();

  return (
    <Grid container direction="column">
        <Grid item>
            <Typography variant="h2">About Us</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" className={classes.missionStatement}>
                Mission
            </Typography>
        </Grid>
    </Grid>
  );
};

export default About;
