import React, { useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import CandidateFile from "../pages/CandidateFile";
import Home from "../pages/Home";

const SplitPage = () => {
  const [formResults, setFormResults] = useState(null);

  const handleFormSubmit = (results) => {
    setFormResults(results);
  };
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container>
        <Grid item xs={5.5}>
          <Box sx={{ padding: 2, height: '100%', backgroundColor: '#fff' }}>
          <fieldset>
            <legend>Formulaire des données du candidat</legend>
            <CandidateFile onFormSubmit={handleFormSubmit} />
          </fieldset>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5.5}>
          <Box sx={{ padding: 2, height: '100%', backgroundColor: '#fff' }}>
            <Home formResults={formResults} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SplitPage;
