import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Swich User State" } };

const categories = [
  {
    examCategoryId: 1,
    examCategoryName: "SSC",
    updatedBy: "",
    examCount: "",
    isPremium: "",
  },
  {
    examCategoryId: 2,
    examCategoryName: "UPSC",
    updatedBy: "",
    examCount: "",
    isPremium: "",
  },
  {
    examCategoryId: 3,
    examCategoryName: "RRB",
    updatedBy: "",
    examCount: "",
    isPremium: "",
  },
];

const subjects = [
  {
    subjectId: 1,
    title: "ENGLISH",
    description: "",
    updatedBy: "",
    created: "",
    updated: "",
  },
  {
    subjectId: 2,
    title: "MATH",
    description: "",
    updatedBy: "",
    created: "",
    updated: "",
  },
  {
    subjectId: 3,
    title: "GEO",
    description: "",
    updatedBy: "",
    created: "",
    updated: "",
  },
];

const exams = [
  {
    id: "1",
    examId: "1",
    created: null,
    updated: null,
    examDescription: null,
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
  },
  {
    id: "2",
    examId: "2",
    created: null,
    updated: null,
    examDescription: null,
    examDuration: 60,
    examEndDate: null,
    examTitle: "UPSC",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: null,
    examCategoryDto: {
      examCategoryId: 2,
      examCategoryName: "UPSC",
      updatedBy: "",
      examCount: "",
      isPremium: "",
    },
    subjectDto: {
      subjectId: 2,
      title: "GEO",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionCount: "",
  },
];

const ExamsPage = (props) => {
  const initialExam = {
    examId: "",
    created: null,
    updated: null,
    examDescription: null,
    examDuration: null,
    examEndDate: null,
    examTitle: "",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: null,
    examCategoryDto: {
      examCategoryId: 0,
      examCategoryName: "",
      updatedBy: "",
      examCount: "",
      isPremium: "",
    },
    subjectDto: {
      subjectId: 0,
      title: "",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionCount: "",
  };
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [currentExam, setCurrentExam] = useState(initialExam);
  const [examRows, setExamRows] = useState(exams);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = (row) => () => {
    console.log(row);
  };

  const handleEdit = (row) => () => {
    console.log(row);
    setCurrentExam(row);
    setOpenDialog(true);
  };

  const columns = [
    { field: "examId", headerName: "ID", hide: true, hideable: false },
    {
      field: "examTitle",
      headerName: "Name",
      flex: 1,
      hideable: false,
    },
    {
      field: "examDuration",
      headerName: "Duration",
      type: "number",
      flex: 1,
    },
    {
      field: "examCategoryName",
      headerName: "Category",
      flex: 1,
      valueGetter: (params) =>
        `${params.row.examCategoryDto.examCategoryName || ""}`,
    },
    {
      field: "title",
      headerName: "Subject",
      flex: 1,
      valueGetter: (params) => `${params.row.subjectDto.title || ""}`,
    },
    {
      field: "isPaid",
      headerName: "Type",
      flex: 1,
      valueGetter: (params) => `${params.row.isPaid !== 0 ? "Paid" : "Free"}`,
    },

    {
      field: "created",
      headerName: "Create At",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      renderCell: ({ row }) => {
        return [
          <Tooltip title="View">
            <IconButton
              sx={{ ml: 1 }}
              component={Link}
              to={{
                pathname: `/exam/${row.examTitle}/${row.examId}`,
                state: { fromExamsPage: true },
              }}
            >
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
              <Button
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<AddIcon />}
                size="small"
              >
                Add Exam
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={examRows}
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
      </Box>
      {/* Exam Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        fullWidth
        sx={{ zIndex: theme.zIndex.modal }}
      >
        <DialogTitle>
          <Typography
            sx={{
              ...theme.typography.h5,
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            {currentExam.examTitle.length !== 0 ? "Edit Exam" : "Add Exam"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              examId: currentExam.examId.length !== 0 ? currentExam.examId : 0,
              examTitle:
                currentExam.examTitle.length !== 0 ? currentExam.examTitle : "",
              examDescription: "",
              examDuration:
                currentExam.examDuration !== 0 ? currentExam.examDuration : "",
              totalMark:
                currentExam.totalMark !== 0 ? currentExam.totalMark : "",
              exam_category_id:
                currentExam.examCategoryDto.examCategoryId !== 0
                  ? currentExam.examCategoryDto.examCategoryId
                  : 0,
              subject_id:
                currentExam.subjectDto.subjectId !== 0
                  ? currentExam.subjectDto.subjectId
                  : 0,
              examEndDate: "",
              isNegativeAllowed:
                currentExam.isNegativeAllowed !== 0
                  ? currentExam.isNegativeAllowed
                  : 0,
              isPaid: currentExam.isPaid !== 0 ? currentExam.isPaid : 0,
            }}
            validationSchema={Yup.object({
              examTitle: Yup.string()
                .matches(
                  /^[A-Za-z]{3,15}([\w ]{1}[0-9]{2})?$/,
                  "Name must minimun atleast 3 character long and can be followed by 2 digit number. (ex.EXAM 12)"
                )
                .required("Required"),
              examDescription: Yup.string()
                .max(100, "Must be 100 characters or less")
                .required("Required"),
              examDuration: Yup.number()
                .positive("Must be positive number")
                .integer()
                .required("Required"),
              totalMark: Yup.number()
                .positive("Must be positive number")
                .integer()
                .required("Required"),
              examEndDate: Yup.string().required("Required"),
              exam_category_id: Yup.number()
                .positive("Please select exam category")
                .integer()
                .required("Required"),
              subject_id: Yup.number()
                .positive("Please select subject")
                .integer()
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(JSON.stringify(values));
              //save data here
              //   setCategories([
              //     ...categories,
              //     { id: "6", title: values.category },
              //   ]);
              handleClose(false);
              //   setTimeout(() => {
              //     setSubmitting(false);
              //     handleClose();
              //   }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
                <TextField
                  fullWidth
                  error={Boolean(touched.examTitle && errors.examTitle)}
                  variant="outlined"
                  id="examTitle-name"
                  type="string"
                  value={values.examTitle}
                  name="examTitle"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Title"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.examTitle && errors.examTitle && (
                  <FormHelperText sx={{ m: 1 }} error id="helper-text-title">
                    {errors.examTitle}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(
                    touched.examDescription && errors.examDescription
                  )}
                  variant="outlined"
                  id="examDescription_id"
                  type="string"
                  multiline
                  rows={3}
                  value={values.examDescription}
                  name="examDescription"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Description"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.examDescription && errors.examDescription && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-description"
                  >
                    {errors.examDescription}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.examDuration && errors.examDuration)}
                  variant="outlined"
                  id="examDuration"
                  type="number"
                  value={values.examDuration}
                  name="examDuration"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Duration"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.examDuration && errors.examDuration && (
                  <FormHelperText sx={{ m: 1 }} error id="helper-text-duration">
                    {errors.examDuration}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.totalMark && errors.totalMark)}
                  variant="outlined"
                  id="totalMark"
                  type="number"
                  value={values.totalMark}
                  name="totalMark"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Total Mark"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.totalMark && errors.totalMark && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-total-mark"
                  >
                    {errors.totalMark}
                  </FormHelperText>
                )}

                <Box
                  sx={{ zIndex: theme.zIndex.modal + 3, m: 1, width: "100%" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      fullWidth
                      label="End Date"
                      name="examEndDate"
                      value={values.examEndDate}
                      onChange={(date) => setFieldValue("examEndDate", date)}
                      renderInput={(params) => <TextField {...params} />}
                      PopoverProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center",
                        },
                        transformOrigin: {
                          vertical: "top",
                          horizontal: "center",
                        },
                      }}
                      onBlur={handleBlur}
                    />
                  </LocalizationProvider>
                </Box>

                <TextField
                  fullWidth
                  error={Boolean(
                    touched.isNegativeAllowed && errors.isNegativeAllowed
                  )}
                  variant="outlined"
                  id="isNegativeAllowed-id"
                  type="string"
                  value={values.isNegativeAllowed}
                  name="isNegativeAllowed"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Negative Allowed"
                  inputProps={{}}
                  select
                  sx={{ m: 1 }}
                >
                  <MenuItem sx={{ m: 1 }} key="0" value="0">
                    No
                  </MenuItem>
                  <MenuItem sx={{ m: 1 }} key="1" value="1">
                    Yes
                  </MenuItem>
                </TextField>
                {touched.isNegativeAllowed && errors.isNegativeAllowed && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-negative-allowed"
                  >
                    {errors.isNegativeAllowed}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(
                    touched.exam_category_id && errors.exam_category_id
                  )}
                  variant="outlined"
                  id="exam_category_id-id"
                  type="string"
                  value={values.exam_category_id}
                  name="exam_category_id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Exam Category"
                  inputProps={{}}
                  select
                  sx={{ m: 1 }}
                >
                  <MenuItem sx={{ m: 1 }} key="0" value="0">
                    Select
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem
                      sx={{ m: 1 }}
                      key={category.examCategoryId}
                      value={category.examCategoryId}
                    >
                      {category.examCategoryName}
                    </MenuItem>
                  ))}
                </TextField>
                {touched.exam_category_id && errors.exam_category_id && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-exam-category-id"
                  >
                    {errors.exam_category_id}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.subject_id && errors.subject_id)}
                  variant="outlined"
                  id="subject-id"
                  type="string"
                  value={values.subject_id}
                  name="subject_id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Subject"
                  inputProps={{}}
                  select
                  sx={{ m: 1 }}
                >
                  <MenuItem sx={{ m: 1 }} key="0" value="0">
                    Select
                  </MenuItem>
                  {subjects.map((sub) => (
                    <MenuItem
                      sx={{ m: 1 }}
                      key={sub.subjectId}
                      value={sub.subjectId}
                    >
                      {sub.title}
                    </MenuItem>
                  ))}
                </TextField>
                {touched.subject_id && errors.subject_id && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-subject-id"
                  >
                    {errors.subject_id}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.isPaid && errors.isPaid)}
                  variant="outlined"
                  id="is-paid-id"
                  type="string"
                  value={values.isPaid}
                  name="isPaid"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Premium"
                  inputProps={{}}
                  select
                  sx={{ m: 1 }}
                >
                  <MenuItem sx={{ m: 1 }} key="0" value="0">
                    Free
                  </MenuItem>
                  <MenuItem sx={{ m: 1 }} key="1" value="1">
                    Premium
                  </MenuItem>
                </TextField>
                {touched.isPaid && errors.isPaid && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-is-paid-id"
                  >
                    {errors.isPaid}
                  </FormHelperText>
                )}

                <Grid
                  container
                  justifyContent="space-between"
                  sx={{ marginTop: 1 }}
                >
                  <Grid item>
                    <Button variant="text" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                      disableElevation
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExamsPage;
