/** @format */

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  textAlign: "center",
  border: "none",
  boxShadow: "none",
  padding: theme.spacing(1),
}));

function Add() {
  return (
    <Box sx={{ flexGrow: 1, margin: "25px 0" }}>
      <Grid container>
        <Grid item>
          <Typography noWrap>
            {" "}
            <h2>Add New User's Repos</h2>{" "}
          </Typography>
        </Grid>
      </Grid>
      {/* group  */}
      <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} spacing={1}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
      {/* end-group  */}
      {/* group  */}
      <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} spacing={1}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
      {/* end-group  */}
      {/* group  */}
      <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} spacing={1}>
          <Item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
      {/* end-group  */}
      <Grid sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <Item
            sx={{
              "& > :not(style)": { width: "100%" },
            }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "90%" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid sx={{ width: "50%", margin: "0 auto" }} container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Item style={noPadding}>
            <Button style={btn}>Edit</Button>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item style={noPadding}>
            <Button style={btn}>Delete</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
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
