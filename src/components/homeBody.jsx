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
import DoctorsList from "./DoctorsList";
import UserProfile from "./UserProfile";
import AppointmentsHistory from "./AppointmentsHistory";
import HospitalsList from "./hospitalsList";
import ListOfAppointments from "./admin-components/listOfAppointments";

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
}));

export default function HomeBody() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        {/* <Grid container spacing={3} direction="column"> */}
        {/* <Grid item xs={12}>
            <FilterBar />
          </Grid> */}
        {/* <AppointmentsHistory /> */}
        <HospitalsList />
        {/* <AdminHome /> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}
