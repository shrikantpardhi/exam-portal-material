import React from "react";
import { useTheme } from "@mui/styles";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const ResultCard = (props) => {
  const theme = useTheme();
  return (
    <Link
      to={{
        pathname: `/result/${props.result.examDto.examTitle}/${props.result.resultId}`,
        state: `${props.result}`,
      }}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.background.card,
          textAlign: "center",
          color: "white",
          "&:hover, &.Mui-focusVisible": {
            opacity: 0.8,
          },
        }}
      >
        <CardContent>
          <Grid
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="body2"
                sx={{ m: 1, color: theme.palette.common.white }}
              >
                {props.result.created}
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ m: 1, p: 1, border: "3px solid currentColor" }}>
                <Typography
                  variant="h5"
                  sx={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    color: theme.palette.common.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  {props.result.examDto.examTitle}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ m: 1, mb: 0, pb: 0, color: theme.palette.common.white }}
              >
                Score : {props.result.obtainedMark}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ResultCard;
