import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormHelperText, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import SnakAlert from "../alert/SnakAlert";
import { EcodeService } from "../../../service/EcodeService";

const ECodeForm = (props) => {
  let { ecodes, setEcodes } = props;
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [found, setFound] = useState(false);
  const codeService = new EcodeService();

  const findCode = (e) => {
    let found = ecodes.find((option, i) => {
      let code = e.target.value.toLocaleUpperCase();
      if (option.code.toLocaleUpperCase() === code) return true;
    });
    if (found === undefined) setFound(false);
    else setFound(true);
  };

  return (
    <>
      <SnakAlert
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
      <Formik
        initialValues={{
          ecode: "",
        }}
        validationSchema={Yup.object({
          ecode: Yup.string().min(5).max(6).required("Required"),
        })}
        onSubmit={(values, actions) => {
          codeService
            .search(values.ecode)
            .then((data) => {
              setSeverity("error");
              setMessage("Duplicate Code! Please create unique one");
              setOpen(true);
              setFound(true);
            })
            .catch((error) => {
              if (error.response.status === 404) {
                setFound(false);
              }
            });
          if (!found) {
            codeService
              .create({ code: values.ecode })
              .then((data) => {
                setEcodes([...ecodes, data]);
                setSeverity("success");
                setMessage("Created successfully.");
                setOpen(true);
              })
              .catch((error) => {
                JSON.stringify(error);
                if (error.response.status === 422) {
                  setSeverity("error");
                  setMessage("Something went wrong!");
                  setOpen(true);
                }
              });
            actions.resetForm();
          }
          actions.setSubmitting(false);
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
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={9} lg={9}>
                <TextField
                  fullWidth
                  error={Boolean((touched.ecode && errors.ecode) || found)}
                  variant="outlined"
                  id="ecode-id"
                  type="string"
                  value={values.ecode}
                  name="ecode"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    findCode(e);
                  }}
                  label="Code"
                  sx={{ m: 1 }}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
                {touched.ecode && errors.ecode && (
                  <FormHelperText sx={{ m: 1 }} error id="helper-text-ecode">
                    {errors.ecode}
                  </FormHelperText>
                )}
                {found && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-duplicate-ecode"
                  >
                    Duplicate Tag!
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={2} lg={2}>
                <Button
                id="code-id-button"
                  variant="contained"
                  disabled={found || errors.ecode}
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

ECodeForm.propTypes = {
  children: PropTypes.node,
  ecodes: PropTypes.array.isRequired,
  setEcodes: PropTypes.func.isRequired,
};

export default ECodeForm;
