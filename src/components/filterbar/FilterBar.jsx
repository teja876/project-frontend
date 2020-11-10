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
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  details: {
    color: "grey",
  },
  searchButton: {
    backgroundColor: "dodgerblue",
    color: "white",
  },
}));
export default function FilterBar() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container justify="space-between">
            <TextField id="outlined-basic" label="City" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Departments"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Hositals"
              variant="outlined"
            />
            <Button variant="contained" className={classes.searchButton}>
              Search
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
