import * as React from "react";
import PropTypes from 'prop-types'
import { Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnakAlert = props => {
    const {open, setOpen, severity, message} = props;

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      key={"top" + "left"}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

SnakAlert.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default SnakAlert