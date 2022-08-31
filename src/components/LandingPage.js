import React, {useState} from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import { ExamCategoryCard } from "./UI/Widgets/ExamCategoryCard";
import SubjectCard from "./UI/Widgets/SubjectCard";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
  cardMedia: {
    height: 140,
  },
}));

const LandingPage = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const categories = [
    { id: 1, title: "SSC", premium: 0, totalCount: 15 },
    { id: 2, title: "UPSC", premium: 0, totalCount: 5 },
    { id: 3, title: "RBI", premium: 0, totalCount: 20 },
    { id: 4, title: "RRB", premium: 0, totalCount: 25 },
    { id: 5, title: "NEET", premium: 1, totalCount: 10 },
  ];

  const subjects = [
    { id: 1, title: "SSC", premium: 0, totalCount: 15 },
    { id: 2, title: "UPSC", premium: 0, totalCount: 5 },
    { id: 3, title: "RBI", premium: 0, totalCount: 20 },
    { id: 4, title: "RRB", premium: 0, totalCount: 25 },
    { id: 5, title: "NEET", premium: 1, totalCount: 10 },
  ];

  return (
    <Grid container direction="column" sx={{ marginBottom: "2em" }}>
      {/* Guest Block */}
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Grid sm item>
            <Typography
              align="center"
              sx={{
                ...theme.typography.h2,
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  lineHeight: "3.2rem",
                },
              }}
            >
              Bringing the High Quality
              <br />
              Free Test Series
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  ...theme.typography.registerHereButton,
                  margin: "1rem",
                  borderRadius: 50,
                  height: 45,
                  width: 145,
                }}
                color="secondary"
              >
                Register Here
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.common.blue,
                  color: theme.palette.common.blue,
                  borderWidth: 2,
                  margin: "1rem",
                  textTransform: "none",
                  borderRadius: 50,
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: "0.9em",
                  height: 45,
                  width: 175,
                }}
              >
                <span style={{ marginRight: 10 }}>Study Material</span>
                <ArrowForwardIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            {/* image animation lotte */}
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      {/* Exam List */}
      <Grid item>
        <Grid sm item>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.common.blue,
              fontWeight: 600,
              margin: "1rem",
            }}
          >
            Exam Category
          </Typography>
        </Grid>
        <ExamCategoryCard categories={categories} />
      </Grid>
      {/* Subject List */}
      <Grid item>
        <Grid sm item>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.common.blue,
              fontWeight: 600,
              margin: "1rem",
            }}
          >
            Exam Category
          </Typography>
        </Grid>
        <SubjectCard subjects={subjects} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
