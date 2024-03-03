import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

import machineData from '../../utilities/dummy_data/inventory_items.json'

import { useState } from 'react';



const ReservationsTable = ({searchQuery, category}) => {
  const [page, setPage] = useState(0);
  const [currentRow, setCurrentRow] = useState(null);
  //const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await AdminMachineListGet();
  //     console.log(data)
  //     setRows(data);
  //   };

  //   fetchData().catch(console.error);
  // }, []);


 

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  
  const rows = machineData.map((item, index) => ({ ...item, id: index }));
  const filteredRows = rows.filter((row) => {
    const lowercasedCategory = category.map((cat) => cat.toLowerCase());
    const matchesCategory =
      !lowercasedCategory.length || lowercasedCategory.includes(row.category.toLowerCase());
  
    // const matchesSearchQuery =
    //   !searchQuery ||
    //   row.itemDetails.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   row.itemDetails.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   row.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   row.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   row.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    //   row.availability.toLowerCase().includes(searchQuery.toLowerCase())||
    //   row.category.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchesCategory;
  });

  const columns = [
    { 
      field: 'itemDetails', 
      headerName: 'Item Details', 
      width: 275,
      renderCell: (params) => {
        // Check if params.value is defined and has the property 'image'
        console.log(params.row)
        const imageUrl = params.row && params.row.image ? params.row.image : 'path/to/default/image.jpg'; // Provide a default image path if necessary
        const text = params.row && params.row.name ? params.row.name : 'No Text';
        const subtext = params.row && params.row.upc ? params.row.upc : 'No Subtext';
  
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={imageUrl} alt={text} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <Box>
              <Typography variant="subtitle2">{text}</Typography>
              <Typography variant="body2"  sx={{color:'blue'}}>{subtext}</Typography>
            </Box>
          </Box>
        );
      },
    },
    { field: 'category', headerName: 'Select Category', width: 250 },
    { field: 'Student Name', headerName: 'Student Name', width: 250 },
    { field: 'ProjectName', headerName: 'Project Name', width: 250 },
    { field: 'Date', headerName: 'Date', width: 150 },
  ];

  // const rows = machineData;



  return (
    <Box sx={{ height: 400, width: '97.5%', marginLeft: '1rem' }}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={7}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPageOptions={[3]}
        pagination
        paginationMode="server" // Use this if you're handling pagination server-side
        checkboxSelection
        disableSelectionOnClick
        disableColumnFilter // Disable column filters
        disableColumnMenu // Disable column menu
        disableDensitySelector // Disable density selector
        disableExport // Disable export options
        disableMultipleColumnsSorting // Disable multiple columns sorting
        sortingOrder={[]} // Disable sorting
        disableColumnSort 
      />
    </Box>
  );
}

export default ReservationsTable

