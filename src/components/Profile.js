import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { user } from "../data";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const RowItem = (props) => {
  let { name, value } = props;
  const theme = useTheme();
  return (
    <Grid item sx={12} xs={12} md={6} lg={6}>
      <Box
        sx={{
          ...theme.shape.box,
          backgroundColor: theme.palette.background.lightGrey, justifyContent:"flex-start"
        }}
      >
        <Grid
          container
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ m: 1 }}
        >
          <Grid item>
            <Typography variant="body1">
              {name}
              <span>:</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "800", fontSize: "1.25rem" }}>
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const PersonalDetails = (props) => {
  const theme = useTheme();

  return (
    <Box
      component="form"
      sx={{
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={1}>
        <RowItem name="First Name" value={props.user.firstName} />
        <RowItem name="Last Name" value={props.user.lastName} />
        <RowItem name="Email ID" value={props.user.email} />
        <RowItem name="Mobile" value={props.user.mobile} />
        <RowItem name="Address" value={props.user.address} />
        <RowItem name="City" value={props.user.city} />
        <RowItem name="State" value={props.user.state} />
        <RowItem name="Education" value={props.user.education} />
      </Grid>
    </Box>
  );
};

const Profile = (props) => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const [cuser, setUser] = React.useState(user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        m: 3,
        flexGrow: 1,
        display: "flex",
      }}
    >
      {/* tabs */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "20%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          //   src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150, right: 0, mb: 1 }}
        >
          SP
        </Avatar>
        <Tab
          label="Personal"
          {...a11yProps(0)}
          sx={{ justifyContent: "flex-end" }}
        />
        <Tab
          label="Change Password"
          {...a11yProps(1)}
          sx={{ justifyContent: "flex-end" }}
        />
        <Tab
          label="Log Out"
          {...a11yProps(2)}
          sx={{ justifyContent: "flex-end" }}
        />
      </Tabs>
      {/* section */}
      <TabPanel value={value} index={0}>
        <PersonalDetails user={cuser} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalDetails user={cuser} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PersonalDetails user={cuser} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PersonalDetails user={cuser} />
      </TabPanel>
    </Box>
  );
};

export default Profile;
