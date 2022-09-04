import React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import AuthCard from "../UI/Widgets/AuthCard";
import DialogContent from "@mui/material/DialogContent";
import LoginForm from "./LoginForm";

const AuthWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  minHeight: "100vh",
}));

const Login = (props) => {
    const {setOpenLogin} = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <DialogContent>
      <AuthWrapper>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              //   alignItems="center"
              sx={{ minHeight: "calc(100vh - 68px)" }}
            >
              <Grid item sx={{ m: 0 }}>
                <AuthCard>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction={matchDownSM ? "column-reverse" : "row"}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item>
                          <Stack
                            alignItems="center"
                            justifyContent="center"
                            spacing={1}
                          >
                            <Typography
                              color={theme.palette.secondary.main}
                              gutterBottom
                              variant={matchDownSM ? "h5" : "h6"}
                              fontWeight={"500px"}
                            >
                              Hi, Welcome Back
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <LoginForm setOpenLogin ={setOpenLogin}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        xs={12}
                      >
                        <Typography
                          component={Link}
                          to="/register"
                          variant={"subtitle1"}
                          sx={{ textDecoration: "none" }}
                          style={{ color: "#000" }}
                        >
                          Don&apos;t have an account?
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AuthCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            {/* <AuthFooter /> */}
          </Grid>
        </Grid>
      </AuthWrapper>
    </DialogContent>
  );
};

export default Login;
