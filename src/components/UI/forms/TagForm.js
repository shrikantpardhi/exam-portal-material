import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, FormHelperText, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { TagService } from "../../../service/TagService";
import SnakAlert from "../alert/SnakAlert";

const TagForm = (props) => {
  let { tags, setTags } = props;
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [message, setMessage] = React.useState("");
  const tagService = new TagService();
  const [found, setFound] = useState(false);
  const [tag, setTag] = useState(null);

  const findTag = (e) => {
    let found = tags.find((option, i) => {
      let name = e.target.value.toLocaleUpperCase();
      if (option.name === name) return true;
    });
    if(found === undefined) setFound(false);
    else setFound(true); 
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
        })}
        onSubmit={(values, actions, resetForm) => {
          setLoading(true);
          const response = tagService
            .create({ name: values.name })
            .then((data) => {
              setTags([...tags, data]);
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
          resetForm();
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
            <SnakAlert
              open={open}
              setOpen={setOpen}
              severity={severity}
              message={message}
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={9} lg={9}>
                <TextField
                  fullWidth
                  error={Boolean((touched.name && errors.name) || found)}
                  variant="outlined"
                  id="tag-id"
                  type="string"
                  value={values.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    findTag(e);
                  }}
                  label="Tag"
                  sx={{ m: 1 }}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
                {touched.name && errors.name && (
                  <FormHelperText sx={{ m: 1 }} error id="helper-text-tag">
                    {errors.name}
                  </FormHelperText>
                )}
                {found && (
                  <FormHelperText sx={{ m: 1 }} error id="helper-duplicate-tag">
                    Duplicate Tag!
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={2} lg={2}>
                <Button
                  variant="contained"
                  disabled={found || errors.name}
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

TagForm.propTypes = {
  children: PropTypes.node,
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

export default TagForm;
