import React from 'react';
import { Formik, Field } from 'formik';
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  Typography,
  Link,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@mui/material';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import FormField from '../../shared/FormField';
import expandleft from '../../../utilities/dummy_assets/Expand_left.png'
import { useNavigate } from 'react-router-dom';
// Yup validation schema

const buttonStyle = {
    display: 'flex',
    width: '25rem',
    padding: '1rem 1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem', 
    borderRadius: '0.75rem',
    background: 'var(--Accent-Accent-00, #007BFF)',
};
const typographyStyle = {
    color: 'var(--Primary-white, #FFF)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.0165rem',
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  graduationYear: Yup.string().required('Graduation Year is required'),
});

const StudentRegistrationForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Submit form values
      }}
    >
      {({ handleSubmit, values, handleChange, handleBlur, touched, errors, resetForm }) => (
        <Box
        sx={{
          width: '50rem', 
          height:'30rem',
          mx: 'auto', // Centers the box
          // my: 4, // Margin top and bottom
          p: 2, // Padding inside the box
          backgroundColor: 'transparent'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={8} >
            <Grid item xs={12} sm={6} gap={15}>
              {/* Email and Name fields */}
              <FormField
                name="name"
                label="Enter student name"
                fieldType="textfield"
                heading="Student Name"
              />
              <FormField
                name="phoneNumber"
                label="Enter phone no."
                fieldType="textfield"
                heading="Phone No."
              />
              <FormField
                name="graduationYear"
                label="Select Year"
                fieldType="textfield"
                heading="Graduation Year"
              />
              <FormField
                name="hostelAddress"
                label="Enter hostel Address"
                fieldType="textfield"
                heading="Hostel Address"
              />
              {/* Student toggle switch would go here */}
            </Grid>
            <Grid item xs={12} sm={6}>
             
              <FormField
                name="emailAddress"
                label="Enter student email"
                fieldType="textfield"
                heading="Student Email Address"
              />
              <FormField
                name="branch"
                label="Enter branch"
                fieldType="textfield"
                heading="Branch"
              />
              <FormField
                name="degree"
                label="Enter degree"
                fieldType="textfield"
                heading="Degree"
              />
              <FormField
                name="currentYear"
                label="Select current year"
                fieldType="textfield"
                heading="Current Year"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'flex-start', alignSelf:'stretch', gap:'2rem', marginTop:'10px' }}>
              <Button
                variant="outlined"
                onClick={() => resetForm()}
                sx={{
                  display: 'flex',
                  width: '25rem',
                  padding: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem', 
                  borderRadius: '0.75rem',
                  background: '1px solid var(--Primary-Primary03, #5C5C5C)',
                }}
              >
                <Typography sx={typographyStyle && {color:'black'}} >Cancel</Typography>
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={buttonStyle}
              >
                <Typography sx= {typographyStyle}>Register</Typography>
              </Button>
          </Box>
          <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch',
              paddingTop:'.5rem'
              }}> 
              <img src={expandleft} onClick={()=>navigate('/login')} 
              style={{
                cursor:'pointer',
              }}/>
              <Typography onClick={()=>navigate('/login')} sx={typographyStyle && {fontSize:'1rem', letterSpacing: '-0.01375rem', color:'var(--Accent-Accent-00, #007BFF)', cursor:'pointer'}}>
                Back
              </Typography>
              <Typography sx={typographyStyle && {fontSize:'1rem', letterSpacing: '-0.01375rem', marginLeft:'30.2rem'}}>
                Already have an account? <span onClick={()=>navigate('/login')} style={{color: 'var(--Accent-Accent-01, #0062CC)', cursor:'pointer'}}>Log in here</span>
              </Typography>
          </Box>
        </form>
      </Box>
      
      )}
    </Formik>
  );
};

export default StudentRegistrationForm;

