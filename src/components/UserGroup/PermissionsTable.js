import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Checkbox, Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Mock data
const rows = [
  { id: 1, groupName: 'Mapit.ai', avatarSrc: '/mapit-avatar.png', viewer: false, editor: false, administer: false },
  { id: 2, groupName: 'MIS', avatarSrc: '/mis-avatar.png', viewer: false, editor: false, administer: false },
  { id: 3, groupName: 'Hyperlocology', avatarSrc: '/hyperlocology-avatar.png', viewer: false, editor: false, administer: false },
  { id: 4, groupName: 'Market GPT', avatarSrc: '/marketgpt-avatar.png', viewer: false, editor: false, administer: false },
  // Add more rows as needed
];

const PermissionsTable = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4, mr: 4, overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background :'#F7F7F7'  } }>
          <TableRow sx={{font :'Roboto' , fontWeight:'500' , fontSize:'100px' ,color:'#5C5C5C'}}>
            <TableCell  sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#5C5C5C'
              }}>
                User groups
            </TableCell>
            <TableCell align="center"  sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#5C5C5C'
              }}>
                Viewer
            </TableCell>
            <TableCell align="center"  sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#5C5C5C'
              }}>
                Editor
            </TableCell>
            <TableCell align="center"  sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#5C5C5C'
              }}>
                Administer
            </TableCell>
            <TableCell align="center"  sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#5C5C5C'
              }}>
              Custom
              <ArrowDropDownIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={row.avatarSrc} />
                  <Typography sx={{
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color:'#5C5C5C'
                }}>
                    {row.groupName}
                </Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.viewer} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.editor} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.administer} />
              </TableCell>
              <TableCell align="center">
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PermissionsTable;
