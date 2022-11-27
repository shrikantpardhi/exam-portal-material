import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import { subjects as mysubjects } from "../../data";
import SubjectDialog from "../UI/dialog/SubjectDialog";

const Subjects = () => {
  const initialSubject = {
    id: 0,
    title: "",
    premium: false,
    totalCount: 0,
  };

  const theme = useTheme();
  const [subjects, setSubjects] = useState(mysubjects);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [currentSubject, setCurrentSubject] = useState(initialSubject);

  const handleClickOpen = () => {
    setCurrentSubject(initialSubject);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const editSubjectHandler = (subject) => () => {
    setCurrentSubject(subject);
    setOpenDialog(true);
  };

  const deleteSubjectHandler = (subject) => () => {
    setSubjects((items) => items.filter((item) => item.id !== subject.id));
  };

  return (
    <Box
      sx={{
        m: 3,
        width: "auto",
        height: "auto",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: theme.palette.background.headingBox,
        }}
      >
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <Typography sx={{ ...theme.typography.h5 }}>Subjects</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
              size="small"
            >
              Add Subject
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          {subjects.map((subject) => (
            <Grid item xs sm={6} md={4} lg={3} key={subject.id}>
              <Card
                variant="outlined"
                sx={{
                  minWidth: 275,
                  textAlign: "center",
                  borderColor: "orange",
                  borderWidth: 1,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {subject.premium === false ? "Free" : "Paid"}
                  </Typography>
                  <Typography
                    sx={{ ...theme.typography.cardTitle, marginBottom: "1em" }}
                    component="div"
                  >
                    {subject.title}
                  </Typography>
                  <Typography variant="body2">
                    Total exams : {subject.totalCount}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justifyContent="flex-end" spacing={2}>
                    <Grid item>
                      <IconButton
                        size="small"
                        onClick={editSubjectHandler(subject)}
                      >
                        <EditRoundedIcon color="warning" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        size="small"
                        onClick={deleteSubjectHandler(subject)}
                      >
                        <DeleteRoundedIcon color="error" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <SubjectDialog
        currentSubject={currentSubject}
        handleClose={handleClose}
        subjects={subjects}
        openDialog={openDialog}
        setSubjects={setSubjects}
      />
    </Box>
  );
};

export default Subjects;
