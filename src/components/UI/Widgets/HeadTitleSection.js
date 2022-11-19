import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Paper, InputBase, Typography, Button } from "@mui/material";

const HeadTitleSection = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.headingBox }}>
      <Grid container justifyContent="space-between" sx={{ p: 1, mb: 2 }}>
        <Grid item>
          <Typography sx={{ ...theme.typography.h5 }}>{props.name}</Typography>
        </Grid>
        <Grid item>
          <Button variant="text" onClick={() => navigate(-1)} size="small">
            Back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadTitleSection;
