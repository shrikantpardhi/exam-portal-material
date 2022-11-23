import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import useScriptRef from "../../../hooks/useScriptRef";

const ChangePasswordForm = (props) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ m: 1 }}>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          cnfNewPassword: "",
        }}
        validationSchema={Yup.object().shape({
          currentPassword: Yup.string().max(15).required("Required"),
          newPassword: Yup.string().min(8).max(15).required("Required"),
          cnfNewPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {try {
          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (scriptedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid container direction="row" spacing={2}>
                  <Grid item sm>
                    <FormControl
                      fullWidth
                      error={Boolean(
                        touched.currentPassword && errors.currentPassword
                      )}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password-login">
                        Current Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.currentPassword}
                        name="currentPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Current Password"
                        inputProps={{}}
                      />
                      {touched.currentPassword && errors.currentPassword && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {errors.currentPassword}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item sm>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.newPassword && errors.newPassword)}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password-login">
                        New Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="newPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="New Password"
                        inputProps={{}}
                      />
                      {touched.newPassword && errors.newPassword && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {errors.newPassword}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item sm>
                    <FormControl
                      fullWidth
                      error={Boolean(
                        touched.cnfNewPassword && errors.cnfNewPassword
                      )}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password-login">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.cnfNewPassword}
                        name="cnfNewPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        inputProps={{}}
                      />
                      {touched.cnfNewPassword && errors.cnfNewPassword && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {errors.cnfNewPassword}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm>
                <Box sx={{ justifyContent: "flex-end" }}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePasswordForm;
