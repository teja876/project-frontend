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
import Tooltip from "@material-ui/core/Tooltip";

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
export default function HospitalCard(props) {
  const classes = useStyles();
  const { hospital } = props;

  const handleDetails = () => {};

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} elevation={3}>
        <Grid item xs={12} container justify="space-between">
          <Grid item xs={10}>
            <Typography variant="h5">{hospital.name}</Typography>
          </Grid>
          <Grid container xs={2} justify="flex-end" spacing={0}>
            <Tooltip title="book an appointment">
              <IconButton>
                <ControlPointIcon
                  className={classes.appIcon}
                  color="secondary"
                />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              <LocationOnIcon className={classes.locationIcon} />
              {hospital.address}
            </Typography>
          </Grid>

          <Typography variant="subtitle2" gutterBottom>
            Check the Ward Vacancy here:
            <Tooltip title="ward vacany">
              <Button className={classes.wardStyle}>
                <HotelIcon />
              </Button>
            </Tooltip>
          </Typography>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => handleDetails()}
              >
                View Details
              </Button>
            </Grid>
            <Grid xs={12} sm={6}>
              <Button fullWidth variant="outlined" color="primary">
                view Doctors
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
