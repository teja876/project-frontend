import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DoctorDiv from "./doctordiv";
import Test from "./test";

const useStyles = makeStyles((theme) => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
}));

export default function DoctorsGallery() {
  const classes = useStyles();
  return (
    <Grid container className={classes.section1}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.marginStyle}
          color="primary"
        >
          Doctors
        </Typography>
      </Grid>

      <Grid item xs={8} sm={3}>
        <DoctorDiv />
      </Grid>
      <Grid item xs={8} sm={3}>
        <DoctorDiv />
      </Grid>
      <Grid item xs={8} sm={3}>
        <DoctorDiv />
      </Grid>
      <Grid item xs={8} sm={3}>
        <DoctorDiv />
      </Grid>
    </Grid>
  );
}
