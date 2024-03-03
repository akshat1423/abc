
import React from 'react';
import { useField } from 'formik';
import { TextField, Typography, Grid, MenuItem, Box } from '@mui/material';

const FileUpload = ({ name, heading, sx}) => {
    // Use Formik's useField to get field props
    const [field, meta] = useField(name);
    
    // Determine the field to render based on fieldType
    const renderField = () => {
      
          return (
            <TextField 
            type='file'
            sx={sx}
            {...field} 
            fullWidth 
            error={meta.touched && !!meta.error} 
            helperText={meta.touched && meta.error}
          />
          
          );
      }
  
    return (
      <>
        <Typography variant="h6" sx={{ fontWeight: 'high', marginBottom: 1, color : 'grey'}}>
          {heading}
        </Typography>
        {renderField()}
      </>
  
    );
  };
  
  export default FileUpload;