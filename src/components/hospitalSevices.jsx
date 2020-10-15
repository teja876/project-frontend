import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3, 2),
  },
  headerStyle: {
    backgroundColor: "cornflowerblue",
  },
  tabStyle: {
    color: "whitesmoke",
  },
  bodyStyle: {
    backgroundColor: "aliceblue",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        gutterBottom
        className={classes.marginStyle}
        color="primary"
      >
        Medical Services
      </Typography>
      <AppBar position="static" color="default" className={classes.headerStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabStyle}
        >
          <Tab
            label="Hospital Service 1"
            {...a11yProps(0)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 2"
            {...a11yProps(1)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 3"
            {...a11yProps(2)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 4"
            {...a11yProps(3)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 5"
            {...a11yProps(4)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 6"
            {...a11yProps(5)}
            className={classes.tabStyle}
          />
          <Tab
            label="Hospital Service 7"
            {...a11yProps(6)}
            className={classes.tabStyle}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.bodyStyle}>
        Hospital Service Description One
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.bodyStyle}>
        Hospital Service Description Two
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.bodyStyle}>
        Hospital Service Description Three
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.bodyStyle}>
        Hospital Service Description Four
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.bodyStyle}>
        Hospital Service Description Five
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.bodyStyle}>
        Hospital Service Description Six
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.bodyStyle}>
        Hospital Service Description Seven
      </TabPanel>
    </div>
  );
}
