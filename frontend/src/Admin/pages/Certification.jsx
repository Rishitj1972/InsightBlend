import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  //Data tables
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
const Certification = () => {

  const [certificationName,setCertificationName]= useState("");
  const [certificationData,setCertificationData]=useState([]);

  const handleSubmit =(event)=>{
    event.preventDefault();
    const data ={
      certification_name:certificationName,
    };
    axios.post("http://localhost:5000/Certification",data).then((response)=>{
      console.log(response.data);
      setCertificationName("");
    });
  };

  const fetchCertification =() =>{
    axios.get("http://localhost:5000/Certification").then((response) =>{
      console.log(response.data.certification);
      setCertificationData(response.data.certification);
    });
  };

  useEffect(()=>{
    fetchCertification();
  },[]);

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
    <Box
      sx={{
        // backgroundColor: "#F8FAE5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "30rem ",
        height: "25rem",
        margin: "auto",
        mt: "50px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#76453B",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          Content Type
        </h1>
        <Box
          sx={{
            width: "300px",
          }}
        >
          <TextField
            id="filled-basic"
            label="Content"
            variant="filled"
            sx={{
              width: "100%",
            }}
            onChange={(event)=>setCertificationName(event.target.value)}
            value={certificationName}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: "35px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#B19470",
            "&:hover": {
              backgroundColor: "#76453B",
            },
            height: "40px",
            width: "120px",
            borderRadius: "30px",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
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
          component={Paper}
          sx={{ borderRadius: "10px", border: "1px solid black" }}
        >
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SL No</TableCell>
                <TableCell >Certification Name</TableCell>
                <TableCell >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificationData.map((row,key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell >{row.certification_name}</TableCell>
                  <TableCell >Delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  </Box>
  )
}

export default Certification