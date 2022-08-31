import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export const ExamCategoryCard = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2}>
        {props.categories.map((cat) => (
          <Grid item key={cat.title} xs={12} sm={6} md={4} lg={3}>
            <CardActionArea
              component={Link}
              to={{
                pathname: `/category/${cat.title}/${cat.id}`,
                state: `${cat}` ,
              }}
            >
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
                    <Grid item sx={{ p: 1 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
                        {cat.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        spacing={1}
                        sx={{ p: 1 }}
                      >
                        <Grid item>Total Exam</Grid>
                        <Grid item>{cat.totalCount}</Grid>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        spacing={1}
                        sx={{ p: 1 }}
                      >
                        <Grid item>Type</Grid>
                        <Grid item>{cat.premium === 0 ? "Free" : "Paid"}</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
