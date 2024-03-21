import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
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

  const [Caption,setCaption]=useState("")
  const [open, setOpen] = useState(false);
  const [videos, setVideo] = useState([]);

  const handleSubmit = () => {
    console.log('hi');
    const frm = new FormData();
    frm.append("upload_file", videos);
    frm.append("upload_desc", Caption);
    frm.append("showrunner_id", 1);

    axios.post("http://localhost:5000/Upload/", frm).then((response) => {
      console.log(response.data);
    });
  };


  return (
    <Box sx={{mt:15 }} >
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ bottom: 1, left: { xs: "calc(50% - 25px)", md: 40} }}
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
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://imgs.search.brave.com/mDXjSq-W_ZDogZmHNq9iTGD41GLInwrRJPmMFCa9vc8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL0Jy/YWRfUGl0dF8yMDE5/X2J5X0dsZW5uX0Zy/YW5jaXMuanBnLzUx/MnB4LUJyYWRfUGl0/dF8yMDE5X2J5X0ds/ZW5uX0ZyYW5jaXMu/anBn"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Jhon Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            onChange={(event) => setCaption(event.target.value)}
              value={Caption}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Whats on your mind!"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            {/* <EmojiEmotions color="yellow" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" /> */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setVideo(event.target.files[0])}
              />
            </Button>
          </Stack>
          <ButtonGroup
            fullWidth="contained"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleSubmit}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Add;
