import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adorment: {
    width: "20em",
    verticalAlignment: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "15em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "10em",
    },
  },
  mainContainer: {
    // position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    marginBootom: "1rem",
    marginTop: "1rem",
    paddingRight: "1em",
    paddingLeft: "1em",
  },
  socialContainer: {
    // position:"absolute",
    marginTop: "1em",
    paddingRight: "1em",
    right: "1.5em",
  },
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

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent="center"
        className={classes.mainContainer}
        style={{ color: "white" }}
      >
        <Grid container justifyContent="space-between">
          <Grid item className={classes.gridItem} xs={12} sm={12} md={6}>
            <Typography className={classes.bottomText}>
              @2022 Exam Portal. All right reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              className={classes.socialContainer}
            >
              <Grid item >
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <TelegramIcon />
                <TwitterIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
