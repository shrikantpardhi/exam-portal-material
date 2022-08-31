import React, { useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, MenuItem, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Formik } from "formik";
const label = { inputProps: { "aria-label": "Swich User State" } };

const categories = [
  { id: 1, title: "SSC", premium: 0, totalCount: 15 },
  { id: 2, title: "UPSC", premium: 0, totalCount: 5 },
  { id: 3, title: "RBI", premium: 0, totalCount: 20 },
  { id: 4, title: "RRB", premium: 0, totalCount: 25 },
  { id: 5, title: "NEET", premium: 1, totalCount: 10 },
];

const subjects = [
  { id: 1, title: "SSC", premium: 0, totalCount: 15 },
  { id: 2, title: "UPSC", premium: 0, totalCount: 5 },
  { id: 3, title: "RBI", premium: 0, totalCount: 20 },
  { id: 4, title: "RRB", premium: 0, totalCount: 25 },
  { id: 5, title: "NEET", premium: 1, totalCount: 10 },
];
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
const ExamsPage = (props) => {
    const initialExam = {
      exam_id: 0,
      created: null,
      updated: null,
      exam_description: null,
      exam_duration: null,
      exam_end_date: null,
      exam_title: "",
      is_negative_allowed: 0,
      is_paid: 0,
      total_mark: null,
      exam_category_id: null,
      subject_id: null,
    };
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [currentExam, setCurrentExam] = useState(initialExam);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

   const handleClose = () => {
     setOpenDialog(false);
   };

  const handleDelete = (row) => () => {
    console.log(row);
  };

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "exam_title",
      headerName: "Name",
      flex: 1,
      hideable: false,
    },
    {
      field: "exam_duration",
      headerName: "Duration",
      type: "number",
      flex: 1,
    },
    {
      field: "exam_category_name",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "subject_title",
      headerName: "Subject",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Create At",
      flex: 1,
    },
    {
      field: "is_paid",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      renderCell: ({ row }) => {
        return [
          // <Switch {...label} checked onChange={handleSwitchState(row)} />,
          <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
            <DeleteIcon />
          </IconButton>,
        ];
      },
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      exam_title: "Exam1",
      exam_duration: 60,
      exam_category_name: "SSC",
      subject_title: "ENGLISH",
      created: new Date("2011-07-14 11:23:00"),
      is_paid: "Free",
    },
    {
      id: 2,
      exam_title: "Exam2",
      exam_duration: 60,
      exam_category_name: "RRB",
      subject_title: "GEOGRAPHY",
      created: new Date("2022-07-14 11:23:00"),
      is_paid: "Free",
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
            rows={rows}
            columns={columns}
            pageSize={5}
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

      <Dialog open={openDialog} onClose={handleClose} fullWidth>
        <DialogTitle>
          <Typography
            sx={{
              ...theme.typography.h5,
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            {currentExam.exam_title.length !== 0 ? "Edit Exam" : "Add Exam"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ category: "", premium: "0" }}
            validate={(values) => {
              const errors = {};
              if (!values.category) {
                errors.category = "Required";
              } else if (
                !/^[A-Za-z]{3,15}([\w ]{1}[0-9]{2})?$/i.test(values.category)
              ) {
                errors.category =
                  "Name must minimun atleast 3 character long (can be added number 2 character long). ex. EXAM 12";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
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
              /* and other goodies */
            }) => (
              <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
                <TextField
                  fullWidth
                  error={Boolean(touched.category && errors.category)}
                  variant="outlined"
                  id="category-name"
                  type="category"
                  value={values.category}
                  name="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Category Name"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.category && errors.category && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-category-name"
                  >
                    {errors.category}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.premium && errors.premium)}
                  variant="outlined"
                  id="premium-id"
                  type="premium"
                  value={values.premium}
                  name="premium"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Select Premium"
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
                {touched.premium && errors.premium && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-premium-id"
                  >
                    {errors.premium}
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
