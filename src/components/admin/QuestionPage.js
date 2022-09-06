import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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

const questions = [
  {
    id: "1",
    questionId: "1",
    examDto: "",
    subjectDto: {
      subjectId: 1,
      title: "ENGLISH",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionTypeDto: {
      questionTypeId: 1,
      questionTypeName: "Multiple",
      questionTypeCode: "M",
    },
    questionTitle: "What is your name?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: 0,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: 1,
  },
  {
    id: "2",
    questionId: "2",
    examDto: "",
    subjectDto: {
      subjectId: 2,
      title: "MATH",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionTypeDto: {
      questionTypeId: 1,
      questionTypeName: "Single",
      questionTypeCode: "S",
    },
    questionTitle: "Your age?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: 1,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: 2,
  },
];

const QuestionPage = (props) => {
  const initialQuestion = {
    questionId: "",
    examDto: "",
    subjectDto: {
      subjectId: 0,
      title: "",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionTypeDto: {
      questionTypeId: "0",
      questionTypeName: "",
      questionTypeCode: "",
    },
    questionTitle: "",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: "",
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: "",
  };
  let { name, id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [loading, setLoading] = useState(false);

  const fromExam = {
    id: "1",
    examId: "1",
    created: null,
    updated: null,
    examDescription:
      "this is test for ssc updasc andd manju akndkl jkdbthis is test for ssc updasc andd manju akndkl jkdbthis is test for ssc updasc andd manju akndkl jkdb",
    examDuration: 60,
    examEndDate: null,
    examTitle: "Exam 01",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: null,
    examCategoryDto: {
      examCategoryId: 1,
      examCategoryName: "SSC",
      updatedBy: "",
      examCount: "",
      isPremium: "",
    },
    subjectDto: {
      subjectId: 1,
      title: "ENG",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionCount: "",
  };

  const [exam, setExam] = useState(fromExam);
  const [openCollapse, setOpenCollapse] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAnswerDialog, setOpenAnswerDialog] = React.useState(false);

  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleAnswerDialog = () => {
    setOpenAnswerDialog(!openAnswerDialog);
  };


  const handleAddQuestionEvent = (row) => () => {
    setCurrentQuestion(row);
    setOpenAnswerDialog(!openAnswerDialog);
  };

  const handleDelete = (row) => () => {
    console.log(row);
  };

  const handleEdit = (row) => () => {
    console.log(row);
  };

  const columns = [
    { field: "questionId", headerName: "ID", hide: true, hideable: false },
    {
      field: "questionTitle",
      headerName: "Title",
      flex: 1,
      hideable: false,
    },
    {
      field: "title",
      headerName: "Subject",
      flex: 1,
      valueGetter: (params) => `${params.row.subjectDto.title || ""}`,
    },
    {
      field: "questionMark",
      headerName: "Mark",
      flex: 1,
    },
    {
      field: "isNegativeAllowed",
      headerName: "Negative",
      flex: 1,
      valueGetter: (params) =>
        `${params.row.isNegativeAllowed !== 0 ? "Yes" : "No"}`,
    },
    {
      field: "questionTypeName",
      headerName: "Question Type",
      flex: 1,
      valueGetter: (params) => `${params.row.questionTypeDto.questionTypeName}`,
    },

    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      renderCell: ({ row }) => {
        return [
          //   <Tooltip title="View">
          //     <IconButton
          //       sx={{ ml: 1 }}
          //       component={Link}
          //       to={{
          //         pathname: `/exam/${row.examTitle}/${row.examId}`,
          //         state: { fromExamsPage: true },
          //       }}
          //     >
          //       <VisibilityIcon color="info" />
          //     </IconButton>
          //   </Tooltip>,
          <Tooltip title="Add Answers">
            <IconButton sx={{ ml: 1 }} onClick={
                handleAddQuestionEvent(row)
            }>
              <AddIcon color="info" />
            </IconButton>
          </Tooltip>,
          <Tooltip title="Edit">
            <IconButton sx={{ ml: 1 }} onClick={handleEdit(row)}>
              <EditIcon color="warning" />
            </IconButton>
          </Tooltip>,
          <Tooltip title="Add Delete">
            <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Tooltip>,
        ];
      },
      flex: 1,
    },
  ];
  return (
    <>
      <Box
        sx={{
          m: 3,
          width: "auto",
          height: "auto",
        }}
      >
        {/* top bar */}
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
                <Grid item>
                  <IconButton onClick={handleClickCollapse} size="small">
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...theme.typography.h5 }}>Exam</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="text" onClick={() => navigate(-1)} size="small">
                Back
              </Button>
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
                <DetailRow name="Description" value={exam.examDescription} />
                <DetailRow
                  name="Category"
                  value={exam.examCategoryDto.examCategoryName}
                />
                <DetailRow name="Subject" value={exam.subjectDto.subjectId} />
                <DetailRow name="Duration" value={exam.examDuration} />
                <DetailRow name="Total Mark" value={exam.totalMark} />
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
                <DetailRow name="Questions" value="55" />
                <DetailRow
                  name="Negative Mark"
                  value={exam.isNegativeAllowed === 0 ? "No" : "Yes"}
                />
                <DetailRow
                  name="Type"
                  value={exam.isPaid === 0 ? "Free" : "Paid"}
                />
                <DetailRow name="N*time hits" value="55" />
                <DetailRow name="Taken by Users" value="40" />
              </Box>
            </Grid>
          </Grid>
        </Collapse>
        {/* Question bar */}
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.headingBox,
            mt: 2,
            p: 1,
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ ...theme.typography.h5 }}>
                Question Section
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleDialog}
                startIcon={<AddIcon />}
                size="small"
              >
                Add Question
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Question Table */}
        <Box
          sx={{
            ...theme.shape.box,
            mt: 2,
            p: 1,
            height: 400,
          }}
        >
          <DataGrid
            rows={questions}
            columns={columns}
            pageSize={5}
            disableColumnSelector
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              toolbar: { showQuickFilter: true },
            }}
            loading={loading}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>

        {/* Exam Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleDialog}
          fullWidth
          sx={{ zIndex: theme.zIndex.modal + 2 }}
        >
          <DialogTitle>
            <Typography
              sx={{
                ...theme.typography.h5,
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              {currentQuestion.questionTitle.length !== 0
                ? "Edit Question"
                : "Add Question"}
            </Typography>
          </DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>

        {/* Answer Dialog */}
        <Dialog
          open={openAnswerDialog}
          onClose={handleAnswerDialog}
          fullWidth
          sx={{ zIndex: theme.zIndex.modal + 2 }}
        >
          <DialogTitle>
            <Typography
              sx={{
                ...theme.typography.h5,
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Answers
            </Typography>
          </DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default QuestionPage;
