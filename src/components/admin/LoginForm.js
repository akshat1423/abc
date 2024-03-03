import React from 'react';
import { Formik } from 'formik';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import FormField from '../shared/FormField';

// Yup validation schema
const validationSchema = Yup.object().shape({
  studentEmail: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  branch: Yup.string().required('Branch is required'),
  // Define other fields similarly
});

//TODO: Naming Issue, Decouple form state from form elements.
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        studentEmail: '',
        password: '',
        branch: '',
        // Define other initial values similarly
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Submit form values
      }}
    >
      {({ handleSubmit }) => (
          <Box
          sx={{
            width: '35rem', 
            height:'25rem',
            mx: 'auto', // Centers the box
            my: 4, // Margin top and bottom
            p: 2, // Padding inside the box
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example shadow
            borderRadius: '16px', // Adjust as necessary
            bgcolor: 'background.paper', // Or another color as per your design
          }}
        >
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& > *': { mb: 2 }, '& > button': { mt: 2 } , gap:'1rem' }}>
                <FormField
                  name="studentEmail"
                  label="Enter student email"
                  fieldType="textfield"
                  heading="Student Email Address"
                />
                <FormField
                  name="password"
                  label="Enter password"
                  fieldType="textfield"
                  heading="Password"
                />
                {/* ... other fields ... */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ bgcolor: 'primary', ':hover': { bgcolor: 'primary' }, mt: 2 }} 
                >
                  Login
                </Button>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}> 
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/register" underline="hover" sx={{ color: 'brown' }}>
                    Register here
                  </Link>
                </Typography>
              </Box>
                      </form>
              </Box>
              )}
         </Formik>
  );
};

export default RegistrationForm;
