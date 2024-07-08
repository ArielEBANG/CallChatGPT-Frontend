import React, { useState } from "react";
import { Box, Grid, TextField, Button, TextareaAutosize } from "@mui/material";
import axios from 'axios';

const MyForm = ({ onFormSubmit }) => {
  const [form, setForm] = useState({
    empathy: "",
    coefEmp: "",
    observation: "",
    coefObs: "",
    adaptation: "",
    coefAdapt: "",
    analyticsReasoning: "",
    coefAnalytics: "",
    collaboration: "",
    coefCollab: "",
    createReasoning: "",
    coefCreate: "",
    planification: "",
    coefPlan: "",
    perseverance: "",
    coefPers: "",
    memory: "",
    coefMem: "",
    emotion: "",
    coefEmotion: "",
    job: "",
    prompt: "",
    my_file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      my_file: e.target.files[0],
    });
  };

  const handlePromptChange = (e) => {
    setForm({
      ...form,
      prompt: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace placeholders with actual values
    let filledPrompt = form.prompt;
    for (const key in form) {
      filledPrompt = filledPrompt.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), form[key]);
    }

    // console.log('filledPrompt', filledPrompt);

    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }
      formData.append('filledPrompt', filledPrompt); // Add the filled prompt

      const response = await axios.post("http://localhost:8000/api/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      onFormSubmit(response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {[
              { label: "empathy", name: "empathy" },
              { label: "observation", name: "observation" },
              { label: "adaptation", name: "adaptation" },
              { label: "analyticsReasoning", name: "analyticsReasoning" },
              { label: "collaboration", name: "collaboration" },
              { label: "createReasoning", name: "createReasoning" },
              { label: "planification", name: "planification" },
              { label: "perseverance", name: "perseverance" },
              { label: "memory", name: "memory" },
              { label: "emotion", name: "emotion" },
            ].map((field) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2}>
            {[
              { label: "coefEmp", name: "coefEmp" },
              { label: "coefObs", name: "coefObs" },
              { label: "coefAdapt", name: "coefAdapt" },
              { label: "coefAnalytics", name: "coefAnalytics" },
              { label: "coefCollab", name: "coefCollab" },
              { label: "coefCreate", name: "coefCreate" },
              { label: "coefPlan", name: "coefPlan" },
              { label: "coefPers", name: "coefPers" },
              { label: "coefMem", name: "coefMem" },
              { label: "coefEmotion", name: "coefEmotion" },
            ].map((field) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TextareaAutosize
            minRows={4}
            placeholder="Job"
            style={{ width: "100%" }}
            name="job"
            value={form.job}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextareaAutosize
            minRows={4}
            placeholder="Prompt"
            style={{ width: "100%" }}
            name="prompt"
            value={form.prompt}
            onChange={handlePromptChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden name="my_file" onChange={handleFileChange} />
          </Button>
          {form.my_file && <p>Document choisi: {form.my_file.name}</p>}
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyForm;
