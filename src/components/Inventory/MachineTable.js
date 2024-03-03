import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import machineData from '../../utilities/dummy_data/inventory_items.json'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import EditInventoryDialog from './Popups/EditInventory';
import DatePickerDialog from './Popups/DatePicker'
import Delete from './Popups/Delete';
import { useState } from 'react';
import { useEffect } from 'react';
import MachineListAPIs from '../../utilities/api/AdminMachineList';
import InventoryDetailAPIs from '../../utilities/api/AdminInventoryDetail';
import { useSelector } from 'react-redux';
const MachineTable = ({searchQuery, category}) => {

  const [tableData, setTableData] = useState([]);

  const [page, setPage] = useState(0);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [isEditInventoryOpen, setEditInventoryOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const {user} = useSelector(state => state.user);
  //const accessToken = user.access;
  //console.log('token', user);


  useEffect(()=>{
    const response = MachineListAPIs.MachineListGet();
    //console.log('30', response);
    response.then((result)=>{
      console.log(result);
      setTableData(result);
      //console.log('33', tableData);
    }).catch((error)=>{
        console.log("error", error);
    })
  }, []);
  
  const rows = tableData.map((item, index) => ({ ...item, id: index }));


  const handleEditInventory = (row)  => {
    setCurrentRow(row);
    setEditInventoryOpen(true);
  }

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  const handleCloseDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // You might want to automatically close the dialog upon selecting a date or leave it open for further changes
    // handleCloseDatePicker();
  };


  const handleOpenDeletePopup = (row) => {
    setCurrentRow(row);
    setOpenDeletePopup(true);
  };


  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };


  const handleDelete = () => {
    console.log('Delete row:', currentRow);
    // Add your delete logic here
    const response = InventoryDetailAPIs.InventoryDetailDelete(currentRow.id);
    response.then(()=>{

    }).catch((error)=>{
      console.log("error while deleting", error);
    })
    handleCloseDeletePopup();
  };
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
        //console.log(params.row)
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
    { field: 'category', headerName: 'Select Category', width: 275 },
    { field: 'description', headerName: 'Description', width: 275 },
    { field: 'availability', headerName: 'Availability', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        return (
          <React.Fragment>
             <IconButton aria-label="edit" onClick={() => setIsDatePickerOpen(true)}>
              <DateRangeOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="edit" onClick={() => handleEditInventory(params.row)}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => handleOpenDeletePopup(params.row)}>
                <DeleteOutlineSharpIcon fontSize="small" sx={{color: '#C90505'}}/>
              </IconButton>
            <IconButton aria-label="move up">
            <KeyboardArrowUpIcon sx={{color:'#007BFF'}} />
            </IconButton>
          </React.Fragment>
        );
      },
      width: 150,
    },
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
       <Delete open={openDeletePopup} onClose={handleCloseDeletePopup} onConfirm={handleDelete} />
       <EditInventoryDialog currentRow = {currentRow} open={isEditInventoryOpen}  onClose={() => setEditInventoryOpen(false)}/>
       <DatePickerDialog
        open={isDatePickerOpen}
        selectedDate={date}
        handleDateChange={handleDateChange}
        handleClose={handleCloseDatePicker}
      />
    </Box>
  );
}

export default MachineTable

