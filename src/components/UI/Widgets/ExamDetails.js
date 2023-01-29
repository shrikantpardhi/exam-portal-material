import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const DetailRow = (props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      //   flex-wrap
      sx={{ pt: 1, pl: 5, pr: 5 }}
      justifyContent="space-between"
    >
      <Grid item>
        <Typography
          sx={{
            ...theme.typography.rowData,
            fontWeight: 500,
            fontSize: "0.9rem",
          }}
        >
          {props.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            ...theme.typography.rowData,
            fontWeight: 400,
            fontSize: "0.75rem",
          }}
        >
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
};

const ExamDetails = (props) => {
  const theme = useTheme();
  const [openCollapse, setOpenCollapse] = React.useState(true);
  const { exam } = props;
  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };
  return (
    <Box>
      <Box
        sx={{
          ...theme.shape.box,
          backgroundColor: theme.palette.background.headingBox,
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          sx={{ p: 1, marginBottom: 1 }}
        >
          <Grid item>
            <Grid container>
              {/* <Grid item>
                  <IconButton onClick={handleClickCollapse} size="small">
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Grid> */}
              <Grid item>
                <Typography sx={{ ...theme.typography.h5 }}>Exam</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {/* <Button variant="text" onClick={() => navigate(-1)} size="small">
                Back
              </Button> */}
            <IconButton onClick={handleClickCollapse} size="small">
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <Grid container spacing={6}>
          {/* Exam Details */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                ...theme.shape.detailBox,
                backgroundColor: theme.palette.background.detailBox,
              }}
            >
              <Typography
                sx={{
                  ...theme.typography.h6,
                  color: theme.typography.color.white,
                  textAlign: "center",
                }}
              >
                Exam Details
              </Typography>
              <Divider color="#ffffff" />
              <DetailRow name="Title" value={exam.examTitle} />
              <DetailRow name="Description" value={exam.examDescription} />
              <DetailRow name="Duration" value={`${exam.examDuration} Mins`} />
              <DetailRow name="Total Mark" value={exam.totalMark} />
              <DetailRow name="Start Date" value={exam.examStartDate} />
              <DetailRow name="End Date" value={exam.examEndDate} />
            </Box>
          </Grid>
          {/* Count Details */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                ...theme.shape.detailBox,
                backgroundColor: theme.palette.background.detailBox,
              }}
            >
              <Typography
                sx={{
                  ...theme.typography.h6,
                  color: theme.typography.color.white,
                  textAlign: "center",
                }}
              >
                Extras
              </Typography>
              <Divider color="#ffffff" />
              <DetailRow
                name="Tags"
                value={exam.tags.map((option) => {
                  return option.name + " ";
                })}
              />
              <DetailRow name="Educator Code" value={exam.code.code} />
              <DetailRow name="Questions" value="55" />
              <DetailRow
                name="Negative Mark"
                value={exam.isNegativeAllowed === false ? "No" : "Yes"}
              />
              <DetailRow
                name="Type"
                value={exam.isPaid === false ? "Free" : "Paid"}
              />
              <DetailRow name="Exams Given By" value="55" />
              <DetailRow name="Taken by Users" value="40" />
            </Box>
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

ExamDetails.propTypes = {};

export default ExamDetails;
