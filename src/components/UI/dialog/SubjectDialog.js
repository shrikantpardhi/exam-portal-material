import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import SubjectForm from '../forms/SubjectForm';

const SubjectDialog = props => {
    const {
      currentSubject,
      openDialog,
      handleClose,
      subjects,
      setSubjects,
    } = props;

    const theme = useTheme();
  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          {currentSubject.id !== 0 ? "Edit Subject" : "Add Subject"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <SubjectForm
          currentSubject={currentSubject}
          handleClose={handleClose}
          subjects={subjects}
          setSubjects={setSubjects}
        />
      </DialogContent>
    </Dialog>
  );
}

SubjectDialog.propTypes = {
  currentSubject: PropTypes.object.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  setSubjects: PropTypes.func.isRequired,
};

export default SubjectDialog