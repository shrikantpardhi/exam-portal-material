import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

const useStyle = makeStyles((theme) => ({
  bottomText: {
    fontFamily: "Railway",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "1rem",
    color: "white",
  },
}));

export default function Footer(props) {
  const classes = useStyle();
  const ref = React.useRef(null);
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.palette.common.blue,
          pt: 1,
          pb: 1,
          pl: 2,
          pr: 2,
          [theme.breakpoints.down("sm")]: {
            position: "relative",
          },
        }}
        elevation={3}
      >
        <Grid
          container
          justifyContent="space-between"
          style={{ color: "white" }}
          direction="row"
        >
          <Grid item>
            <Typography className={classes.bottomText}>
              @2022 Exam Portal. All right reserved.
            </Typography>
          </Grid>
          <Grid item>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TelegramIcon />
            <TwitterIcon />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
