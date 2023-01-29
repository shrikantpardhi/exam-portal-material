import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from "@mui/styles";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import QuestionForm from "../forms/QuestionForm"

const AddQuestionDialog = props => {
  const {currentQuestion, edit, handleDialog, openDialog} = props;
  const theme = useTheme();
  return (
    <Dialog
      open={openDialog}
      onClose={handleDialog}
      fullWidth
      maxWidth={"md"}
      sx={{ zIndex: theme.zIndex.modal }}
      PaperProps={{
        elevation: 5,
      }}
    >
      <DialogTitle>
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          {edit === true
            ? "Edit Question"
            : "Add Question"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <QuestionForm
          currentQuestion={currentQuestion}
          handleClose={handleDialog}
          edit={edit}
        />
      </DialogContent>
    </Dialog>
  );
}

AddQuestionDialog.propTypes = {
  children: PropTypes.node,
  currentQuestion: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
};

export default AddQuestionDialog