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
import { EcodeService } from "../../../service/EcodeService";
import SnakAlert from "../alert/SnakAlert";

const DeleteECodeDialog = (props) => {
  const theme = useTheme();
  const { ecodes, setEcodes, ecode, openConfirm, handleConfirm } = props;
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [message, setMessage] = React.useState("");
  const codeService = new EcodeService();

  const deleteECode = () => {
    codeService
      .delete(ecode)
      .then((data) =>
        {
          setSeverity("info");
          setMessage("Code deleted!");
          setOpen(true);
          setEcodes(ecodes.filter((option, i) => option.codeId != ecode.codeId));}
      )
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
      >
        <DialogTitle>{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1">Are you sure?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Back</Button>
          <Button onClick={deleteECode} color="warning" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteECodeDialog.propTypes = {
  children: PropTypes.node,
  ecodes: PropTypes.array.isRequired,
  setEcodes: PropTypes.func.isRequired,
  ecode: PropTypes.object.isRequired,
  openConfirm: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default DeleteECodeDialog;
