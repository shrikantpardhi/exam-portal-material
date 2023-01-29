import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  Box,
  Autocomplete,
  Button,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Checkbox from "@mui/material/Checkbox";

const ExamForm = (props) => {
  const theme = useTheme();
  const { currentExam, tags, educatorCodes, handleClose } = props;

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <Formik
      initialValues={{
        examId: currentExam.examId.length !== 0 ? currentExam.examId : 0,
        examTitle:
          currentExam.examTitle.length !== 0 ? currentExam.examTitle : "",
        examDescription: "",
        examDuration:
          currentExam.examDuration !== 0 ? currentExam.examDuration : "",
        totalMark: currentExam.totalMark !== 0 ? currentExam.totalMark : "",
        tagList: [],
        code: {},
        examStartDate:
          currentExam.examStartDate.length !== 0
            ? currentExam.examStartDate
            : new Date(),
        examEndDate:
          currentExam.examEndDate.length !== 0
            ? currentExam.examEndDate
            : new Date().addDays(30),
        totalQuestions: 0,
        isNegativeAllowed: false,
        isPaid: false,
        status: false,
      }}
      validationSchema={Yup.object({
        examTitle: Yup.string()
          .matches(
            /^[A-Za-z]{3,15}([\w ]{1}[0-9]{2})?$/,
            "Name must minimun atleast 3 character long and can be followed by 2 digit number. (ex.EXAM 12)"
          )
          .required("Required"),
        examDescription: Yup.string().max(
          100,
          "Must be 100 characters or less"
        ),
        examDuration: Yup.number()
          .positive("Must be positive number")
          .integer()
          .required("Required"),
        totalMark: Yup.number()
          .positive("Must be positive number")
          .integer()
          .required("Required"),
        examEndDate: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
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
            error={Boolean(touched.examDescription && errors.examDescription)}
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
            <FormHelperText sx={{ m: 1 }} error id="helper-text-description">
              {errors.examDescription}
            </FormHelperText>
          )}

          <Grid container direction="row" justifyContent="space-between">
            <Grid item sm>
              <TextField
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
            </Grid>
            <Grid item sm>
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
                <FormHelperText sx={{ m: 1 }} error id="helper-text-total-mark">
                  {errors.totalMark}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          <Autocomplete
            multiple
            id="tags-id"
            name="tagList"
            options={tags}
            // isOptionEqualToValue={(option, value) => option === value}
            onBlur={handleBlur}
            // onChange={(e, value) => setFieldValue("tagList", value)}
            getOptionLabel={(option) => option.name}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Tags" placeholder="Tag" />
            )}
            sx={{ m: 1 }}
          />

          <Grid container direction="row" justifyContent="space-between">
            <Grid item sm>
              <Box sx={{ zIndex: theme.zIndex.modal + 3, m: 1, width: "100%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    id="startdate"
                    label="Start Date"
                    name="examStartDate"
                    value={values.examStartDate}
                    onChange={(date) => setFieldValue("examStartDate", date)}
                    minDate={new Date()}
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
            </Grid>
            <Grid item sm>
              <Box sx={{ zIndex: theme.zIndex.modal + 3, m: 1, width: "100%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    id="enddate"
                    label="End Date"
                    name="examEndDate"
                    value={values.examEndDate}
                    onChange={(date) => setFieldValue("examEndDate", date)}
                    minDate={new Date().addDays(1)}
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
            </Grid>
          </Grid>

          <Autocomplete
            id="educator-code-id"
            name="code"
            options={educatorCodes}
            onBlur={handleBlur}
            getOptionLabel={(option) => option.code}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Educator Code" placeholder="Code" />
            )}
            sx={{ m: 1 }}
          />

          <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
            <Grid item>
              <FormControlLabel
                id="isPaid"
                name="isPaid"
                value={values.isPaid}
                control={<Checkbox />}
                label="Paid"
                labelPlacement="start"
              />
              {touched.isPaid && errors.isPaid && (
                <FormHelperText sx={{ m: 1 }} error id="helper-text-is-paid-id">
                  {errors.isPaid}
                </FormHelperText>
              )}
            </Grid>
            <Grid item>
              <FormControlLabel
                id="isNegativeAllowed"
                name="isNegativeAllowed"
                value={values.isNegativeAllowed}
                control={<Checkbox />}
                label="Negative Mark"
                labelPlacement="start"
              />
              {touched.isNegativeAllowed && errors.isNegativeAllowed && (
                <FormHelperText
                  sx={{ m: 1 }}
                  error
                  id="helper-text-is-isNegativeAllowed"
                >
                  {errors.isNegativeAllowed}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="space-between">
            <Grid item sm></Grid>
            <Grid item sm></Grid>
          </Grid>

          <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
            <Grid item>
              <Button variant="text" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" disableElevation>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

ExamForm.propTypes = {
  children: PropTypes.node,
  currentExam: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  educatorCodes: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ExamForm;
