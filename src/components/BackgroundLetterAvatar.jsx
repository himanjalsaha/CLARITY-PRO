import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
    const username = typeof name === 'string' ? name : Object.values(name).toString();
    console.log(username)
    console.log(name)
  return {
    sx: {
      bgcolor: stringToColor(username),
    },
    children: `${username.split(' ')[0][0]}`,
  };
}

export default function BackgroundLetterAvatar({user}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar({user})} />
      {/* <Avatar {...stringAvatar('Jed Watson')} />
      <Avatar {...stringAvatar('Tim Neutkens')} /> */}
    </Stack>
  );
}
