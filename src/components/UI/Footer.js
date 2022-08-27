import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
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
    paddingRight:"1em",
    paddingLeft:"1em",
  },
}));

export default function Footer(props) {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      {/* <Hidden mdDown> */}
      {/* <Grid
        container
        justifyContent="center"
        className={classes.mainContainer}
        spacing={3}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
              className={classes.link}
            >
              Home
            </Grid>
            <Grid item className={classes.link}>
              Image
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => props.setValue(7)}
              className={classes.link}
            >
              About Us
            </Grid>
            <Grid
              item
              component={Link}
              to="/contact"
              onClick={() => props.setValue(8)}
              className={classes.link}
            >
              Contact Us
            </Grid>
            <Grid item className={classes.link}>
              Sitemap
            </Grid>
            <Grid item className={classes.link}>
              Privacy Policy
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Follow Us
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.link}
              spacing={1}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <YouTubeIcon />
              </Grid>
              <Grid item>
                <TelegramIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      {/* </Hidden> */}
      <Grid
        container
        justifyContent="center"
        className={classes.mainContainer}
        style={{color:"white"}}
      >
        <Grid container justifyContent="space-between">
          <Grid item className={classes.gridItem} xs={12} sm={12} md={6}>
            @2022 Exam Portal. All right reserved.
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={12} md={6}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              spacing={1}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <YouTubeIcon />
              </Grid>
              <Grid item>
                <TelegramIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
