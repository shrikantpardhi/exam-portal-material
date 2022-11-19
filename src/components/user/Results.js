import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { results } from "../../data";
import { Box, Grid, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ResultCard from "../UI/card/ResultCard";
import HeadTitleSection from "../UI/Widgets/HeadTitleSection";

const Results = (props) => {
  const theme = useTheme();
  //added to filter cards
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["examDto.examTitle"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    setIsLoaded(true);
    setItems(results);
  }, []);

  const data = Object.values(items);

  if (error) {
    return <p> {error.message}, error message </p>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <Box sx={{ m: 3 }}>
        <HeadTitleSection name="View Results" />
        {/* result cards */}
        <Box sx={{ mt: "1rem", mb: "1rem" }}>
          <Grid container spacing={1}>
            {data.map((result) => (
              <Grid item key={result.resultId} xs={12} sm={6} md={3} lg={3}>
                <ResultCard result={result} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
};

export default Results;
