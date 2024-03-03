import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  DeleteOutlineOutlined } from '@mui/icons-material';

const Delete = ({ open, onClose, onConfirm  }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '440px',
          height: '336px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '24px',
          border: '1px solid #0062CC'
        }
      }}
    >
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <DeleteOutlineOutlined fontSize='large'/>
        <Typography variant="h5" component="div" sx={{ color: '#3F3F3F', mb: 2 }}>
          Delete
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#5C5C5C' }}>
          Are you sure you want to delete?
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          p: 0,
          gap: '26px'
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            width: '134px',
            height: '47px',
            borderRadius: '12px',
            color: '#3F3F3F',
            borderColor: '#D3D3D3',
            '&:hover': {
              borderColor: '#D3D3D3',
              backgroundColor: '#EAEAEA'
            }
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {/* Handle delete action */}}
          sx={{
            width: '134px',
            height: '47px',
            borderRadius: '12px',
            backgroundColor: '#C90505',
            '&:hover': {
              backgroundColor: '#B00000'
            }
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Delete;
