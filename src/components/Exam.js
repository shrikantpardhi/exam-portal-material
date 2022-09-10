import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useTheme, styled } from "@mui/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const Exam = (props) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "grid",
          m: 2,
          [theme.breakpoints.down("md")]: {
            m: 1,
          },
          [theme.breakpoints.down("sm")]: {
            m: 1,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Box
              sx={{
                ...theme.shape.detailBox,
                backgroundColor: "#e8ebe9",
                height: "75vh",
                p: 2,
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={1}
              >
                {/* question */}
                <Grid item>
                  <Box
                    sx={{
                      minHeight: "8vh",
                      maxHeight: "20vh",
                      overflowY: "scroll",
                    }}
                  >
                    <Typography>1. What is your name?</Typography>
                  </Box>
                </Grid>
                {/* answer section */}
                <Grid item>
                  <Box
                    sx={{
                      minHeight: "30vh",
                      maxHeight: "50vh",
                      overflowY: "scroll",
                    }}
                  >
                    <Grid container>
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
                                    label={`Answerghhhhhhhhhhhhgkgkjgkghkgkjghgkgkghjgkghjgkgjgkjhjkgjkgkgkgjkgkhjgjhfhjgfhjfhgfhgfhhjgfhjfhgf - ${value}`}
                                  />
                                </Item>
                              </Grid>
                            ))}
                          </Grid>
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                {/* Button section */}
                <Grid item sx={{ zIndex: theme.zIndex.modal, backgroundColor:"#fff", m:1 }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button variant="contained">Previous</Button>
                    <Button variant="contained">Mark for Review</Button>
                    <Button variant="contained">Clear</Button>
                    <Button variant="contained">Next</Button>
                    <Button variant="outlined">Submit Exam</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Exam;
