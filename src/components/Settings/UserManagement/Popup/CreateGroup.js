import React from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreateGroupPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="create-group-dialog" sx={{ '& .MuiDialog-paper': { width: '25%', height: '60%', boxShadow: '-4px 0px 24px rgba(0, 0, 0, 0.15)' } }}>
      <DialogTitle sx={{ bgcolor: '#3F3F3F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', color: '#FFFFFF', gap: '6px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '15px' }}>
          Create Group
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ color: '#FFFFFF' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px 36px', gap: '3px' }}>
        <TextField label="Group Name" variant="outlined" fullWidth sx={{ bgcolor: '#F4F4F4', border: '1px solid #898989', borderRadius: '12px', my: 2 }} />
        <Box sx={{ width: '100%', my: .5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontSize: '24px', color: '#212121', mb: 1 }}>Add members</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Add TextField and Add Button here for adding members */}
            <TextField label="Add members" variant="outlined" fullWidth sx={{ bgcolor: '#F4F4F4', border: '1px solid #898989', borderRadius: '12px' }} />
            {/* Placeholder for member list */}
            <Box sx={{ bgcolor: '#F4F4F4', border: '1px solid #898989', borderRadius: '12px', height: '200px', display: 'flex', flexDirection: 'column' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', width: '100%', mt: 3 }}>
          <Button variant="outlined" sx={{ border: '1px solid #B5B5B5', borderRadius: '12px', padding: '10px 10px' }}>Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: '#007BFF', borderRadius: '12px', padding: '12px 32px' }}>Create</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroupPopup;
