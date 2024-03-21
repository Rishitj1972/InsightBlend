import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  margin: 0,
});

const Add = () => {
  const [Caption, setCaption] = useState("");
  const [open, setOpen] = useState(false);
  const [videos, setVideo] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [Title, setTitle] = useState("");

  const Id = sessionStorage.getItem("Sid");

  const handleSubmit = () => {
    console.log("hi");
    const frm = new FormData();
    frm.append("upload_file", videos);
    frm.append("upload_desc", Caption);
    frm.append("upload_thumbnail", photo);
    frm.append("upload_title", Title);
    frm.append("genres_id",genresName);
    frm.append("certification_id",certificationName);
    frm.append("language_id",languageName);
    frm.append("showrunner_id", Id);

    axios.post("http://localhost:5000/Upload/", frm).then((response) => {
      console.log(response.data);
    });
  };

  const [genresName, setGenresName] = useState("");
  const [genresData, setGenresData] = useState([]);
  const [certificationName,setCertificationName]= useState("");
  const [certificationData,setCertificationData]=useState([]);
  const [languageName,setLanguageName]=useState("");
  const [LanguageData,setLanguageData]=useState([]);


  const fetchGenres =() => {
    axios.get("http://localhost:5000/Genres").then((response) => {
      console.log(response.data.genres);
      setGenresData(response.data.genres)
    });
  };


  const fetchCertification =() =>{
    axios.get("http://localhost:5000/Certification").then((response) =>{
      console.log(response.data.certification);
      setCertificationData(response.data.certification);
    });
  };

  const fetchLanguage=()=>{
    axios.get("http://localhost:5000/Language").then((response)=>{
      console.log(response.data.language);
      setLanguageData(response.data.language);
    });
  };


  useEffect(() => {
    fetchGenres();
    fetchCertification();
    fetchLanguage();
  }, []); 


  return (
    <Box sx={{ mt: 15 }}>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ bottom: 1, left: { xs: "calc(50% - 25px)", md: 40 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={500}
          height={500}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            color="gray"
            textAlign="center"
            sx={{ mb: "30px" }}
          >
            Post
          </Typography>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            sx={{ width: "100%", mb: "20px" }}
            onChange={(event) => setTitle(event.target.value)}
            value={Title}
          />
          <TextField
            sx={{ width: "100%" }}
            onChange={(event) => setCaption(event.target.value)}
            value={Caption}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="About!"
            variant="standard"
          />
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              mt: "20px",
              mb: "20px",
              justifyContent: "center",
            }}
          >
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Video/File
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setVideo(event.target.files[0])}
              />
            </Button>

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Thumbnail
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setPhoto(event.target.files[0])}
              />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              mt: "20px",
              mb: "100px",
            }}
          >
            <FormControl sx={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label">Genres</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Genres"
                onChange={(event) => setGenresName(event.target.value)}
                value={genresName}
              >
                {genresData.map((row, key) => (
                  <MenuItem value={row.genres_id} key={key}>{row.genres_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label">Certification</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Certification"
                onChange={(event) => setCertificationName(event.target.value)}
                value={certificationName}
              >
                {certificationData.map((row,key)=>(
                <MenuItem value={row.certification_id} key={key}>{row.certification_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label">
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                onChange={(event) => setLanguageName(event.target.value)}
                value={languageName}
              >
                {LanguageData.map((row,key)=>(
                <MenuItem value={row.language_id} key={key}>{row.language_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <ButtonGroup
            fullWidth="contained"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleSubmit}>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Add;
