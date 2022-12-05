import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { states } from "../../../data";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UserForm = (props) => {
  const { currentUser, handleClose, setCurrentUser, editMode } = props;
  const theme = useTheme();
  const [toggle, setToggle] = useState(currentUser.status);

  const handleSwitchState = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <Formik
      initialValues={{
        userName: currentUser.userName,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        mobile: currentUser.mobile,
        address: currentUser.address,
        image: "",
        city: currentUser.city,
        state: currentUser.state,
        education: currentUser.education,
        status: currentUser.status,
        role: currentUser.role,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(25).required("First name required"),
        lastName: Yup.string().required("Last name required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(40)
          .required("Email required"),
        mobile: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("Mobile number required"),
        city: Yup.string(),
        id: Yup.string(),
        education: Yup.string(),
        role: Yup.string(),
        status: Yup.string(),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {}}
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
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={1}
          >
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">First Name</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.firstName && errors.firstName)}
                    variant="outlined"
                    id="outlined-firstName"
                    type="string"
                    value={values.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-firstName">
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Last Name</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.lastName && errors.lastName)}
                    variant="outlined"
                    id="outlined-lastName"
                    type="string"
                    value={values.lastName}
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.lastName && errors.lastName && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-lastName">
                      {errors.lastName}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Email</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.email && errors.email)}
                    variant="outlined"
                    id="outlined-email"
                    type="string"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-email">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Mobile</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.mobile && errors.mobile)}
                    variant="outlined"
                    id="outlined-mobile"
                    type="string"
                    value={values.mobile}
                    name="mobile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.mobile && errors.mobile && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-mobile">
                      {errors.mobile}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">City</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.city && errors.city)}
                    variant="outlined"
                    id="outlined-city"
                    type="string"
                    value={values.city}
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.city && errors.city && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-city">
                      {errors.city}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Address</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.address && errors.address)}
                    variant="outlined"
                    id="outlined-address"
                    type="string"
                    value={values.address}
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.address && errors.address && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-address">
                      {errors.address}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">State</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    variant="outlined"
                    id="select-state"
                    type="string"
                    value={values.state}
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  >
                    {/* <MenuItem key="0" value="null">
                      Select
                    </MenuItem>
                    {states.map((state) => (
                      <MenuItem key={state.id} value={state.id}>
                        {state.name}
                      </MenuItem>
                    ))} */}
                  </TextField>
                  {touched.state && errors.state && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-state">
                      {errors.state}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Education</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled={!editMode}
                    error={Boolean(touched.education && errors.education)}
                    variant="outlined"
                    id="outlined-education"
                    type="string"
                    value={values.education}
                    name="education"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                  {touched.education && errors.education && (
                    <FormHelperText sx={{ m: 1 }} error id="helper-education">
                      {errors.education}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Role</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <TextField
                    fullWidth
                    disabled
                    variant="outlined"
                    id="outlined-education"
                    type="string"
                    value={values.role.map((r) => r.roleName)}
                    name="role"
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs sm={4} md={4} lg={4}>
                  <Typography variant="body1">Status</Typography>
                </Grid>
                <Grid item xs sm={8} md={8} lg={8}>
                  <Switch disabled={!editMode} checked={toggle} onChange={handleSwitchState} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm>
              <Divider />
            </Grid>
            <Grid item sm>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
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
                    disabled={isSubmitting}
                    type="submit"
                    disableElevation
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

UserForm.propTypes = {
  currentUser: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default UserForm;
