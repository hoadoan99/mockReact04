/** @format */

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
// import AddTaskIcon from "@mui/icons-material/AddTask";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import ReplayIcon from "@mui/icons-material/Replay";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  textAlign: "center",
  border: "none",
  boxShadow: "none",
  padding: theme.spacing(1),
}));

function Add() {
  const [prv, setPrivate] = React.useState("");
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setPrivate(event.target.value);
  };

  // submit
  const [item, setItem] = useState({
    id: "",
    name: "",
    description: "",
    watcher: 0,
    language: "",
    issues: 0,
    private: false,
  });

  const onIdChange = (e) => setId(e.target.value);
  const collectData = () => {};
  const handleSubmit = () => console.log(id);
  return (
    <Paper sx={{ padding: "20px 0", marginTop: "34px" }}>
      <Box sx={{ flexGrow: 1, margin: "23px 0" }}>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Typography
                sx={{ width: "90%", margin: "0 auto", fontSize: "25px" }}
                noWrap>
                Add New User's Repos
              </Typography>
            </Item>
          </Grid>
        </Grid>
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container>
          <Grid item xs={6}>
            {/* ID  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="id"
                  label="ID"
                  variant="outlined"
                  value={id}
                  onChange={onIdChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {/* Name  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField id="name" label="Name" variant="outlined" />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container>
          <Grid item xs={12}>
            {/* Desciption  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="description"
                  label="Desciption"
                  placeholder="Enter Desciption"
                  multiline
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container>
          <Grid item xs={6}>
            {/* Watchers Count  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="watcher"
                  label="Watchers Count"
                  variant="outlined"
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {/* Language  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField id="language" label="Language" variant="outlined" />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container>
          <Grid item xs={6}>
            {/* Open Issues  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField id="issues" label="Open Issues" variant="outlined" />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {/* Private  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Private</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="private"
                    value={prv}
                    label="private"
                    onChange={handleChange}>
                    <MenuItem value={"true"}>True</MenuItem>
                    <MenuItem value={"fakse"}>False</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}

        <Grid sx={{ width: "50%", margin: "0 auto" }} container spacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Item style={noPadding}>
              <Button style={btn} onClick={handleSubmit}>
                Submit
              </Button>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item style={noPadding}>
              <Button style={btn}>Cancel</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
const btn = {
  width: "100%",
  backgroundColor: "#1976d2",
  color: "white",
};
const noPadding = {
  padding: "0",
};
export default Add;
