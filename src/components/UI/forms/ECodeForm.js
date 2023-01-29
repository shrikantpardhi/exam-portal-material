import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  Alert,
  Button,
  Collapse,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik } from "formik";
import * as Yup from "yup";

const ECodeForm = (props) => {
  const theme = useTheme();
  const [openError, setOpenError] = useState(true);
  const error = useState({
    severity: "error",
    message: "This is error",
  });
  return (
    <Formik
      initialValues={{
        ecode: "",
      }}
      validationSchema={Yup.object({
        ecode: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
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
      }) => (
        <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
          <Collapse in={openError}>
            <Alert
              severity={error.severity}
              variant="filled"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {error.message}
            </Alert>
          </Collapse>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={9} lg={9}>
              <TextField
                fullWidth
                error={Boolean(touched.ecode && errors.ecode)}
                variant="outlined"
                id="ecode-id"
                type="string"
                value={values.ecode}
                name="ecode"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Code"
                sx={{ m: 1 }}
              />
              {touched.ecode && errors.ecode && (
                <FormHelperText sx={{ m: 1 }} error id="helper-text-ecode">
                  {errors.ecode}
                </FormHelperText>
              )}
            </Grid>
            <Grid item md={2} lg={2}>
              <Button
                variant="contained"
                type="submit"
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

ECodeForm.propTypes = {};

export default ECodeForm;
