import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HotelIcon from "@material-ui/icons/Hotel";
import HospitalCard from "./HospitalCard";
import DoctorCard from "./DoctorCard";
import FilterBar from "./filterbar/FilterBar";
import HospitalBody from "./hospitalPage";
import DoctorPage from "./Doctorpage";
import AdminHome from "./admin-components/home";
import hospitals from "../data/hospital";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  appIcon: {
    height: 30,
    width: 30,
  },
  locationIcon: {
    height: 20,
    width: 20,
  },
  wardStyle: {
    color: "crimson",
  },
  marginStyle: {
    marginTop: "30px",
  },
}));

export default function HospitalsList() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        spacing={3}
        className={classes.marginStyle}
      >
        {hospitals.map((el) => (
          <HospitalCard hospital={el} />
        ))}
      </Grid>
    </>
  );
}
