import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { Grid, Box, Paper, InputBase, Typography } from "@mui/material";
import { categories } from "../../../data";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import useRandomColor from "../../util/useRandomColor";
import { ExamCategoryCard } from "../card/ExamCategoryCard";

export const ExamCategory = () => {
  const theme = useTheme();
  //added to filter cards
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "premium"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const { color, generateColor } = useRandomColor();

  useEffect(() => {
    setIsLoaded(true);
    setItems(categories);
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.title == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return <p> {error.message}, error message </p>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <Box sx={{ m: 3 }}>
        <Box sx={{ backgroundColor: theme.palette.background.lightGrey }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 1 }}
            spacing={1}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.common.blue,
                  fontWeight: 600,
                }}
              >
                Exam Categories
              </Typography>
            </Grid>
            <Grid item>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  heigth: 60,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  name="search"
                  id="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        {/* exam cards */}
        <Box sx={{ mt: "1rem", mb: "1rem" }}>
          <Grid container spacing={2}>
            {search(data).map((item) => (
              <ExamCategoryCard item={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
};
