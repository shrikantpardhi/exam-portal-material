import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Button, Divider } from "@mui/material";
import HeadTitleSection from "../UI/Widgets/HeadTitleSection";
import { results } from "../../data";

const CardRow = (props) => {
  return (
    <Grid item>
      <Grid container justifyContent="space-between" spacing={1} sx={{ p: 1 }}>
        <Grid item>
          <Typography sx={{ fontSize: "0.75rem" }}>{props.name} </Typography>
        </Grid>
        <Grid item>
          <Typography variant={props.variant} color={props.color}>
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ResultHeadSection = (props) => {
  const theme = useTheme();
  const { result } = props;
  return (
    <Grid container direction="row" justifyContent="space-between" spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.lightGrey,
            minHeight: 155,
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" color="secondary">
                {result.examDto.examTitle}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {result.examDto.examDescription}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.lightGrey,
          }}
        >
          <Grid container direction="column">
            <CardRow
              name="Category"
              variant="body1"
              value={result.examDto.examCategoryDto.examCategoryName}
            />
            <CardRow
              name="Subject"
              variant="body1"
              value={result.examDto.subjectDto.title}
            />
            <CardRow
              name="Obtained Mark"
              variant="body1"
              value={result.obtainedMark}
            />
            <CardRow
              name="Negative Mark"
              variant="body2"
              value={result.negativeMark}
            />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.lightGrey,
          }}
        >
          <Grid container direction="column">
            <CardRow name="Start Time" variant="body1" value={result.startAt} />
            <CardRow name="End Time" variant="body1" value={result.EndAt} />
            <CardRow
              name="Duration"
              variant="body1"
              value={result.totalDuration}
            />
            <CardRow name="Exam Date" variant="body1" value={result.created} />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.lightGrey,
          }}
        >
          <Grid container direction="column">
            <CardRow
              name="Answered Question"
              variant="body1"
              value={result.answeredQuestion}
            />
            <CardRow
              name="Correct Answer"
              variant="body1"
              value={result.correctAnswer}
            />
            <CardRow
              name="Incorrect Answer"
              variant="body1"
              value={result.IncorrectAnswer}
            />
            <CardRow
              name="Total Question"
              variant="body1"
              value={result.examDto.questionCount}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const ResultQuestionAnswerSection = (props) => {
  const theme = useTheme();
  return (
    <Grid container direction="column" spacing={1} sx={{ p: 1 }}>
      <Grid item>
        <Box
          sx={{ p: 1, border: `2px solid ${theme.palette.background.body}` }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={1}
          >
            <Grid item sx={12} sm={12} md={9} lg={10}>
              <Typography variant="subtitle2">
                <span>Q. </span>
                Question Title
              </Typography>
            </Grid>
            <Grid item sx={12} sm={12} md={3} lg={2}>
              <Box
                sx={{
                  backgroundColor: theme.palette.background.green,
                  justifyContent: "center",
                }}
              >
                <Typography
                  color={theme.typography.color.white}
                  sx={{ p: 1, fontWeight: "600", fontSize: "1.25rem" }}
                >
                  <span>-&nbsp;0.33</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>1</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={1}>
          <Grid item sx={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                border: `2px solid ${theme.palette.background.body}`,
              }}
            >
              <Typography variant="body2" sx={{ p: 1 }}>
                Correct Answer
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                border: `2px solid ${theme.palette.background.body}`,
              }}
            >
              <Typography variant="body2" sx={{ p: 1 }}>
                Selected Answer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Box sx={{ border: `2px solid ${theme.palette.background.body}` }}>
          <Typography variant="body2" sx={{ p: 1 }}>
            This is answer description.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const ResultBodySection = (props) => {
  const theme = useTheme();
  const { result } = props;
  return (
    <Box
      sx={{
        mt: 1,
        mb: 4,
        p: 1,
        background: theme.palette.background.body,
      }}
    >
      <Grid container direction="column" spacing={1} sx={{ p: 1 }}>
        {result.resultJsonDataList.map((item) => {
          return (
            <Box
              sx={{
                m: 0.5,
                backgroundColor: theme.palette.background.lightGrey,
                /*border: `4px solid ${theme.palette.background.lightGrey}` */
              }}
            >
              <Grid item key={item.seqId}>
                <ResultQuestionAnswerSection item={item} />
              </Grid>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

const Result = (props) => {
  let { name, id } = useParams();
  const theme = useTheme();
  const [result, setResult] = useState(results[0]);

  return (
    <Box sx={{ m: 3 }}>
      <HeadTitleSection name={`Result : ${name}`} />
      {/* Result head details */}
      <ResultHeadSection result={result} />

      <Box
        sx={{
          ...theme.shape.box,
          mt: 1,
          mb: 1,
          background: theme.palette.background.headingBox,
        }}
      >
        <Typography
          variant="subtitle2"
          align="center"
          color="primary"
          sx={{ p: 1 }}
        >
          Result Details
        </Typography>
      </Box>

      {/* result body section */}
      <ResultBodySection result={result} />
    </Box>
  );
};
export default Result;
