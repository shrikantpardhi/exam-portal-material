import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Grid, CardActions, Button, Badge, Collapse } from "@mui/material";
import Typography from "@mui/material/Typography";
import StartExamDialog from "../dialog/StartExamDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
  const [open, setOpenDialog] = React.useState(false);
  const [currentExam, setCurrentExam] = useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                      props.exam.isPaid === false? (
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
          <Grid container justifyContent="space-between">
            <Grid item>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon sx={{ color: "#FFFFFF" }} />
              </ExpandMore>
            </Grid>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ p: 2, border: "1px solid #ffff05" }}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid container justifyContent="space-between" spacing={1}>
                    <CardRow
                      name="Subject"
                      value={props.exam.subjectDto.title}
                    />
                    <CardRow name="Mark" value={props.exam.totalMark} />
                    <CardRow
                      name="Questions"
                      value={props.exam.questionCount}
                    />
                    <CardRow name="Duration" value={props.exam.examDuration} />
                    <CardRow
                      name="Negaive Mark"
                      value={props.exam.isNegativeAllowed === false ? "No" : "Yes"}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
      <StartExamDialog
        open={open}
        setOpenDialog={setOpenDialog}
        currentExam={currentExam}
      />
    </>
  );
};

export default ExamCard;
