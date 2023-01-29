import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles, useTheme } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import Login from "../auth/Login";
import { userMenus, adminMenus, guestMenus, menuOptions } from "./Menus";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "2em",
    },
  },
  title: {
    // flexGrow: 1,
    fontWeight: "700",
    color: "white",
  },
  menuButton: {
    ...theme.typography.menuButtonFont,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
  },
  tabCotained: {
    marginLeft: "auto",
  },
  menu: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "0",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
}));

export const Header = (props) => {
  const classes = useStyles();
  const isLoggedIn = useState(true);
  const isUser = useState(false);
  const isAdmin = useState(true);
  const [menus, setMenus] = useState(adminMenus);

  // if (isLoggedIn && isUser) setMenus(userMenus);
  // if (isLoggedIn && isAdmin) setMenus(adminMenus);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  useEffect(() => {
    [...menuOptions, ...menus].forEach((menu) => {
      switch (location.pathname) {
        case `${menu.link}`:
          if (props.value !== menu.activeIndex) {
            props.setValue(menu.activeIndex);
            //only for menu items
            if (
              menu.selectedIndex &&
              menu.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(menu.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, menus]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabCotained}
        textColor="inherit"
        indicatorColor="primary"
      >
        {menus.map((menu, i) => {
          return (
            <Tab
              key={`${menu}${i}`}
              className={classes.menuItem}
              component={Link}
              to={menu.link}
              label={menu.name}
              aria-owns={menu.ariaOwns}
              aria-haspopup={menu.ariaPopup}
              onMouseOver={menu.mouseOver}
            />
          );
        })}
        {!isLoggedIn && <Tab label="Login" onClick={() => setOpenLogin(true)} />}
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            minWidth: 200,
            backgroundColor: theme.palette.common.blue,
            color: "white",
          },
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding component="nav" aria-label="Sidebar">
          {menus.map((menu, i) => {
            return (
              <ListItem
                key={`${menu}${i}`}
                button
                selected={props.value === menu.activeIndex}
                onClick={(event) => {
                  handleChange(event, menu.activeIndex);
                  setOpenDrawer(false);
                }}
                component={Link}
                to={menu.link}
                classes={{ selected: classes.drawerItemSelected }}
                divider
                sx={{
                  color: "white",
                  opacity: 0.7,
                  "&:hover": {
                    opacity: 1,
                  },
                  "&.Mui-selected, &.Mui-selected:hover": {
                    opacity: 1,
                  },
                }}
              >
                <ListItemText primary={menu.name} />
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <Button
        color="inherit"
        sx={{ ml: "auto" }}
        onClick={() => setOpenLogin(true)}
      >
        Login
      </Button>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          // marginLeft: "auto",
          color: "white",
        }}
        // disableRipple
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ zIndex: theme.zIndex.app_bar }}
        >
          <Toolbar>
            <Button component={Link} to="/" className={classes.logo}>
              <Typography variant="h6" className={classes.title}>
                Exam Portal
              </Typography>
            </Button>
            {matches ? drawer : tabs}
            <Menu
              id="exam-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              keepMounted
              style={{ zIndex: theme.zIndex.app_bar + 1 }}
              PaperProps={{
                sx: {
                  elevation: 0,
                  backgroundColor: theme.palette.common.blue,
                  color: "white",
                },
              }}
            >
              {menuOptions.map((option, i) => {
                return (
                  <MenuItem
                    key={`${option}${i}`}
                    classes={{ root: classes.menuItem }}
                    component={Link}
                    to={option.link}
                    onClick={(event) => {
                      handleMenuItemClick(event, i);
                      props.setValue(1);
                      handleClose(event);
                    }}
                    selected={i === props.selectedIndex && props.value === 1}
                  >
                    {option.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />

      <Dialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        fullWidth
        sx={{
          zIndex: theme.zIndex.app_bar + 1,
        }}
      >
        <Login setOpenLogin={setOpenLogin} />
      </Dialog>
    </React.Fragment>
  );
};
