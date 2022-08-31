import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Box,
  Grid,
  Divider,
  CardActions,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CardRow = (props) => {
  const theme = useTheme();
  return (
    <Grid item>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item>
          <Typography>{props.name}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 700 }}>{props.value}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
    (value) =>
      React.cloneElement(element, {
        key: value,
      })
  );
}

const ExamCard = (props) => {
  const theme = useTheme();
  const [open, setOpenDialog] = React.useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [agree, setAgree] = useState(true);

  const handleAgree = () => {
    setAgree(!agree);
  };
  const handleOpen = (exam) => () => {
    setCurrentCategory(exam);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.background.card,
          textAlign: "center",
          color: "white",
        }}
      >
        <CardContent>
          <Grid container direction="column">
            <Grid item sx={{ p: 1 }}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
                    {props.exam.exam_title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{}}>
                    {props.exam.is_paid === 0 ? "Free" : "Paid"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid item sx={{ m: 1 }}>
              <Typography>{props.exam.exam_description}</Typography>
            </Grid>
            <Divider />
            <Grid item sx={{ p: 1 }}>
              <Grid container justifyContent="space-between" spacing={1}>
                <CardRow name="Mark" value={props.exam.total_mark} />
                <CardRow name="Duration" value={props.exam.exam_duration} />
              </Grid>
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Grid container justifyContent="space-between" spacing={1}>
                <CardRow
                  name="Negative"
                  value={props.exam.is_negative_allowed === 0 ? "No" : "Yes"}
                />
                <CardRow name="End" value={props.exam.exam_end_date} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing sx={{ marginRight: "auto" }}>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "#ffff05",
                borderColor: "#ffff05",
                "&:hover": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                },
              }}
              onClick={handleOpen(props.exam)}
            >
              Start
            </Button>
          </Box>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} fullWidth sx={{ zIndex: 1302 }}>
        <DialogTitle id="scroll-dialog-title">
          <Typography
            sx={{
              ...theme.typography.h5,
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            Instructions
          </Typography>
        </DialogTitle>
        <DialogContent>
            <List>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" />
                </ListItem>
              )}
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
                  <Button onClick={handleClose} disabled={agree}>
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExamCard;
