/** @format */

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ReposContext } from "../context/context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import AddTaskIcon from "@mui/icons-material/AddTask";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import ReplayIcon from "@mui/icons-material/Replay";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 2,
};
function Column() {
  const data = useSelector((state) => state.data.reposs);

  const { isLoading, repos } = React.useContext(ReposContext);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  console.log(repos);

  return (
    <>
      {/* Data Table */}
      <Wrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="customized  table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Desciption</TableCell>
                <TableCell align="right">Watchers Count</TableCell>
                <TableCell align="right">Language</TableCell>
                <TableCell align="right">Open Issues</TableCell>
                <TableCell align="right">Private</TableCell>
                <TableCell align="right">
                  <ButtonA>
                    <Button onClick={handleOpen}>
                      <Link to="/AddNew" style={textWhite}>
                        ADD
                      </Link>
                    </Button>
                  </ButtonA>
                </TableCell>
                <TableCell align="right">
                  <ButtonR>
                    <Button type="button">Load</Button>
                  </ButtonR>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                const {
                  id,
                  name,
                  description,
                  watchers_count,
                  language,
                  open_issues,
                  private: privates,
                } = row;
                return (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="right">{name}</TableCell>
                    <TableCell align="right">{description}</TableCell>
                    <TableCell align="right">{watchers_count}</TableCell>
                    <TableCell align="right">{language}</TableCell>
                    <TableCell align="right">{open_issues}</TableCell>
                    <TableCell align="right">
                      {privates ? "true" : "false"}
                    </TableCell>
                    <TableCell>
                      <ButtonE>
                        <Button type="button">Edit</Button>
                      </ButtonE>
                    </TableCell>
                    <TableCell>
                      <ButtonD>
                        <Button type="button">Delete</Button>
                      </ButtonD>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
`;
const ButtonE = styled.button`
  background: #faaf46;
  button {
    color: white;
  }
  color: white;
  border: none;
  border-radius: 3px;
`;
const ButtonD = styled.button`
  background: rgb(223, 89, 89);
  button {
    color: white;
  }
  border: none;
  border-radius: 3px;
`;
const ButtonA = styled.button`
  background: #21a215;
  button {
    color: white;
  }
  border: none;
  border-radius: 3px;
`;
const ButtonR = styled.button`
  background: gray;
  button {
    color: white;
  }
  border: none;
  border-radius: 3px;
`;
const textWhite = {
  color: "white",
};
export default Column;
