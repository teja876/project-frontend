import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Mainbody from "./components/homeBody";
import Navigation from "./components/Navigation";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import Home from "./components/home";
import DoctorsList from "./components/DoctorsList";
import DoctorPage from "./components/Doctorpage";
import HospitalPage from "./components/hospitalPage";
import AppointmentsHistory from "./components/AppointmentsHistory";
import AdminHome from "./components/admin-components/home";
import ListOfAppointments from "./components/admin-components/listOfAppointments";
import AdminDoctorList from "./components/admin-components/adminDoctorList";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/hospitalInfo/:hospitalID" component={HospitalPage} />
          <Route path="/doctorInfo/:doctorID" component={DoctorPage} />
          <Route path="/doctorsList" component={DoctorsList} />
          <Route path="/history" component={AppointmentsHistory} />
          <Route path="/admin/dashboard" component={AdminHome} />
          <Route
            path="/admin/listOfAppointments"
            component={ListOfAppointments}
          />
          <Route path="/admin/doctorsList" component={AdminDoctorList} />
          <Route path="/admin/doctor/:doctorID" component={DoctorPage} />
          <Route path="/admin" component={AdminHome} />

          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
