import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function AvatarComponent() {
  return (
    <Stack
    direction="row"
    spacing={2}
    sx={{
      position: 'relative',
      top: '20px', // Adjust this value to move it down from the top
      right: '20px', // Adjust this value to move it to the right
      zIndex: 1, // Optional: Ensures it's not above other content
    }} // Ensure it's above other content
     // Optional: Add some spacing from the edges

    >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}

export default AvatarComponent;