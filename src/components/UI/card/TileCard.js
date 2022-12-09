import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const TileCard = (props) => {
  const theme = useTheme();
  return (
    <Grid item sm={4} lg={2} md={3}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.background.card,
          textAlign: "center",
          color: "white",
        }}
      >
        <CardContent>
          <Grid container direction="column">
            <Grid item sm>
              <Typography variant="h4" color={theme.typography.white}>
                {props.value}
              </Typography>
            </Grid>
            <Grid item sm>
              <Typography
                variant="h5"
                color={theme.typography.white}
                sx={{ opacity: 0.7 }}
              >
                {props.title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

TileCard.propTypes = {};

export default TileCard;
