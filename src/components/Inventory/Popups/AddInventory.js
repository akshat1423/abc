// import React from 'react';
// import { 
//   Dialog, DialogContent, DialogTitle, TextField, Button, Select, MenuItem, 
//   FormControl, InputLabel, Grid, DialogActions, IconButton 
// } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import CropFreeIcon from '@mui/icons-material/CropFree';

// const AddInventoryDialog = ({ open, handleClose }) => {
//   return (
//     <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
//       <DialogTitle>Add New Inventory</DialogTitle>
//       <DialogContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             {/* Product Type */}
//             <FormControl fullWidth margin="normal">
//               <InputLabel id="product-type-label">Product Type *</InputLabel>
//               <Select
//                 labelId="product-type-label"
//                 id="product-type"
//                 label="Product Type *"
//                 defaultValue=""
//               >
//                 <MenuItem value="">Select Product</MenuItem>
//                 {/* Add more MenuItems here */}
//               </Select>
//             </FormControl>

//             {/* SKU Code */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="sku-code"
//               label="SKU Code *"
//               defaultValue=""
//             />

//             {/* Manufacturer Name */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="manufacturer-name"
//               label="Manufacturer Name *"
//               defaultValue=""
//             />

//             {/* Machine Cost */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="machine-cost"
//               label="Machine Cost *"
//               defaultValue=""
//             />

//             {/* Product Image */}
//             <Button
//               variant="outlined"
//               component="label"
//               startIcon={<AddCircleOutlineIcon />}
//             >
//               Add Image
//               <input
//                 type="file"
//                 hidden
//               />
//             </Button>

//           </Grid>
//           <Grid item xs={12} sm={6}>
//             {/* Category */}
//             <FormControl fullWidth margin="normal">
//               <InputLabel id="category-label">Category *</InputLabel>
//               <Select
//                 labelId="category-label"
//                 id="category"
//                 label="Category *"
//                 defaultValue=""
//               >
//                 <MenuItem value="">Select Category</MenuItem>
//                 {/* Add more MenuItems here */}
//               </Select>
//             </FormControl>

//             {/* Product Name */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="product-name"
//               label="Product Name *"
//               defaultValue=""
//             />

//             {/* Unit */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="unit"
//               label="Unit *"
//               defaultValue=""
//             />

//             {/* Tag */}
//             <FormControl fullWidth margin="normal">
//               <InputLabel id="tag-label">Tag</InputLabel>
//               <Select
//                 labelId="tag-label"
//                 id="tag"
//                 label="Tag"
//                 defaultValue=""
//               >
//                 <MenuItem value="">Select Product</MenuItem>
//                 {/* Add more MenuItems here */}
//               </Select>
//             </FormControl>

//             {/* Description */}
//             <TextField
//               margin="normal"
//               fullWidth
//               id="description"
//               label="Description"
//               multiline
//               rows={4}
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>
//       <DialogActions>
//         <IconButton color="primary" aria-label="upload csv">
//           <CloudUploadIcon />
//         </IconButton>
//         <IconButton color="primary" aria-label="scan">
//           <CropFreeIcon />
//         </IconButton>
//         <Button onClick={handleClose}>Discard</Button>
//         <Button variant="contained" color="primary">
//           Add Product
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddInventoryDialog;

import * as Yup from 'yup';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import FormField from '../../shared/FormField';
import  FileUpload  from '../../shared/FileUpload'; 
import InventoryListAPIs from '../../../utilities/api/AdminInventoryList';
import EquipmentListAPIs from '../../../utilities/api/AdminEquipmentList';
import MachineListAPIs from '../../../utilities/api/AdminMachineList';

const validationSchema = Yup.object().shape({
    productType: Yup.string().required('Product type is required'),
    skuCode: Yup.string().required('SKU code is required'),
    manufacturerName: Yup.string(),
    machineCost: Yup.number().required('Machine cost is required'),
    productImage: Yup.mixed(),
    productName: Yup.string().required('Product name is required'),
    unit: Yup.string().required('Unit is required'),
    category: Yup.string().required('Category is required'),
    tag: Yup.string(),
    description: Yup.string(),
    measurementUnit: Yup.string(),
  });

const styledField = {
  maxWidth:'70%',
  padding:'0px 4px 8px 6px',
}

const AddInventoryDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Inventory</DialogTitle>
      <Formik
        initialValues={{
          productType: '',
          skuCode: '',
          manufacturerName: '',
          machineCost: '',
          productImage: '',
          productName: '',
          unit: '',
          category: '',
          tag: '',
          description: '',
          measurementUnit:'',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          //console.log('197', values.productType);
          const response={};
          if(values.productType==='Equipments') response = EquipmentListAPIs.AddInventory(values);
          if(values.productType==='Machines') response = MachineListAPIs.AddInventory(values);
          if(values.productType==='Inventory') response = InventoryListAPIs.AddInventory(values);
        }}
      >
        {({  handleSubmit, values,
            touched,
            errors,
            handleChange,
            setFieldValue,
             }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent>
            {/* Product Type */}
            <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
            <FormField
                  name="productType"
                  label="Select Product"
                  fieldType="dropdown"
                  heading="Product Type"
                  options={['Machines', 'Equipments', 'Inventory']}
                  sx={styledField}
            />
            <FormField
                  name="skuCode"
                  label="Enter Sky Code"
                  fieldType="textfield"
                  heading="SKU Code *"
                  sx={styledField}
            />
            <FormField
                  name="manufacturerName"
                  label="Enter Manufacturer Name"
                  fieldType="textfield"
                  heading="Manufacturer Name"
                  sx={styledField}
            />
             <FormField
                  name="machineCost"
                  label="Enter Machine Cos"
                  fieldType="textfield"
                  heading="Machine Cost *"
                  sx={styledField}
            />
            <FormField
                  name="measurementUnit"
                  label="Measurement Unit"
                  fieldType="textfield"
                  heading="Measurement Unit"
                  sx={styledField}
            />
            
            {/* Product Image */}
            {/* Note: You will need to create a custom FileUpload component */}
            <FileUpload
                name="productImage"
                onUpload={(file) => setFieldValue('productImage', file)}
                error={Boolean(errors.productImage && touched.productImage)}
                helperText={<ErrorMessage name="productImage" />}
                heading="Product Image*"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            {/* Product Name */}
            <FormField
                  name="productName"
                  label="Enter Product Name "
                  fieldType="textfield"
                  heading="Product Name *"
                  sx={styledField}
            />
            <FormField
                  name="unit"
                  label="Enter Unit"
                  fieldType="textfield"
                  heading="Unit *"
                  sx={styledField}
            />
            <FormField
                  name="category"
                  label="Select Category"
                  fieldType="dropdown"
                  heading="Category *"
                  options={['Electronics', 'Integrted Chips', 'Mechanical']}
                  sx={styledField}
            />
            <FormField
                  name="tag"
                  label="Select Tag"
                  fieldType="dropdown"
                  heading="Tag"
                  options={['Isuuable', 'Purchasable']}
                  sx={styledField}
            />
             </Grid>
             </Grid>

             {/* Description Field */}
             <Field
                as={TextField}
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4} // Adjust the number of rows as needed
                variant="outlined"
                value={values.description}
                onChange={handleChange}
                // onBlur={handleBlur}
                sx={{
                  // Add your styles here
                  // Example:
                   mt: 2,
                   mb: 1,
                  // Adjust the styling as needed to match the image
                }}
              />
           
            
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
    Add Product
  </Button>
</DialogActions>

          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddInventoryDialog;
