

import * as Yup from 'yup';
import React from 'react';
import {Box} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import FormField from '../../shared/FormField';
// import { FileUpload } from '../components/FileUpload'; // You need to create this component for image upload
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PlacesAPI from '../../../utilities/api/placeApi';

const validationSchema = Yup.object().shape({
    studentName: Yup.string().required('Student name is required'),
    date: Yup.string().required('Date is required'),
    timeInterval: Yup.string().required('Interval is required'),
    machine: Yup.string().required('Machine name is required'),
    projectTitle: Yup.mixed().required('Product title is required'),
    purpose: Yup.string().required('Purpose is required'),
  });

const AddReservationDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Reservation</DialogTitle>
      <Formik
        initialValues={{
          studentName: '',
          date: '',
          timeInterval: '',
          machine: '',
          projectTitle: '',
          purpose: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            console.log('42', values);
            const response = PlacesAPI.ReservationListPost(values);
            //console.log(response);
            setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values,
            touched,
            errors,
            handleChange,
             }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent>
            {/* Product Type */}
            <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
            <Box sx={{display:'flex', padding:'5px'}}>
            <PersonAddAltIcon sx={{ padding:'10px', marginRight:'4%'}}/>
            <FormField
                  name="studentName"
                  label="Name of Student"
                  fieldType="textfield"
            />
            </Box>
            <Box sx={{display:'flex', padding:'5px'}}>
            <CalendarTodayOutlinedIcon sx={{ padding:'10px', marginRight:'4%'}}/>
            <FormField
                  name="date"
                  label="Enter Sky Code"
                  fieldType="date"
                  sx={{borderRadius:'5px'}}
            />
            </Box>
            <Box sx={{display:'flex', padding:'5px'}}>
            <AccessTimeOutlinedIcon sx={{ padding:'10px', marginRight:'4%'}}/>
            <FormField
                  name="timeInterval"
                  label="timeInterval"
                  fieldType="timeInterval"
                  heading=""
            />
            </Box>
            <Box sx={{display:'flex', padding:'5px'}}>
            <StorefrontOutlinedIcon sx={{ padding:'10px', marginRight:'4%'}}/>
             <FormField
                  name="machine"
                  label="Enter Machine name"
                  fieldType="textfield"
                  heading=""
            />
            </Box>
            <Box sx={{display:'flex', padding:'5px'}}>
            <EditOutlinedIcon sx={{ padding:'10px', marginRight:'4%'}}/>
            <FormField
                  name="projectTitle"
                  label="Add Project Title "
                  fieldType="textfield"
                  heading=""
            />
            </Box>
            <Box sx={{display:'flex', padding:'5px'}}>
            <NotesOutlinedIcon sx={{ padding:'10px', marginRight:'4%'}}/>
            <FormField
                  
                  name="purpose"
                  label="Add purpose"
                  fieldType="textfield"
                  heading=""
                  sx={{width:'100%', borderRadius:'10px'}}
            />
            </Box>
            </Grid>
           
             </Grid>
            </DialogContent>
            <DialogActions>
  <Button
    onClick={onClose}
    color="primary"
    variant="outlined"
    sx={{
      textTransform: 'none',
      fontWeight: 'bold',
      borderRadius: '12px', // Adjust the borderRadius to match your design
      borderWidth: '1px', // Adjust the borderWidth if necessary
      borderColor: 'action.active', // Use MUI color palette for border
      '&:hover': {
        borderWidth: '1px', // Maintain border width on hover
        borderColor: 'action.active', // Use MUI color palette for border on hover
      },
      mr: 1, // Right margin for spacing between the buttons
    }}
  >
    Discard
  </Button>
  <Button
    onClick={onClose}
    color="primary"
    variant="outlined"
    sx={{
      textTransform: 'none',
      fontWeight: 'bold',
      borderRadius: '12px', // Adjust the borderRadius to match your design
      borderWidth: '1px', // Adjust the borderWidth if necessary
      borderColor: 'action.active', // Use MUI color palette for border
      '&:hover': {
        borderWidth: '1px', // Maintain border width on hover
        borderColor: 'action.active', // Use MUI color palette for border on hover
      },
      mr: 1, // Right margin for spacing between the buttons
    }}
  >
    Cancel
  </Button>
  <Button
    type="submit"
    variant="contained"
    disableElevation // Remove the shadow for a flat design
    sx={{
      textTransform: 'none',
      fontWeight: 'bold',
      color: 'common.white',
      backgroundColor: 'primary.main', // Use the theme's primary color
      borderRadius: '12px', // Adjust the borderRadius to match your design
      '&:hover': {
        backgroundColor: 'primary.dark', // Darken the button on hover
      },
    }}
  >
    Add 
  </Button>
</DialogActions>

          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddReservationDialog;
