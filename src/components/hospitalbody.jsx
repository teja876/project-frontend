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
import HospitalServices from "./hospitalSevices";
import DoctorsGallery from "./doctorsGallery";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  hospitalImgStyle: {
    height: "300px",
    width: "100%",
    // border: "1px solid #ddd",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "4px",
    // padding: "5px",
    boxSizing: "border-box",
  },
  paddingStyle: {
    padding: "10px",
    boxSizing: "border-box",
  },
  locationIcon: {
    height: 20,
    width: 20,
  },
  marginStyle: {
    marginTop: "20px",
  },
}));

export default function HospitalBody() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6} className={classes.paddingStyle}>
        <img
          alt="Hospital"
          className={classes.hospitalImgStyle}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS437RTVuHVQuWXRsZkMv_qUy7bhnNm7_g9Fg&usqp=CAU"
        ></img>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.paddingStyle}>
        <Typography variant="h4" gutterBottom color="primary">
          Hospital Name
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.marginStyle}
          color="primary"
        >
          Contact Details:
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          <LocationOnIcon className={classes.locationIcon} />
          Near Campus street, Banglore, Karnataka, D.no - 28-2-22
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email : doctor@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone Number: 9409304923
        </Typography>
      </Grid>

      <HospitalServices />
      <DoctorsGallery />
    </Grid>
  );
}
