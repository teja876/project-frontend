import React from "react";
import Navigation from "./Navigation";
import "../App.css";
import Container from "@material-ui/core/Container";
import HospitalsList from "./hospitalsList";
import Grid from "@material-ui/core/Grid";
import FilterBar from "./filterbar/FilterBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Grid item xs={12}>
          <FilterBar />
        </Grid>
        <HospitalsList />
      </Container>
    </>
  );
}
