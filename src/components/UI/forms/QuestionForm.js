import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import {
  Box,
  Autocomplete,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  TextField,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { Formik, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { tags } from "../../../data";

const QuestionForm = (props) => {
  const { currentQuestion, handleClose, edit } = props;
  const theme = useTheme();
  const [answerError, setAnswerError] = useState(false);
  const [answerCmpError, setAnswerCmpError] = useState(false);
  console.log("edit mode " +edit);
  return (
    <Formik
      initialValues={{
        questionId: currentQuestion.questionId || "",
        questionTitle: currentQuestion.questionTitle || "",
        questionDescription: currentQuestion.questionDescription || "",
        questionAnswerDescription:
          currentQuestion.questionAnswerDescription || "",
        tag: currentQuestion.tag || {},
        questionTypeDto: currentQuestion.questionTypeDto || "",
        isNegativeAllowed: currentQuestion.isNegativeAllowed,
        questionImage: currentQuestion.questionImage || "",
        questionAnswerDescriptionImage:
          currentQuestion.questionAnswerDescriptionImage || "",
        questionMark: currentQuestion.questionMark || "",
        answerDtoList: currentQuestion.answerDtoList || "",
      }}
      validationSchema={Yup.object({
        questionTitle: Yup.string().required("Required"),
        questionMark: Yup.number()
          .positive("Must be positive number")
          .integer()
          .required("Required"),
        tag: Yup.object()
          .shape({
            id: Yup.string().required("Required"),
            name: Yup.string().required("Required"),
          })
          .required("This field is required."),
        answerDtoList: Yup.array().of(
          Yup.object().shape({
            answerText: Yup.string().required("Required"),
          })
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values));
        setSubmitting(false);
        values.answerDtoList.forEach((answer) => {
          if (!answer.isCorrect) {
            setAnswerError(true);
          }
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
          <TextField
            fullWidth
            error={Boolean(touched.questionTitle && errors.questionTitle)}
            variant="outlined"
            id="questionTitle-name"
            type="string"
            value={values.questionTitle}
            name="questionTitle"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Title"
            sx={{ m: 1 }}
            InputProps={{
              readOnly: !edit,
            }}
          />
          {touched.questionTitle && errors.questionTitle && (
            <FormHelperText sx={{ m: 1 }} error id="helper-text-title">
              {errors.questionTitle}
            </FormHelperText>
          )}

          <TextField
            fullWidth
            error={Boolean(
              touched.questionDescription && errors.questionDescription
            )}
            variant="outlined"
            id="questionDescription-id"
            type="string"
            value={values.questionDescription}
            name="questionDescription"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Description"
            multiline
            rows={3}
            sx={{ m: 1 }}
            InputProps={{
              readOnly: !edit,
            }}
          />
          {touched.questionDescription && errors.questionDescription && (
            <FormHelperText sx={{ m: 1 }} error id="helper-text-description">
              {errors.questionDescription}
            </FormHelperText>
          )}

          <TextField
            fullWidth
            error={Boolean(
              touched.questionAnswerDescription &&
                errors.questionAnswerDescription
            )}
            variant="outlined"
            id="questionDescription-id"
            type="string"
            value={values.questionAnswerDescription}
            name="questionAnswerDescription"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Answer Description"
            multiline
            rows={3}
            sx={{ m: 1 }}
            InputProps={{
              readOnly: !edit,
            }}
          />
          {touched.questionAnswerDescription &&
            errors.questionAnswerDescription && (
              <FormHelperText sx={{ m: 1 }} error id="helper-text-description">
                {errors.questionAnswerDescription}
              </FormHelperText>
            )}

          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            spacing={3}
          >
            <Grid item md={6} sm={6} xl={6}>
              <TextField
                fullWidth
                error={Boolean(touched.questionMark && errors.questionMark)}
                variant="outlined"
                id="questionMark"
                type="number"
                value={values.questionMark}
                name="questionMark"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Question Mark"
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: !edit,
                }}
              />
              {touched.questionMark && errors.questionMark && (
                <FormHelperText
                  error
                  id="helper-text-questionMark"
                  sx={{ m: 1 }}
                >
                  {errors.questionMark}
                </FormHelperText>
              )}
            </Grid>
            <Grid item md={6} sm={6} xl={6}>
              <Autocomplete
                id="question-tag-id"
                name="tag"
                options={tags}
                onBlur={handleBlur}
                getOptionLabel={(option) => {
                  return option.name || "";
                }}
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="Tag" placeholder="Tag" />
                )}
                sx={{ m: 1 }}
                readOnly={!edit}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                id="isNegativeAllowed"
                checked={values.isNegativeAllowed}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                disabled={!edit}
              />
            }
            label="Negative Marking"
            sx={{ m: 1 }}
          />
          <Divider />
          {/* Answer section */}
          <Box sx={{ m: 1 }}>
            <Typography sx={{ ...theme.typography.h6, textAlign: "center" }}>
              Answers
            </Typography>
          </Box>
          <FieldArray
            name="answerDtoList"
            render={({ insert, remove, push }) => (
              <div>
                <Typography color="red" sx={{ textAlign: "center" }}>
                  {!values.answerDtoList.some(
                    (answer) => answer.isCorrect === true
                  ) && values.answerDtoList.length !== 0
                    ? "Atleast one answer must be selected"
                    : ""}
                  {new Set(
                    values.answerDtoList.map((answer) => answer.answerText)
                  ).size !== values.answerDtoList.length &&
                  values.answerDtoList.length !== 0
                    ? "Answers must be unique"
                    : ""}
                </Typography>
                {values.answerDtoList.length > 0 &&
                  values.answerDtoList.map((answer, index) => (
                    <Grid
                      key={index}
                      container
                      alignItems="center"
                      spacing={1}
                      sx={{ m: 1 }}
                    >
                      <Grid item>
                        <Checkbox
                          id={`answerDtoList.${index}.isCorrect`}
                          name={`answerDtoList.${index}.isCorrect`}
                          checked={answer.isCorrect || false}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          disabled={!edit}
                        />
                      </Grid>
                      <Grid item md={10} sm={10} xl={10}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          id={`answerDtoList.${index}.answerText`}
                          type="string"
                          name={`answerDtoList.${index}.answerText`}
                          value={answer.answerText}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label={`Answer.${index + 1}`}
                          inputProps={{}}
                          InputProps={{
                            readOnly: !edit,
                          }}
                        />
                        <ErrorMessage
                          name={`answerDtoList.${index}.answerText`}
                          component="div"
                          className="field-error"
                        />
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => remove(index)}
                          disabled={!edit}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip title="Add Answer">
                    <IconButton
                      onClick={() => push({ answerText: "", isCorrect: false })}
                      disabled={values.answerDtoList.length >= 4 || edit}
                      color="secondary"
                    >
                      <AddIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </div>
            )}
          />
          <Grid
            container
            justifyContent="flex-end"
            sx={{ marginTop: 1 }}
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
                disabled={isSubmitting || !edit}
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

QuestionForm.propTypes = {
  children: PropTypes.node,
  currentQuestion: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default QuestionForm;
