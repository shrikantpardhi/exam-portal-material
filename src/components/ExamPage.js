import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import ExamCard from "./UI/card/ExamCard";
import { exams } from "../data";
import HeadTitleSection from "./UI/Widgets/HeadTitleSection";

const ExamPage = (props) => {
  let { name, id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        m: 3,
        width: "auto",
        height: "auto",
        flexGrow: 1,
      }}
    >
      <HeadTitleSection name={name} />

      <Grid container spacing={1}>
        {exams.map((exam) => (
          <Grid item key={exam.examId} xs={12} sm={6} md={4} lg={3}>
            <ExamCard exam={exam} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExamPage;
