import React from "react";
import Mainbody from "./Mainbody";
import Navigation from "./Navigation";
import "../App.css";
// import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/signUp";

export default function Home() {
  return (
    <>
      <Navigation />
      <Mainbody />
    </>
  );
}
