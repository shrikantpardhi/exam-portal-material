import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid, Box} from "@mui/material";
import ExamCard from "./UI/Widgets/ExamCard";

const ExamPage = (props) => {
  let { name, id } = useParams();
  const theme = useTheme();
  const exams = [
    {
      exam_id: 1,
      created: "date",
      updated: "date",
      exam_description: "description",
      exam_duration: 60,
      exam_end_date: "12/12/2022",
      exam_title: "Exam 01",
      is_negative_allowed: 0,
      is_paid: 0,
      total_mark: 100,
      exam_category_id: 1,
      subject_id: 1,
    },
  ];
  return (
    <Box
      sx={{
        m: 3,
        width: "auto",
        height: "auto",
        flexGrow: 1,
      }}
    >
      <Box sx={{ backgroundColor: theme.palette.background.headingBox }}>
        <Grid
          container
          justifyContent="space-between"
          sx={{ p: 1, marginBottom: 3 }}
        >
          <Grid item>
            <Typography sx={{ ...theme.typography.h5 }}>Exam List</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography sx={{ ...theme.typography.h6 }}>
                  Category -
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    ...theme.typography.h5,
                    color: theme.palette.common.orange,
                  }}
                >
                  {name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={1}>
        {exams.map((exam) => (
          <Grid item key={exam.exam_id} xs={12} sm={6} md={4} lg={3}>
            <ExamCard exam={exam}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExamPage;
