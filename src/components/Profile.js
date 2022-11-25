import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Stack,
  Divider,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { user } from "../data";
import ChangePasswordForm from "./UI/frorms/ChangePasswordForm";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const RowItem = (props) => {
  let { name, value } = props;
  const theme = useTheme();
  return (
    <Grid item xs sm md={6} lg={6}>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
        sx={{ m: 1 }}
      >
        <Grid item>
          <Typography variant="body1" align="center">
            {name}
            <span>:</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            sx={{ fontWeight: "600", fontSize: "1rem" }}
          >
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const PersonalDetails = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        m: 1,
      }}
    >
      <Grid container justifyContent="space-between" direction="row" spacing={2}>
        <Grid item sm>
          <Grid container direction="column" spacing={1} justifyContent="flex-start">
            <Grid item sm>
              <Avatar
                alt={props.user.firstName}
                //   src="/static/images/avatar/1.jpg"
                sx={{ width: 150, height: 150, mb: 1 }}
              >
                <Typography variant="h4" color="secondary">
                  {props.user.firstName.substring(0, 1)}
                  {props.user.lastName.substring(0, 1)}
                </Typography>
              </Avatar>
            </Grid>
            <Grid item sm>
              <Stack direction="row" alignItems="center" gap={1}>
                <PersonIcon />
                <Typography variant="h5">
                  {props.user.firstName}&nbsp;{props.user.lastName}
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm>
              <Stack direction="row" alignItems="center" gap={1}>
                <EmailIcon />
                <Typography variant="body1">{props.user.email}</Typography>
              </Stack>
            </Grid>
            <Grid item sm>
              <Stack direction="row" alignItems="center" gap={1}>
                <PhoneIcon />
                <Typography>{props.user.mobile}</Typography>
              </Stack>
            </Grid>
            <Grid item sm>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocationOnIcon />
                <Typography>{props.user.city}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item sm>
          <Grid container direction="column" spacing={1}>
            <RowItem name="Address" value={props.user.address} />
            <RowItem name="State" value={props.user.state} />
            <RowItem name="Education" value={props.user.education} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const ChangePassword = (props) => {
  const theme = useTheme();
  return (
    <Box
      component="form"
      sx={{
        m: 1,
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <ChangePasswordForm user={props.user} />
    </Box>
  );
};

const Profile = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);
  const [cuser, setUser] = React.useState(user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        m: 3,
      }}
    >
      {/* tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Personal" {...a11yProps(0)} />
        <Tab label="Change Password" {...a11yProps(1)} />
      </Tabs>
      {/* section */}
      <Box sx={{ backgroundColor: theme.palette.background.body }}>
        <TabPanel value={value} index={0}>
          <PersonalDetails user={cuser} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ChangePassword user={cuser} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Profile;
