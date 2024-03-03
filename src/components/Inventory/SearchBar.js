import React from 'react';
import { Box, InputBase, IconButton, Paper, Select, MenuItem, FormControl, InputAdornment, useTheme , useMediaQuery, OutlinedInput, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const categories = [
  'Books',
  'Electronics'
];
const groups = [
  'A',
  'B'
];
const tags = [
  'Issuable',
  'Purchasable'
];

const SearchBar = ({activeTab, searchQuery, setSearchQuery, category, setCategory, group, setGroup, tag, setTag }) => {
  
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };
  const handleTagChange = (event) => {
    setTag(event.target.value);
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
          sx={{ mr: activeTab===2 ? 20:45.5, height: '3rem' , width: activeTab===2 ? '90%': '50%' , ml: '1rem'}}
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
      {activeTab === 2 && (
        <>
          <FormControl sx={{ minWidth: 80}}>
            <InputLabel shrink sx={{ marginLeft: '18px' }}>Group</InputLabel>
            <Select
              value={group}
              onChange={handleGroupChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{mr: 5, height: '3rem', width: '75%', ml: '1rem' }}
              multiple
              input={<OutlinedInput label="Select Categories" />}
            >
              {groups.map((grp) => (
                <MenuItem key={grp} value={grp}>
                  {grp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 80 }}>
            <InputLabel shrink sx={{ marginLeft: '18px' }}>Tags</InputLabel>
            <Select
              value={tag}
              onChange={handleTagChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{mr: 5, height: '3rem', width: '100%', ml: '1rem' }}
              multiple
              input={<OutlinedInput label="Tags" />}
            >
              {tags.map((tg) => (
                <MenuItem key={tg} value={tg}>
                  {tg}
                </MenuItem>
              ))}
            </Select>
          </FormControl> 
          
        </>
      )}
      
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
