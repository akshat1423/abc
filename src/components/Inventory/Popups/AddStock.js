import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  DeleteOutlineOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Box} from '@mui/material';
import { useState } from 'react';
const AddStock = ({ currentRow, open, onClose}) => {
  //console.log('add stock', currentRow);

  const [addStockQuantity, setAddstockQuantity] = useState(0);

  const handleChange = (event) => {
    setAddstockQuantity(event.target.value);
    console.log(addStockQuantity);
  }
  const handleClick = () => {
    if(addStockQuantity){
      currentRow.stock_available  = currentRow.stock_available + addStockQuantity;
    }
      onClose();
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'inline-flex',
          padding: '8px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          borderRadius: '16px',
          border: '1px solid var(--Primary-Primary01, #212121)',
          background: 'var(--Primary-white, #FFF)',
          boxShadow: '2px 2px 24px 0px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          gap: '10px',
        }}
        >
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
        }}>
          <Typography variant="h5" component="div" sx={{ 
            color: 'var(--Primary-Primary02, #3F3F3F)',
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '15px', 
            marginLeft: '0px',
            }}
            >
            Add stock
          </Typography>
          <Box sx={{
            display: 'flex',
            width: '311px',
            padding: '10px 16px',
            borderRadius: '8px',
            // border:'1px solid var(--Primary-Primary08, #B5B5B5)',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <TextField type='number' placeholder='enter stock' onChange={handleChange} value={addStockQuantity}/>
            <AddCircleOutlineOutlinedIcon sx={{color:'green'}}/>
          </Box>
        </DialogContent>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            display: 'flex',
            padding: '8px 32px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '12px',
            background: 'var(--Accent-Accent-00, #007BFF)',
          }}
        >
          Done
        </Button>
      </DialogContent>

        
        
    </Dialog>
  );
};

export default AddStock;
