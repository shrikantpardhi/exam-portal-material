import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Grid,
  CardActions,
  Button,
  Badge,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import StartExamDialog from "../dialog/StartExamDialog";

const ExamCard = (props) => {
  const theme = useTheme();
  const [open, setOpenDialog] = React.useState(false);
  const [currentExam, setCurrentExam] = useState(null);

  const handleOpen = (exam) => () => {
    setCurrentExam(exam);
    setOpenDialog(true);
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
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                    {props.exam.examCategoryDto.examCategoryName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="center">
                <Grid item>
                  <Badge
                    badgeContent={
                      props.exam.isPaid === 0 ? (
                        <Typography sx={{ p: 1 }}>Free</Typography>
                      ) : (
                        <Typography sx={{ p: 1 }}>Paid</Typography>
                      )
                    }
                    color="primary"
                  >
                    <Box sx={{ p: 2, border: "1px solid #ffff05" }}>
                      <Typography sx={{ fontWeight: 900, fontSize: "1.75rem" }}>
                        {props.exam.examTitle}
                      </Typography>
                    </Box>
                  </Badge>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing sx={{ marginRight: "auto" }}>
          <Grid container justifyContent="flex-end">
            <Grid item>
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
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <StartExamDialog open={open} setOpenDialog={setOpenDialog} currentExam ={currentExam} />
    </>
  );
};

export default ExamCard;
