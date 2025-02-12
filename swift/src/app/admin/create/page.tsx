'use client'
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = async (e: React.FocusEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('../../api/content', { title, description })
      if (response) {
        alert("Data Submited")
      } else {
        console.log("OOPS");
      }
    } catch (error) {
      alert("Something Error")
    }
  }
    return (
      <Box
        component="form"
        sx={{
          maxWidth: 400,
          margin: "auto",
          mt: 5,
          p: 3,
          color: "#fff",
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Registration Form
        </Typography>

        <TextField
          fullWidth
          label="Title"
          name="Title"
          margin="normal"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          fullWidth
          label="event"
          name="event"
          type="text"
          margin="normal"
          variant="outlined"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button

          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    );
  };

  export default CreateEvent
