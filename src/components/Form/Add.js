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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
  // validate
  const {
    register,
    formState: { error },
  } = useForm();
  // fields
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [watcher, setWatcher] = useState("");
  // const [language, setLanguage] = useState("");
  // const [openIssue, setOpenIssue] = useState("");
  // const [prv, setPrivate] = useState("");
  const [repos, setRepos] = useState({
    id: "",
    name: "",
    description: "",
    watcher: 0,
    language: "",
    openIssue: 0,
    prv: "",
  });
  const [stock, setStock] = useState([]);
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRepos({ ...repos, [name]: value });
  };
  console.log(repos);
  // handleSubmit
  const dispatch = useDispatch();
  const navigate = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_DATA", payload: repos });
    navigate.push("/");
  };
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
                  label="ID"
                  variant="outlined"
                  name="id"
                  value={repos.id}
                  onChange={handleChange}
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
                autoComplete="on">
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={repos.userRepos}
                  onChange={handleChange}
                />
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
                  name="description"
                  value={repos.description}
                  onChange={handleChange}
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
                  name="watcher"
                  label="Watchers Count"
                  variant="outlined"
                  type="number"
                  value={repos.watcher}
                  onChange={handleChange}
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
                <TextField
                  id="language"
                  name="language"
                  label="Language"
                  variant="outlined"
                  value={repos.language}
                  onChange={handleChange}
                />
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
                <TextField
                  id="issues"
                  label="Open Issues"
                  variant="outlined"
                  type="number"
                  name="openIssue"
                  value={repos.openIssue}
                  onChange={handleChange}
                />
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
                    value={repos.prv}
                    label="private"
                    name="prv"
                    onChange={handleChange}>
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
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
