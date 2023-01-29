import React, { useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import TagList from "./UI/Widgets/TagList";
import AddCodeDialog from "./UI/dialog/AddCodeDialog";

const LandingPage = (props) => {
  const theme = useTheme();
  const isLoggedIn = useState(true);
  const [openCodeDialog, setOpenCodeDialog] = useState(false);

  const handleCodeDialog = () => {
    setOpenCodeDialog(!openCodeDialog);
  }

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
            {isLoggedIn && (
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    ...theme.typography.registerHereButton,
                    margin: "1rem",
                    borderRadius: 50,
                    fontWeight: "bold",
                    height: 45,
                    width: 145,
                  }}
                  color="success"
                  onClick={handleCodeDialog}
                >
                  Have a Code
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <AddCodeDialog openCodeDialog={openCodeDialog} handleCodeDialog={handleCodeDialog} />
      <Divider variant="middle" />
      {/* Exam List */}
      <Grid item>
        <TagList />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
