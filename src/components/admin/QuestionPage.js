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
  TextField,
  MenuItem,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Formik, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    answerDtoList: [
      {
        answerId: "1",
        questionDto: "",
        answerText: "Answer 1",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "2",
        questionDto: "",
        answerText: "Answer2",
        answerImage: "",
        isCorrect: true,
      },
      {
        answerId: "3",
        questionDto: "",
        answerText: "Answer 3",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "4",
        questionDto: "",
        answerText: "Answer 4",
        answerImage: "",
        isCorrect: false,
      },
    ],
    questionTitle: "What is your name?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: true,
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
    answerDtoList: [
      {
        answerId: "1",
        questionDto: "",
        answerText: "Answer 1",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "2",
        questionDto: "",
        answerText: "Answer2",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "3",
        questionDto: "",
        answerText: "Answer 3",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "4",
        questionDto: "",
        answerText: "Answer 4",
        answerImage: "",
        isCorrect: true,
      },
    ],
    questionTitle: "Your age?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: false,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: 2,
  },
];

const QuestionForm = (props) => {
  const { handleClose } = props;
  const { currentQuestion } = props;
  const { edit } = props;
  const theme = useTheme();
  const [answerError, setAnswerError] = useState(false);
  const [answerCmpError, setAnswerCmpError] = useState(false);

  console.log("edit: "+ edit); 

  return (
    <>
      <Formik
        initialValues={{
          questionId: currentQuestion.questionId || "",
          questionTitle: currentQuestion.questionTitle || "",
          questionDescription: currentQuestion.questionDescription || "",
          questionAnswerDescription:
            currentQuestion.questionAnswerDescription || "",
          subjectDto: currentQuestion.subjectDto || "",
          questionTypeDto: currentQuestion.questionTypeDto || "",
          isNegativeAllowed: currentQuestion.isNegativeAllowed,
          questionImage: currentQuestion.questionImage || "",
          questionAnswerDescriptionImage:
            currentQuestion.questionAnswerDescriptionImage || "",
          questionMark: currentQuestion.questionMark || "",
          answerDtoList: currentQuestion.answerDtoList || "",
        }}
        validationSchema={Yup.object({
          questionTitle: Yup.string().required("Required"),
          questionMark: Yup.number()
            .positive("Must be positive number")
            .integer()
            .required("Required"),
          answerDtoList: Yup.array().of(
            Yup.object().shape({
              answerText: Yup.string().required("Required"),
            })
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values));
          setSubmitting(false);
          values.answerDtoList.forEach((answer) => {
            if (!answer.isCorrect) {
              setAnswerError(true);
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
            <TextField
              fullWidth
              error={Boolean(touched.questionTitle && errors.questionTitle)}
              variant="outlined"
              id="questionTitle-name"
              type="string"
              value={values.questionTitle}
              name="questionTitle"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Title"
              sx={{ m: 1 }}
              InputProps={{
                readOnly: !edit,
              }}
            />
            {touched.questionTitle && errors.questionTitle && (
              <FormHelperText sx={{ m: 1 }} error id="helper-text-title">
                {errors.questionTitle}
              </FormHelperText>
            )}

            <TextField
              fullWidth
              error={Boolean(
                touched.questionDescription && errors.questionDescription
              )}
              variant="outlined"
              id="questionDescription-id"
              type="string"
              value={values.questionDescription}
              name="questionDescription"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Description"
              multiline
              rows={3}
              sx={{ m: 1 }}
              InputProps={{
                readOnly: !edit,
              }}
            />
            {touched.questionDescription && errors.questionDescription && (
              <FormHelperText sx={{ m: 1 }} error id="helper-text-description">
                {errors.questionDescription}
              </FormHelperText>
            )}

            <TextField
              fullWidth
              error={Boolean(
                touched.questionAnswerDescription &&
                  errors.questionAnswerDescription
              )}
              variant="outlined"
              id="questionDescription-id"
              type="string"
              value={values.questionAnswerDescription}
              name="questionAnswerDescription"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Answer Description"
              multiline
              rows={3}
              sx={{ m: 1 }}
              InputProps={{
                readOnly: !edit,
              }}
            />
            {touched.questionAnswerDescription &&
              errors.questionAnswerDescription && (
                <FormHelperText
                  sx={{ m: 1 }}
                  error
                  id="helper-text-description"
                >
                  {errors.questionAnswerDescription}
                </FormHelperText>
              )}

            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              spacing={3}
            >
              <Grid item md={6} sm={6} xl={6}>
                <TextField
                  fullWidth
                  error={Boolean(touched.questionMark && errors.questionMark)}
                  variant="outlined"
                  id="questionMark"
                  type="number"
                  value={values.questionMark}
                  name="questionMark"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Question Mark"
                  inputProps={{}}
                  sx={{ m: 1 }}
                  InputProps={{
                    readOnly: !edit,
                  }}
                />
                {touched.questionMark && errors.questionMark && (
                  <FormHelperText
                    error
                    id="helper-text-questionMark"
                    sx={{ m: 1 }}
                  >
                    {errors.questionMark}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={6} sm={6} xl={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isNegativeAllowed"
                      checked={values.isNegativeAllowed}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      disabled={!edit}
                    />
                  }
                  label="Negative Marking"
                  sx={{ m: 1 }}
                />
              </Grid>
            </Grid>
            <Divider />
            <Box sx={{ m: 1 }}>
              <Typography sx={{ ...theme.typography.h6, textAlign: "center" }}>
                Answers
              </Typography>
            </Box>
            <FieldArray
              name="answerDtoList"
              render={({ insert, remove, push }) => (
                <div>
                  <Typography color="red" sx={{ textAlign: "center" }}>
                    {!values.answerDtoList.some(
                      (answer) => answer.isCorrect === true
                    ) && values.answerDtoList.length !== 0
                      ? "Atleast one answer must be selected"
                      : ""}
                    {new Set(
                      values.answerDtoList.map((answer) => answer.answerText)
                    ).size !== values.answerDtoList.length &&
                    values.answerDtoList.length !== 0
                      ? "Answers must be unique"
                      : ""}
                  </Typography>
                  {values.answerDtoList.length > 0 &&
                    values.answerDtoList.map((answer, index) => (
                      <Grid
                        key={index}
                        container
                        alignItems="center"
                        spacing={1}
                        sx={{ m: 1 }}
                      >
                        <Grid item>
                          <Checkbox
                            id={`answerDtoList.${index}.isCorrect`}
                            name={`answerDtoList.${index}.isCorrect`}
                            checked={answer.isCorrect || false}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                            disabled={!edit}
                          />
                        </Grid>
                        <Grid item md={10} sm={10} xl={10}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id={`answerDtoList.${index}.answerText`}
                            type="string"
                            name={`answerDtoList.${index}.answerText`}
                            value={answer.answerText}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label={`Answer.${index + 1}`}
                            inputProps={{}}
                            InputProps={{
                              readOnly: !edit,
                            }}
                          />
                          <ErrorMessage
                            name={`answerDtoList.${index}.answerText`}
                            component="div"
                            className="field-error"
                          />
                        </Grid>
                        <Grid item>
                          <IconButton onClick={() => remove(index)} disabled={!edit}>
                            <CloseIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                  <Box sx={{ textAlign: "center" }}>
                    <Tooltip title="Add Answer">
                      <IconButton
                        onClick={() =>
                          push({ answerText: "", isCorrect: false })
                        }
                        disabled={values.answerDtoList.length >= 4 || !edit}
                        color="secondary"
                      >
                        <AddIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </div>
              )}
            />
            <Grid
              container
              justifyContent="flex-end"
              sx={{ marginTop: 1 }}
              spacing={2}
            >
              <Grid item>
                <Button variant="text" onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={isSubmitting || !edit}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};
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
  let { name, id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const [exam, setExam] = useState(fromExam);
  const [openCollapse, setOpenCollapse] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
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
          maxWidth={"md"}
          sx={{ zIndex: theme.zIndex.modal }}
          PaperProps={{
            elevation: 5,
          }}
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
          <DialogContent>
            <QuestionForm
              currentQuestion={currentQuestion}
              handleClose={handleDialog}
              edit={edit}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default QuestionPage;
