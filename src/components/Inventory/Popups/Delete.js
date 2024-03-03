import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  DeleteOutlineOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

const Delete = ({ currentRow, open, onClose, onConfirm  }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          borderRadius: '16px',
          border: '1px solid var(--s-primary-100, #D8DBF5)',
          background: 'var(--Primary-white, #FFF)',
        }
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          alignItems:'flex-start',
          padding:'24px',
          gap: '10px',
        }}
      >
        <DeleteOutlineOutlined fontSize='large'/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}>
          <Typography sx={{ 
            color: 'var(--Primary-Primary01, #212121)',
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '25.382px', // or use a unitless value like 1.26909 for 126.909%
            letterSpacing: '0.635px',
          }}>
            Delete Machine?
          </Typography>
          <Typography sx={{
            color: 'var(--Primary-Primary03, #5C5C5C)',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '25.382px', // or use a unitless value like 1.58636 for 158.636%
            letterSpacing: '0.635px',
           }}>
            Are you sure you want to delete?
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          padding: '12px 24px',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          gap: '12px',
          alignSelf: 'stretch',
          background: 'var(--Primary-Primary10, #E9E9E9)',
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            display: 'flex',
            padding: '8px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '12px',
            background: 'var(--Primary-Primary09, #D3D3D3)',
            '&:hover': {
              backgroundColor: '#D3D3D3'
            }
            }
          }
        >
          <Typography sx={{
            color: 'var(--Primary-Primary02, #3F3F3F)',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            textTransform: 'capitalize'
          }}>Cancel</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={onConfirm}
          sx={{
            display: 'flex',
            padding: '8px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '12px',
            background: 'var(--Action-Error, #C90505)',
            '&:hover': {
              backgroundColor: '#B00000'
            }
          }}
        >
          <Typography sx={{
            color: 'var(--Primary-white, #FFF)',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: '0.635px',
            textTransform: 'capitalize'
          }}>Delete</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Delete;
