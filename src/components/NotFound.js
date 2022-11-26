import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}

    >
      <Grid item sm>
        <Typography
          align="center"
          variant="h2"
          color="secondary"
          sx={{
            fontSize: "2.75rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.2rem",
              fontWeight: 600,
              lineHeight: "3.2rem",
            },
          }}
        >
          404
          <br />
          Not Found
        </Typography>
      </Grid>
      <Grid item sm>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
