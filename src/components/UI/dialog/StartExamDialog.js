import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import {
  Grid,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StartExamDialog = (props) => {
  const theme = useTheme();
  const { open, currentExam } = props;
  const [agree, setAgree] = useState(true);

  console.log(currentExam);
  const handleAgree = () => {
    setAgree(!agree);
  };
  const handleClose = () => {
    props.setOpenDialog(false);
  };
  const handleStart = () => {
    props.setOpenDialog(false);
    window.open(`/exam/start/${currentExam.examTitle}/${currentExam.examId}`);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth sx={{ zIndex: 1302 }}>
      <DialogTitle id="scroll-dialog-title">
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          {props.exam.examTitle}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon sx={{ mr: 0, pr: 0 }}>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText sx={{ ml: 0, pl: 0 }} primary="Title" />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Grid container direction="column" sx={{ ml: 2, mr: 2, mb: 1 }}>
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleAgree} />}
                label="Agree terms and conditions"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleStart} disabled={agree}>
                  Start
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
StartExamDialog.propTypes = {
  children: PropTypes.node,
  exam: PropTypes.object.isRequired,
};
export default StartExamDialog;
