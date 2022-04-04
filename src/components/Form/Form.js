/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
function Form() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <h4>Add New Repos</h4>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="ID"
          placeholder="Enter ID"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Enter Name"
          multiline
        />{" "}
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Watchers Count"
          placeholder="Enter Watchers Count"
          multiline
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Language"
          placeholder="Enter Language"
          multiline
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Open Issues"
          placeholder="Enter Open Issues"
          multiline
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Private"
          placeholder="Enter Private"
          multiline
        />{" "}
        <TextField
          id="filled-multiline-static"
          label="Description"
          placeholder="Enter Description"
          multiline
          rows={4}
          variant="filled"
        />
      </div>
      <div>
        <Button>Submit</Button>
        <Button>Save As Draft</Button>
      </div>
    </Box>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export default Form;
