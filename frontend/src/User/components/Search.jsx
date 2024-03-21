import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";

const Search = ({
  setCertificationName,
  setGenresName,
  setLanguageName,
  certificationName,
  genresName,
  languageName,
}) => {
  const [genresData, setGenresData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);
  const [LanguageData, setLanguageData] = useState([]);

  const fetchGenres = () => {
    axios.get("http://localhost:5000/Genres").then((response) => {
      console.log(response.data.genres);
      setGenresData(response.data.genres);
    });
  };

  const fetchCertification = () => {
    axios.get("http://localhost:5000/Certification").then((response) => {
      console.log(response.data.certification);
      setCertificationData(response.data.certification);
    });
  };

  const fetchLanguage = () => {
    axios.get("http://localhost:5000/Language").then((response) => {
      console.log(response.data.language);
      setLanguageData(response.data.language);
    });
  };

  const handleClear =() => {
    setCertificationName(0)
    setGenresName(0)
    setLanguageName(0)
  }

  useEffect(() => {
    fetchGenres();
    fetchCertification();
    fetchLanguage();
  }, []);

  return (
    <Card sx={{ p: 3, my: 3 ,backgroundColor:"#222831",borderRadius:6}} >
        <Box sx={{display:'flex',justifyContent:'space-between'}}>

      <Typography>Filter</Typography>
      <Button onClick={handleClear}>Clear</Button>
        </Box>
      <Stack direction={"row"} gap={3} sx={{ m: 3 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">Genres</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Genres"
            onChange={(event) => setGenresName(event.target.value)}
            value={genresName}
          >
            {genresData.map((row, key) => (
              <MenuItem value={row.genres_id} key={key}>
                {row.genres_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Certification
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Certification"
            onChange={(event) => setCertificationName(event.target.value)}
            value={certificationName}
          >
            {certificationData.map((row, key) => (
              <MenuItem value={row.certification_id} key={key}>
                {row.certification_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Language"
            onChange={(event) => setLanguageName(event.target.value)}
            value={languageName}
          >
            {LanguageData.map((row, key) => (
              <MenuItem value={row.language_id} key={key}>
                {row.language_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Card>
  );
};

export default Search;
