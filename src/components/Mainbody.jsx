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
import HospitalBody from "./hospitalbody";
import DoctorPage from "./Doctorpage";
import AdminHome from "./admin-components/home";

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

export default function Mainbody() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        {/* <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <FilterBar />
          </Grid>
          <Grid container direction="row" justify="space-between" spacing={3}>
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </Grid>
        </Grid> */}
        {/* <HospitalBody /> */}
        {/* <DoctorPage /> */}
        <AdminHome />
      </Container>
    </>
  );
}
