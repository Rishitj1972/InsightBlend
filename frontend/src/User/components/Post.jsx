import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Comment from "../pages/Comment";
const Post = ({ props, fetchPlaylistFuction }) => {
  console.log(props);
  const [checkComment, setCheckComment] = useState(false);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const [isFavorite, setIsFavorite] = useState(false);

  const Id = sessionStorage.getItem("Uid");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSubmit = () => {
    const data = {
      user_id: Id,
      upload_id: props.upload_id,
    };
    axios.post("http://localhost:5000/Like", data).then((response) => {
      console.log(response.data);
      fetchLike();
    });
  };

  const handledelete = () => {
    axios
      .delete(`http://localhost:5000/Like/${Id}/${props.upload_id}`)
      .then((response) => {
        console.log(response.data);
        fetchLike();
      });
  };

  const fetchLike = useCallback(() => {
    axios
      .get(`http://localhost:5000/Like/${Id}/${props.upload_id}`)
      .then((response) => {
        console.log(response.data.like);
        setLike(response.data.like);
        axios
          .get(`http://localhost:5000/LikeCount/${props.upload_id}`)
          .then((response) => {
            console.log(response.data.like.count);
            setCount(response.data.like.count);
          });
      });
  }, [Id, props.upload_id, setLike, setCount]);

  useEffect(() => {
    fetchLike();
    fetchPlaylist();
  }, [fetchLike]);

  const fetchPlaylist = () => {
    axios
      .get(`http://localhost:5000/MyPlayList/${Id}/${props.upload_id}`)
      .then((response) => {
        console.log(response.data.follow);
        setIsFavorite(response.data.follow);
      });
  };

  // Favorite Insert

  const handleAdd = () => {
    const data = {
      user_id: Id,
      upload_id: props.upload_id,
    };
    axios.post("http://localhost:5000/favorite", data).then((response) => {
      console.log(response.data);
      fetchPlaylist();
      fetchPlaylistFuction();
    });
  };

  const handleRemove = () => {
    axios
      .delete(`http://localhost:5000/Favorite/${Id}/${props.upload_id}`)
      .then((response) => {
        console.log(response.data);
        fetchPlaylist();
        fetchPlaylistFuction();
      });
  };

  return (
    <div>
      <Card sx={{ mb: 2, borderRadius: "20px", backgroundColor: "#222831" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to={`/User/Profile/${props.showrunner_id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "red", width: "60px", height: "60px" }}
                  aria-label="recipe"
                  src={props.showrunner_photo}
                />
              }
              title={props.showrunner_name}
              subheader={props.upload_title}
            />
          </Link>
          <Box sx={{ display: "flex", alignItems: "center", mr: "20px" }}>
            <IconButton aria-describedby={id} onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Button
                variant={isFavorite ? "outlined" : "contained"}
                sx={{ m: 2 }}
                onClick={isFavorite ? handleRemove : handleAdd}
              >
                {isFavorite ? "Remove Playlist" : "Add Playlist"}
              </Button>
            </Popover>
          </Box>
        </Box>
        <video
          style={{ borderRadius: "10px", width: "100%" }}
          controls // Add controls attribute for playback control buttons
          autoPlay={true} // Set autoPlay to true for autoplay
          muted // Add muted attribute for autoplay to work
        >
          <source
            src={props.upload_file} // Replace with your video URL
          />
          Your browser does not support the video tag.
        </video>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.upload_desc}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", gap: "20px", ml: "20px" }}>
          <Typography variant="h7" color="white">
            {props.certification_name}
          </Typography>

          <Typography variant="h7" color="white">
            {props.genres_name}
          </Typography>

          <Typography variant="h7" color="white">
            {props.language_name}
          </Typography>
        </Box>

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={like ? handledelete : handleSubmit}
          >
            {like ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
          <Typography>{count === 0 ? "" : count}</Typography>
          <IconButton aria-label="share">
            <CommentIcon onClick={() => setCheckComment(!checkComment)} />
          </IconButton>
        </CardActions>
        {checkComment && <Comment props={props} />}
      </Card>
    </div>
  );
};

export default Post;
