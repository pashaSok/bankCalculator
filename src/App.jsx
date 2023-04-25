import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
// import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
// import TuenureSelect from "./Components/TuenureSelect";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            {/* <TenureSelect /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
