import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import SnakAlert from "../alert/SnakAlert";
import { ExamService } from "../../../service/ExamService";

const DeleteExamDialog = (props) => {
     const theme = useTheme();
     const { exams, setExams, exam, openConfirm, handleConfirm } = props;
     const [open, setOpen] = React.useState(false);
     const [severity, setSeverity] = React.useState("");
     const [message, setMessage] = React.useState("");
     const examService = new ExamService();

      const deleteExam = () => {
    examService
      .delete(exam.examId)
      .then((data) => {
        setSeverity("success");
        setMessage("Code deleted!");
        setOpen(true);
        setExams(exams.filter((option, i) => option.examId !== exam.examId));
        handleConfirm();
      })
      .catch((error) => {
        setSeverity("error");
        setMessage("Something went wrong!");
        setOpen(true);
      });
  };


  return (
    <>
      <SnakAlert
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
      <Dialog
        open={openConfirm}
        onClose={handleConfirm}
        sx={{ zIndex: theme.zIndex.modal }}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1">Are you sure?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Back</Button>
          <Button onClick={deleteExam} color="warning" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteExamDialog.propTypes = {
  children: PropTypes.node,
  exams: PropTypes.array.isRequired,
  setExams: PropTypes.func.isRequired,
  exam: PropTypes.object.isRequired,
  openConfirm: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default DeleteExamDialog;
