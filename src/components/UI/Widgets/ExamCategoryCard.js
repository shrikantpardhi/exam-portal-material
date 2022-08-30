import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export const ExamCategoryCard = (props) => {
  const theme = useTheme();
  return (
    <Grid container direction="row" sx={{ margin: 1 }} spacing={1}>
      {props.categories.map((cat) => (
        <Grid item key={cat.title} xs={12} sm={6} md={4} lg={3}>
          <CardActionArea component={Link} to="#">
            <Card
              variant="outlined"
              sx={{
                backgroundColor: theme.palette.background.card,
                width: 250,
                textAlign: "center",
                color: "white",
                fontWeight: 700,
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>{cat.title}</Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Grid item>Total Exam</Grid>
                      <Grid item>200</Grid>
                    </Grid>
                    <Typography></Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};
