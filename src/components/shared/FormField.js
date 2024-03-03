import React from 'react';
import { useField } from 'formik';
import { TextField, Typography, Grid, MenuItem, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EastIcon from '@mui/icons-material/East';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FormField = ({ name, label, fieldType, options , heading , sx}) => {
  // Use Formik's useField to get field props
  const [field, meta] = useField(name);
  
  // Determine the field to render based on fieldType
  const renderField = () => {
    switch (fieldType) {
      case 'dropdown':
        return (
          <TextField sx={sx}{...field} select fullWidth label={label} error={meta.touched && !!meta.error} helperText={meta.touched && meta.error}>
            {options.map((option) => (
              <MenuItem sx={{color:'black'}} key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        );
        case 'date':
        return(
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={sx}/>
          </LocalizationProvider>
        )
      case 'timeInterval':
        return(
          <Box sx={{display:'flex', alignItems:'center'}}>
            <TimePicker label=""  />
            <EastIcon sx={{padding:'5px'}}/>
            <TimePicker label="" />
          </Box>
        )
      default:
        return (
          <TextField 
          sx={sx}
          {...field} 
          fullWidth 
          label={label} 
          error={meta.touched && !!meta.error} 
          helperText={meta.touched && meta.error}
        />
        
        );
    }
  };

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'high', padding:'5px', color : 'grey'}}>
        {heading}
      </Typography>
      {renderField()}
    </>

  );
};

export default FormField;
