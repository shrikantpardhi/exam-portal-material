import React, {useState} from "react";
import {
  Box,
  Card,
  DialogActions,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import StartExamDialog from "../dialog/StartExamDialog";

const CardRow = (props) => {
  return (
    <Grid item>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item>
          <Typography>{props.name} -</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 700 }}>{props.value}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ExamCard = (props) => {
  const theme = useTheme();
  const [open, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  return (
    <Box>
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
              <Typography sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
                {props.exam.examTitle}
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <CardRow name="Mark" value={props.exam.totalMark} />
            <CardRow name="Questions" value={props.exam.questionCount} />
            <CardRow name="Duration" value={props.exam.examDuration} />
          </Grid>
        </CardContent>
        <DialogActions>
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
            onClick={handleOpen}
          >
            Start
          </Button>
        </DialogActions>
      </Card>
      <StartExamDialog
        open={open}
        setOpenDialog={setOpenDialog}
        exam={props.exam}
      />
    </Box>
  );
};

export default ExamCard;