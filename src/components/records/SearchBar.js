import React from 'react';
import { Box, InputBase, IconButton, Paper, Select, MenuItem, FormControl, InputAdornment, useTheme , useMediaQuery, OutlinedInput, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const categories = [
  'Books',
  'Electronics'
];
// const groups = [
//   'A',
//   'B'
// ];
// const tags = [
//   'Star',
//   'Gear'
// ];

const SearchBar = ({activeTab, searchQuery, setSearchQuery, category, setCategory}) => {
  
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent the default action to avoid form submission/reload
      handleSearchSubmit();
    }
  };

  const handleSearchSubmit = () => {
    console.log(`Searching for: ${searchQuery} in category: ${category}`);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  

  return (
    <Box
      component="form"
      onKeyDown={handleKeyDown}
      sx={{
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: isMobile ? 1 : 0, 
        width: '100%', 
        padding: theme.spacing(1),
        margin: 'none',
        marginBlock:'1rem',
        boxSizing: 'border-box' // Ensure padding does not cause overflow
      }}
    >
      <FormControl sx={{ minWidth: 120 }} >
      <InputLabel shrink sx={{marginLeft:'18px'}}>Select Categories</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ mr:45.5, height: '3rem' , width: '50%', ml: '1rem'}}
          multiple
          input={<OutlinedInput label="Select Categories" />}
        >
          {categories.map((name) => (
            <MenuItem
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      
      <InputBase
      sx={{
        ml: 50,
        mr: 1,
        flex: 1,
        height: '3rem',
        padding: 'none',
        border: '#B5B5B5 solid 0.5px',
        borderRadius: '10px',
        bgcolor: '#F4F4F4',
        '& .MuiInputBase-input': {
          paddingLeft: '.1rem', // Adjust this value to position the text correctly
        },
      }}
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      value={searchQuery}
      onChange={handleSearchChange}
      startAdornment={
        <InputAdornment position="start">
          <IconButton
            sx={{ paddingLeft: '10px' }} // Adjust padding as needed
            aria-label="toggle password visibility"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
       
    </Box>
  );
};

export default SearchBar;
