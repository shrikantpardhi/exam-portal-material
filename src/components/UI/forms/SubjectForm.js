import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

const SubjectForm = (props) => {
  const { currentSubject, handleClose, subjects, setSubjects } = props;
  return (
    <Formik
      initialValues={{
        id: currentSubject.id,
        title: currentSubject.title,
        premium: currentSubject.premium ? "1" : "0",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } else if (!/^[A-Za-z]{3,15}([\w ]{1}[0-9]{2})?$/i.test(values.title)) {
          errors.title =
            "Name must minimun atleast 3 character long (can be added number 2 character long). ex. EXAM 12";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        //save data here
        if (values.id !== 0) {
          subjects.map((item) => {
            if (item.id === values.id) {
              item.title = values.title;
              item.premium = values.premium === "0" ? false : true;
            }
          });
          setSubjects([...subjects]);
        } else {
          setSubjects([
            ...subjects,
            {
              id: "6",
              title: values.title,
              premium: values.premium === "0" ? false : true,
            },
          ]);
        }
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
            error={Boolean(touched.title && errors.title)}
            variant="outlined"
            id="title-name"
            type="text"
            value={values.title}
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Title"
            inputProps={{}}
            sx={{ m: 1 }}
          />
          {touched.title && errors.title && (
            <FormHelperText sx={{ m: 1 }} error id="helper-title">
              {errors.title}
            </FormHelperText>
          )}

          <TextField
            fullWidth
            error={Boolean(touched.premium && errors.premium)}
            variant="outlined"
            id="premium-id"
            type="select"
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
            <FormHelperText sx={{ m: 1 }} error id="helper-text-premium-id">
              {errors.premium}
            </FormHelperText>
          )}

          <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
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
  );
};

SubjectForm.propTypes = {
  currentSubject: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  setSubjects: PropTypes.func.isRequired,
};

export default SubjectForm;
