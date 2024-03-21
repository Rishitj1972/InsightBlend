import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Comment = ({ videos }) => {
  const [CommentData, setCommentData] = useState([]);

  const fetchComment = () => {
    axios
      .get(`http://localhost:5000/Comment/${videos.upload_id}`)
      .then((response) => {
        console.log(response.data.Comment);
        setCommentData(response.data.Comment);
      });
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <Box
      component={"form"}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 600,
          height: 600,
          border: 1,
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          backgroundColor: "black",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            m: 3,
            fontSize: "30px",
          }}
        >
          Comment
        </Typography>

        <Box sx={{ height: "65%", overflowY: "scroll", mb: 3,mt:5 }}>
          {CommentData.map((comment, key) => (
            <div>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    mb: "30px",
                    width: 350,
                    px: 2,
                  }}
                >
                  <Avatar
                    alt="Joe rogan"
                    sx={{ ml: 3, width: "60px", height: "60px" }}
                    src="https://imgs.search.brave.com/lyrNnddSMKExr9ihUutS04LVP9T42YUfVllfNFt0H_g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2RjL0pv/ZV9Sb2dhbi5wbmcv/NTEycHgtSm9lX1Jv/Z2FuLnBuZw"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "15px",
                        fontWeight: "bold",
                        mb: "10px",
                      }}
                    >
                      {comment.user_name}
                    </Typography>
                    <Typography
                      sx={{ maxWidth: 350, overflowWrap: "break-word" }}
                    >
                      {comment.comment_content}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Comment;
