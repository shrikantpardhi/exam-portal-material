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
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "10px",
    marginRight: "10px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.5,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuOptions = [
    {
      name: "Exams",
      link: "/exams",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Exam Category",
      link: "/categories",
      activeIndex: 1,
      selectedIndex: 1,
    },
  ];
  const menus = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Exams",
      link: "/exams",
      activeIndex: 1,
      ariaOwns: anchorEl ? "exam-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "Subject",
      link: "/subjects",
      activeIndex: 2,
    },
    {
      name: "Question",
      link: "/questions",
      activeIndex: 3,
    },
    {
      name: "Result",
      link: "/results",
      activeIndex: 4,
    },
    {
      name: "Customers",
      link: "/customers",
      activeIndex: 5,
    },
    {
      name: "Profile",
      link: "/profile",
      activeIndex: 6,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 7,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 8,
    },
  ];

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
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
        indicatorColor="primary"
      >
        {/* <Tab
          aria-owns={anchorEl ? "exam-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          component={Link}
          to="/exams"
          label="Exam"
        /> */}

        {menus.map((menu, i) => {
          return (
            <Tab
              key={`${menu}${i}`}
              className={classes.tab}
              component={Link}
              to={menu.link}
              label={menu.name}
              aria-owns={menu.ariaOwns}
              aria-haspopup={menu.ariaPopup}
              onMouseOver={menu.mouseOver}
            />
          );
        })}
        <Tab
          className={classes.tab}
          component={Link}
          to="/login"
          label="Login"
        />
        <Tab
          className={classes.tab}
          component={Link}
          color="secondary"
          to="/register"
          label="Register"
        />
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding component="nav" aria-label="Sidebar">
          {menus.map((menu, i) => {
            return (
              <ListItem
                divider
                button
                selected={props.value === menu.activeIndex}
                onClick={(event) => {
                  handleChange(event, menu.activeIndex);
                  setOpenDrawer(false);
                }}
                component={Link}
                to={menu.link}
                key={`${menu}${i}`}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText
                  className={classes.drawerItem}
                  primary={menu.name}
                />
              </ListItem>
            );
          })}
          <ListItem
            divider
            button
            selected={props.value === 7}
            onClick={(event) => {
              handleChange(event, 7);
              setOpenDrawer(false);
            }}
            component={Link}
            to="/register"
            className={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemText className={classes.drawerItem} primary="Register" />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
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
              classes={{ paper: classes.menu }}
              elevation={0}
              keepMounted
              style={{ zIndex: 1302 }}
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
    </React.Fragment>
  );
};
