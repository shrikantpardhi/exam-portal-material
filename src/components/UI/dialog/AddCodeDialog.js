import React from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const AddCodeDialog = (props) => {
  const theme = useTheme();
  const { openCodeDialog, handleCodeDialog } = props;
  return (
    <Dialog
      open={openCodeDialog}
      onClose={handleCodeDialog}
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
          Enter Exam Code
        </Typography>
      </DialogTitle>
      <DialogContent>
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
              <Grid
                container
                justifyContent="space-between"
                sx={{ marginTop: 1 }}
              >
                <Grid item>
                  <Button variant="text" onClick={handleCodeDialog}>
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
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

AddCodeDialog.propTypes = {
  children: PropTypes.node,
  openCodeDialog: PropTypes.bool.isRequired,
  handleCodeDialog: PropTypes.func.isRequired,
};

export default AddCodeDialog;
