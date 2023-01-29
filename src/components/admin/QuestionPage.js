import React, { useState } from "react";
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { questions, tags } from "../../data";
import AddQuestionDialog from "../UI/dialog/AddQuestionDialog";
import ExamDetails from "../UI/Widgets/ExamDetails";
import TagDialog from "../UI/dialog/TagDialog";

const QuestionPage = (props) => {
  const initialQuestion = {
    questionId: "",
    examDto: "",
    tags: {
      id: "1",
      name: "ENG",
    },
    questionTypeDto: {
      questionTypeId: "0",
      questionTypeName: "",
      questionTypeCode: "",
    },
    answerDtoList: [],
    questionTitle: "",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: false,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: "",
  };
  const fromExam = {
    id: "1",
    examId: "1",
    examDescription:
      "this is test for ssc updasc andd manju akndkl jkdbthis is test for ssc updasc andd manju akndkl jkdbthis is test for ssc updasc andd manju akndkl jkdb",
    examDuration: 60,
    examStartDate: null,
    examEndDate: null,
    examTitle: "Exam 01",
    isNegativeAllowed: true,
    isPaid: true,
    totalMark: 60,
    tags: [
      {
        id: 1,
        name: "SSC",
      },
      {
        id: 2,
        name: "GEO",
      },
    ],
    code: {
      codeId: "1",
      code: "EDU1",
      description: "desc",
    },
    questionCount: 15,
  };
  let { name, id } = useParams();
  const theme = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const [exam, setExam] = useState(fromExam);

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openTagDialog, setOpenTagDialog] = useState(false);

  const handleTagDialog = () => {
    setOpenTagDialog(!openTagDialog);
  };

  const handleDialog = () => {
    setCurrentQuestion(initialQuestion);
    setEdit(false);
    setOpenDialog(!openDialog);
  };

  const handleDelete = (row) => () => {
    setCurrentQuestion(row);
  };

  const handleEdit = (row) => () => {
    setCurrentQuestion(row);
    setEdit(true);
    setOpenDialog(!openDialog);
  };

  const handleView = (row) => () => {
    setCurrentQuestion(row);
    setEdit(false);
    setOpenDialog(!openDialog);
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
      headerName: "Tags",
      flex: 1,
      valueGetter: (params) => `${params.row.tag.name}`,
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
        `${params.row.isNegativeAllowed === true ? "Yes" : "No"}`,
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
          <Tooltip title="View">
            <IconButton sx={{ ml: 1 }} onClick={handleView(row)}>
              <VisibilityIcon color="info" />
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
        <ExamDetails exam = {exam}/>
        {/* Question bar */}
        <Box
          sx={{
            ...theme.shape.box,
            backgroundColor: theme.palette.background.headingBox,
            mt: 2,
            p: 2,
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
                onClick={handleTagDialog}
                startIcon={<AddIcon />}
                size="small"
                sx={{ mr: 1 }}
              >
                Tags
              </Button>
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
        <AddQuestionDialog
          currentQuestion={currentQuestion}
          edit={edit}
          handleDialog={handleDialog}
          openDialog={openDialog}
        />
        {/* Tag Dialog */}
        <TagDialog openTag={openTagDialog} handleTag={handleTagDialog} />
      </Box>
    </>
  );
};

export default QuestionPage;
