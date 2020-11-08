import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import users from "../data/users";
import authService from "../service/authService";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState("user");

  const [account, setAccount] = React.useState({
    email: "",
    password: "",
    userType: "user",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = React.useState({
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    firstName: "",
    firstNameError: false,
    lastName: "",
    lastNameError: false,
  });

  const handleChange = (property, event) => {
    const accountCopy = { ...account };

    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
    if (property === "userType") return;
    validate(property, event);
  };

  const validate = (property, event) => {
    if (property === "email") emailValidate(event.target.value);
    else if (property === "password") passwordValidate(event.target.value);
    else if (property === "firstName") firstNameValidate(event.target.value);
    else lastNameValidate(event.target.value);
  };

  const emailValidate = (email) => {
    const errorCopy = { ...error };
    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      errorCopy["email"] = "Please Enter a valid Email";
      errorCopy.emailError = true;
    } else {
      errorCopy["email"] = "";
      errorCopy.emailError = false;
    }
    setError(errorCopy);
  };

  const passwordValidate = (password) => {
    const errorCopy = { ...error };
    if (password.length < 8) {
      errorCopy["password"] = "Password must contain minimum 8 characters";
      errorCopy.passwordError = true;
    } else {
      errorCopy["password"] = "";
      errorCopy.passwordError = false;
    }
    setError(errorCopy);
  };

  const firstNameValidate = (firstName) => {
    const errorCopy = { ...error };
    if (firstName.length > 0) {
      errorCopy["firstName"] = "";
      errorCopy.firstNameError = false;
    } else {
      errorCopy["firstName"] = "Enter First Name";
      errorCopy.firstNameError = true;
    }
    setError(errorCopy);
  };

  const lastNameValidate = (lastName) => {
    const errorCopy = { ...error };
    if (lastName.length > 0) {
      errorCopy["lastName"] = "";
      errorCopy.lastNameError = false;
    } else {
      errorCopy["lastName"] = "Enter Last Name";
      errorCopy.lastNameError = true;
    }
    setError(errorCopy);
  };

  const handleSignUp = () => {
    users.push(account);
    authService.doLogin(account.email, account.userType);
    props.history.push("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(event) => handleChange("firstName", event)}
                error={error.firstNameError}
                helperText={error.firstName}
                value={account.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(event) => handleChange("lastName", event)}
                error={error.lastNameError}
                helperText={error.lastName}
                value={account.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => handleChange("email", event)}
                error={error.emailError}
                helperText={error.email}
                value={account.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => handleChange("password", event)}
                error={error.passwordError}
                helperText={error.password}
                value={account.password}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                aria-label="User Type"
                name="Role"
                value={account.userType}
                onChange={(event) => handleChange("userType", event)}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button
            onClick={handleSignUp}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
