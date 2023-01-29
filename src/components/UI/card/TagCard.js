import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/styles";

export const TagCard = (props) => {
  const item = props.item;
  const theme = useTheme();
  return (
    <Grid item key={item.title} xs={12} sm={6} md={4} lg={3}>
      <CardActionArea
        onClick={(event) => {
          props.setCurrent(item);
          props.handleClickOpen();
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
                  <Grid item>{item.premium === false ? "Free" : "Paid"}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
