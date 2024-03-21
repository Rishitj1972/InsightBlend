import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Report = () => {
  const [report, setReport] = useState([]);

  const fetchReport = () => {
    axios.get("http://localhost:5000/Upload").then((response) => {
      setReport(response.data.upload);
    });
  };

  useEffect(() => {
    fetchReport();
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
          width: "700px",
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
                <TableCell>Video Name</TableCell>
                <TableCell>ShowRunner Name</TableCell>
                <TableCell>Video Thumbnail</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell>{row.upload_title}</TableCell>
                  <TableCell>{row.showrunner_name}</TableCell>
                  <TableCell>{row.upload_thumbnail}</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Report;
