import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { exams } from '../../../data';
import ExamCard from '../card/ExamCard';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExamListDialog = (props) => {
  return (
    <Dialog
      fullScreen
      scroll="paper"
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {props.item.title}
          </Typography>
          <Button autoFocus color="inherit" onClick={props.handleClose}>
            Close
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <Grid container spacing={1}>
            {exams.map((exam) => (
              <Grid item key={exam.examId} xs={12} sm={6} md={4} lg={3}>
                <ExamCard exam={exam} />
              </Grid>
            ))}
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default ExamListDialog;