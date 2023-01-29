import React from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import ExamForm from "../forms/ExamForm";

const AddExamDialog = (props) => {
  const theme = useTheme();
  const { currentExam, tags, educatorCodes, openDialog, handleClose } = props;
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
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
          {currentExam.examTitle.length !== 0 ? "Edit Exam" : "Add Exam"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <ExamForm
          currentExam={currentExam}
          tags={tags}
          educatorCodes={educatorCodes}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

AddExamDialog.propTypes = {
  children: PropTypes.node,
  currentExam: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  educatorCodes: PropTypes.array.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddExamDialog;
