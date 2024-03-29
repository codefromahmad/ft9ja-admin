import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ZumaDashboard from "../Pages/ZumaDashboard";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Affiliate from "./Affiliate";
import { Link } from "react-router-dom";
function MainNav() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const desktop = {
    fontWeight: "494",
    borderRadius: "5px",
    m: 1,
    minHeight: "0px",
    backgroundColor: "#FEFEFE",
    textTransform: "none",
    color: " rgba(0, 0, 0, 0.8)",
    "&.Mui-selected": {
      //   backgroundColor: "#359602",
      color: "black",
    },
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ textAlign: "-webkit-center" }}>{children}</Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box className="Nav1">
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        className="TabGrp1"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        <Tab
          className="Tab1"
          sx={desktop}
          label="Dashboard"
          component={Link}
          to={"/dashboards"}
        />
        <Tab
          component={Link}
          to={"/affiliate"}
          className="Tab1"
          index={1}
          sx={desktop}
          label="Affiliate"
        />
        <Tab
          className="Tab1"
          index={2}
          sx={desktop}
          aria-selected="true"
          component={Link}
          to={"/apps"}
          label="Apps"
          style={{ backgroundColor: "#359602", color: "white" }}
        />
        <Tab
          component={Link}
          to={"/profile"}
          className="Tab1"
          {...a11yProps(3)}
          sx={desktop}
          label="Profile"
        />
      </Tabs>
    </Box>
  );
}

export default MainNav;
