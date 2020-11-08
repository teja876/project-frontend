import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Mainbody from "./components/Mainbody";
import Navigation from "./components/Navigation";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import Home from "./components/home";

export default function App() {
  return (
    <>
      {/* <Navigation />
      <Mainbody /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
