import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

const ExamCard = props => {
    const item = props.item;
    const theme = useTheme();
  return (
    <Grid item key={item.title} xs={12} sm={6} md={4} lg={3}>
      <CardActionArea
        component={Link}
        to={{
          pathname: `/category/${item.title}/${item.id}`,
          state: `${item}`,
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
                  {item.title}
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
                  <Grid item>{item.totalCount}</Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                  sx={{ p: 1 }}
                >
                  <Grid item>Type</Grid>
                  <Grid item>{item.premium === 0 ? "Free" : "Paid"}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
export default ExamCard;