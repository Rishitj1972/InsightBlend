import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'



const Feed = ({videos,fetchPlaylistFuction}) => {

  return (
    <Box >
      {
        videos && videos.map((item,key) => ( 
          <Post props={item} key={key}  fetchPlaylistFuction={fetchPlaylistFuction}/>
        ))
      }
    </Box>
  )
}

export default Feed 