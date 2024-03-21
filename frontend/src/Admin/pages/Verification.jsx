import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Verification = () => {
  const [Verify, setVerify] = useState([]);

  const fetchVerification = () => {
    axios.get("http://localhost:5000/Showrunner").then((response) => {
      setVerify(response.data.showrunner);
    });
  };

const Accept = (Id) =>{
    axios.patch(`http://localhost:5000/ShowrunnerUpdate/${Id}`).then((response) => {
        console.log(response.data);
    }); 
}

const Reject = (Id) =>{
    axios.patch(`http://localhost:5000/ShowrunnerReject/${Id}`).then((response) => {
        console.log(response.data);
    }); 
}
  useEffect(() => {
    fetchVerification();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          width: "1000px",
          mb: "40px",
        }}
      >
        <TableContainer
          sx={{ borderRadius: "10px", border: "1px solid black" }}
        >
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>ShowRunner Photo</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>ShowRunner Proof</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Verify.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell>{row.showrunner_name}</TableCell>
                  <TableCell>{row.showrunner_photo}</TableCell>
                  <TableCell>{row.showrunner_email}</TableCell>
                  <TableCell>{row.showrunner_proof}</TableCell>
                  <TableCell sx={{display:"flex",gap:"5px",flexDirection:"column"}}>
                    <Button variant="outlined" color="success" onClick={() => Accept(row.showrunner_id)}>
                      Accept
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => Reject(row.showrunner_id)}>
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Verification;
