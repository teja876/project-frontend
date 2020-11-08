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
import CardMedia from "@material-ui/core/CardMedia";
import "../styles/doctor-card.css";
import { boxSizing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  doctorImage: {
    height: 50,
    width: 50,
  },
  appointment: {
    backgroundColor: "orange",
  },
  details: {
    color: "blue",
  },
  imgstyle: {
    height: "140px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "5px",
    boxSizing: "border-box",
  },
  cardPadding: {
    padding: "10px",
    boxSizing: "border-box",
  },
}));
export default function DoctorCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} elevation={3}>
        <Grid item xs={12} container justify="space-between">
          <Grid xs={4}>
            <img
              className={classes.imgstyle}
              alt="Doctor Name"
              src="data:image/jpeg;base64,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"
            ></img>
          </Grid>
          <Grid xs={6} sm={8} className={classes.cardPadding}>
            <Typography>
              Name:{" "}
              <Button size="small" color="primary" className={classes.details}>
                Doctor Name
              </Button>
            </Typography>
            <Typography>
              Hospital:{" "}
              <Button size="small" color="primary" className={classes.details}>
                Hospital Name
              </Button>
            </Typography>
            <Typography gutterBottom>Department: Department Name</Typography>
            <Grid container justify="flex-end">
              <Button variant="contained" className={classes.appointment}>
                Appointment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
