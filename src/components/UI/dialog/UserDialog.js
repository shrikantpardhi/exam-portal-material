import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import UserForm from "../forms/UserForm";

const UserDialog = (props) => {
  const { currentUser, openDialog, handleClose, setCurrentUser, editMode } =
    props;
  const theme = useTheme();
  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
            m: 1,
          }}
        >
          {editMode ? "Edit User" : "View User"}
        </Typography>
        <Divider />
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 1 }}>
          <UserForm
            currentUser={currentUser}
            handleClose={handleClose}
            setCurrentUser={setCurrentUser}
            editMode={editMode}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

UserDialog.propTypes = {
  currentUser: PropTypes.object.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default UserDialog;
