import React from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExamForm from "../forms/ExamForm";

const AddExamDialog = (props) => {
  const theme = useTheme();
  const {
    exams,
    currentExam,
    tags,
    ecodes,
    openDialog,
    handleClose,
    edit,
    setExams,
  } = props;
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      fullWidth
      sx={{ zIndex: theme.zIndex.modal }}
    >
      <DialogTitle
        sx={{
          ml: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{edit === true ? "Edit Exam" : "Add Exam"}</h3>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ExamForm
          exams={exams}
          currentExam={currentExam}
          tags={tags}
          ecodes={ecodes}
          handleClose={handleClose}
          edit={edit}
          setExams={setExams}
        />
      </DialogContent>
    </Dialog>
  );
};

AddExamDialog.propTypes = {
  children: PropTypes.node,
  exams: PropTypes.array.isRequired,
  currentExam: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  ecodes: PropTypes.array.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  setExams: PropTypes.func.isRequired,
};

export default AddExamDialog;
