import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import Comment from "../pages/Comment";

const Post = ({ videos }) => {
  console.log(videos);

  const [count, setCount] = useState(0);
  const [checkComment, setCheckComment] = useState(false);


  const fetchLike = () => {
        axios
          .get(`http://localhost:5000/LikeCount/${videos.upload_id}`)
          .then((response) => {
            console.log(response.data.like.count);
            setCount(response.data.like.count);
          });
  };

  useEffect(() => {
    fetchLike();
  }, [fetchLike]);

  return (
    <div>
      <Card sx={{ mb: 2, borderRadius: "20px", backgroundColor: "#222831" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red", width: "60px", height: "60px" }}
              aria-label="recipe"
              src={videos.upload_thumbnail}
            />
          }
          title={videos.upload_title}
          subheader={videos.upload_date}
        />
        <video
          style={{ width: "100%" }}
          controls // Add controls attribute for playback control buttons
        >
          <source
            src={videos.upload_file} // Replace with your video URL
          />
          Your browser does not support the video tag.
        </video>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {videos.upload_desc}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", gap: "20px", ml: "20px" }}>
          <Typography variant="h7" color="white">
            {videos.certification_name}
          </Typography>

          <Typography variant="h7" color="white">
            {videos.genres_name}
          </Typography>

          <Typography variant="h7" color="white">
            {videos.language_name}
          </Typography>
        </Box>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Favorite sx={{ color: "red" }} />
         
            <Typography>{count === 0 ? "" : count}</Typography>
          </IconButton>
          <IconButton aria-label="share">
          <CommentIcon onClick={() => setCheckComment(!checkComment)} />
          </IconButton>
        </CardActions>
        {checkComment && <Comment videos={videos} />}
      </Card>
    </div>
  );
};

export default Post;
