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
import { useNavigate } from 'react-router-dom';
import expandleft from '../../../utilities/dummy_assets/Expand_left.png'

import Auth_APIs from '../../../utilities/api/auth_api';
// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  position: Yup.array().min(1, 'At least one position must be selected'),
  other_position: Yup.string(),
});
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
const positionLabels = {
  0: 'TL student management body',
  1: 'Manager (other technical clubs)',
  2: 'TL Manager',
  3: 'TL Technician',
  4: 'Other',
};
const AdminRegistrationForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        position: [],
        other_position:'',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
         console.log('66', values);
        // Submit form values
        const response = Auth_APIs.register(values);
        response.then((result)=>{
          console.log(result);
          navigate('/adminlogin');
        }).catch((error)=>{
          console.log(error);
        })
        //console.log(response);

      }}
    >
      {({ handleSubmit, values, handleChange, handleBlur, touched, errors, resetForm }) => (
        <Box
        sx={{
          width: '50rem', 
          height:'30rem',
          mx: 'auto', // Centers the box
          p: 2, // Padding inside the box
          backgroundColor: 'transparent'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={8} >
            <Grid item xs={12} sm={6} gap={15}>
              {/* Email and Name fields */}
              <FormField
                name="email"
                label="Enter your email"
                fieldType="textfield"
                heading="Email Address"
              />
              {/* <FormField
                name="username"
                label="username"
                fieldType="textfield"
                heading="username"
              />
              <FormField
                name="password"
                label="Enter your password"
                fieldType="textfield"
                heading="Password"
              /> */}
              <FormField
                name="name"
                label="Enter your name"
                fieldType="textfield"
                heading="Name"
              />
              <FormField
                name="phoneNumber"
                label="Enter phone no."
                fieldType="textfield"
                heading="Phone No."
              />
              {/* Student toggle switch would go here */}
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Position checkboxes */}
              <FormControl component="fieldset">
                <FormLabel component="legend" variant="h6" sx={{ fontWeight: 'high', marginBottom: 1, color : 'grey'}}>Position</FormLabel>
                <FormGroup>
                <FormControlLabel
                      control={
                        <Checkbox
                          id="position1"
                          name="position"
                          value={0}
                          checked={values.position.includes('0')}
                          onChange={handleChange}
                        />
                      }
                      label="TL student management body"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="position2"
                          name="position"
                          value={1}
                          checked={values.position.includes('1')}
                          onChange={handleChange}
                        />
                      }
                      label="Manager (other technical clubs)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="position3"
                          name="position"
                          value={2}
                          checked={values.position.includes('2')}
                          onChange={handleChange}
                        />
                      }
                      label="TL Manager"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="position4"
                          name="position"
                          value={3}
                          checked={values.position.includes('3')}
                          onChange={handleChange}
                        />
                      }
                      label="TL Technician"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="position5"
                          name="position"
                          value={4}
                          checked={values.position.includes('4')}
                          onChange={handleChange}
                        />
                      }
                      label="Other"
                    />
                </FormGroup>
              </FormControl>
              {values.position.includes("4") && (
                <FormField
                  name="other_position"
                  label="Enter your position"
                  fieldType="textfield"
                  heading=""
                />
              )}
              {!values.position.includes("4") && (
                <FormField
                  name="position1"
                  label="Enter your position"
                  fieldType="textfield"
                  heading=""
                />
              )}
              
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

export default AdminRegistrationForm;

/* TODO: Decouple Form state from form elements.
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
});

const NewGroupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("New Group Form data", values);
        },
    });

    return (
        <>
            <Container>
                <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}>
                        <Typography variant="h5">New Group</Typography>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={!!formik.errors.name && formik.touched.name}
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ px: 4 }}
                        >
                            CREATE
                        </Button>
                    </Box>
            </Container>
        </>
    );
};

export default NewGroupForm;
*/