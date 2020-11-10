import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../Navigation";
import DoctorCard from "../DoctorCard";

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

export default function AdminDoctorList() {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={3}
          className={classes.marginStyle}
        >
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </Grid>
      </Container>
    </>
  );
}
