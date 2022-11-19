import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { Grid, Box, Paper, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { exams } from "../../data";
import ExamCard from "../UI/card/ExamCard";

export const Exams = (props) => {
  const theme = useTheme();
  //added to filter cards
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["examTitle"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    setIsLoaded(true);
    setItems(exams);
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.examTitle == filterParam) {
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
        <Box>
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
              ></Typography>
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
          <Grid container spacing={1}>
            {search(data).map((exam) => (
              <Grid item key={exam.examId} xs={12} sm={6} md={3} lg={3}>
                <ExamCard exam={exam} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
};
