import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Fab,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme, styled } from "@mui/styles";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWindowDimensions from "./util/useWindowDimensions";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const Head = (props) => {
  const theme = useTheme();
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <Box
      sx={{
        display: "block",
        mb: 1,
        p: 0,
        width: 1,
        bgcolor: (theme) => "grey.100",
        color: (theme) => "grey.800",
        border: "1px solid",
        borderColor: (theme) => "grey.300",
        Height: "12vh",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        spacing={1}
        sx={{ pl: 4, pr: 4 }}
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="space-evenly"
          >
            <Grid item>
              <Typography variant="h5">Shrikant Pardhi</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Exam 1</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              p: 2,
              bgcolor: "#ffffff",
              borderRadius: 2,
              fontSize: "1.5rem",
              fontWeight: "900",
            }}
          >
            {/* <Timer /> */}
            {timer}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Question = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "block",
        mb: 1,
        width: props.buttonList ? 1 / 1.5 : 1,
        bgcolor: (theme) => "grey.100",
        color: (theme) => "grey.800",
        border: "1px solid",
        borderColor: (theme) => "grey.300",
        fontSize: "0.875rem",
        fontWeight: "500",
        height: "15vh",
        overflowY: "scroll",
        [theme.breakpoints.down("sm")]: {
          width: 1,
        },
        [theme.breakpoints.down("md")]: {
          width: 1,
        },
      }}
    >
      <Typography sx={{ p: 1 }}>1. What is your name?</Typography>
    </Box>
  );
};

const Answers = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "block",
        mb: 1,
        width: props.buttonList ? 1 / 1.5 : 1,
        bgcolor: (theme) => "grey.100",
        color: (theme) => "grey.800",
        border: "1px solid",
        borderColor: (theme) => "grey.300",
        fontSize: "0.875rem",
        fontWeight: "500",
        height: "55vh",
        overflowY: "scroll",
        [theme.breakpoints.down("sm")]: {
          width: 1,
        },
        [theme.breakpoints.down("md")]: {
          width: 1,
        },
      }}
    >
      <Grid container sx={{ p: 1 }}>
        {/* list of  answers */}
        <Grid item>
          <RadioGroup
            aria-labelledby="answers-button-group"
            name="single-answer"
          >
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((value) => (
                <Grid item>
                  <Item>
                    <FormControlLabel
                      value={value}
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 28,
                            },
                          }}
                        />
                      }
                      label={`Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjg kghjggkgkjgkghkgkjgh gkgkghjgkghjggkgkjgk ghkgkjghgkgkghjgkghjgkgjgkjhjkgjkgkgkgjkgkhjgjhfhjgfhjfhgfhgfhhjgfhjfhgf - ${value}`}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

const FixedButton = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 1,
        display: "block",
        width: props.buttonList ? 1 / 1.5 : 1,
        fontSize: "0.875rem",
        fontWeight: "500",
        height: "10vh",
        [theme.breakpoints.down("sm")]: {
          width: 1,
        },
        [theme.breakpoints.down("md")]: {
          width: 1,
        },
      }}
    >
      <Grid container direction="row" justifyContent="space-evenly" spacing={1}>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="warning">
            Clear
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="info">
            Mark As Review
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="success">
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Grid>
        <Grid item>
          <Button disabled={true} variant="contained" color="success">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const FloatingButton = (props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      sx={{ position: "absolute", right: 0, top: "13vh" }}
      onClick={props.handleButtonList}
    >
      {mobile ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
    </Fab>
  );
};

const ButtonListBox = (props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up("sm"));
  const handleButtonList = () => {
    props.buttonList = !props.buttonList;
  };
  return (
    <Box
      sx={{
        display: props.buttonList ? "block" : "none",
        position: "absolute",
        right: 0,
        top: "18vh",
        width: 1 / 3.3,
        height: "70vh",
        overflowY: "scroll",
        bgcolor: (theme) => "grey.100",
        color: (theme) => "grey.800",
        border: "1px solid",
        borderColor: (theme) => "grey.300",
        [theme.breakpoints.down("sm")]: {
          width: 1,
          position:'relative',
          bottom: 0,
        },
      }}
    >
      <Grid container spacing={1} sx={{ m: 1 }}>
        {Array.from(Array(60).keys()).map((value) => (
          <Grid item>
            <Button variant="outlined" sx={{ borderRadius: 20 }}>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Exam = (props) => {
  const [buttonList, setButtonList] = useState(true);
  const handleButtonList = () => {
    setButtonList(!buttonList);
  };
  return (
    <Box
      sx={{
        width: "99%",
        height: "99vh",
        m: 1,
      }}
    >
      <Head />
      <Question buttonList={buttonList} handleButtonList={handleButtonList} />
      <Answers buttonList={buttonList} handleButtonList={handleButtonList} />
      <FixedButton
        buttonList={buttonList}
        handleButtonList={handleButtonList}
      />
      <FloatingButton
        buttonList={buttonList}
        handleButtonList={handleButtonList}
      />
      <ButtonListBox
        buttonList={buttonList}
        handleButtonList={handleButtonList}
      />
    </Box>
  );
};

export default Exam;
