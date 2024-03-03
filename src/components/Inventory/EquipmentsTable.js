import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import machineData from '../../utilities/dummy_data/inventory_items.json'
import { AdminEquipmentListGet } from "../../utilities/api/AdminEquipmentList";
import { useState , useEffect } from 'react';
import Delete from './Popups/Delete';
import EditInventoryDialog from './Popups/EditInventory';
import EquipmentListAPIs from '../../utilities/api/AdminEquipmentList';
import InventoryDetailAPIs from '../../utilities/api/AdminInventoryDetail';

const EquipmentsTable =  ({searchQuery, category}) => {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [isEditInventoryOpen, setEditInventoryOpen] = useState(false);

  useEffect(()=>{
    const response = EquipmentListAPIs.EquipmentListGet();
    response.then((result)=>{
      //console.log(result);
      setTableData(result);
      console.log('28', tableData);
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

  const handleOpenDeletePopup = (row) => {
    setCurrentRow(row);
    setOpenDeletePopup(true);
  };


  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };


  const handleDelete = () => {
    console.log('Delete row:', currentRow);
    const response = InventoryDetailAPIs.InventoryDetailDelete(currentRow.id);
    response.then(()=>{

    }).catch((error)=>{
      console.log("error while deleting", error);
    })
    handleCloseDeletePopup();
  };

  

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
    { field: 'instances', headerName: 'Stock', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <IconButton aria-label="edit" onClick={() => handleEditInventory(params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => handleOpenDeletePopup(params.row)}>
              <DeleteOutlineSharpIcon sx={{color: '#C90505'}}/>
            </IconButton>
            <IconButton aria-label="move up">
              <KeyboardArrowDownIcon sx={{color:'#007BFF'}} />
            </IconButton>
          </React.Fragment>
        );
      },
      width: 150,
    },
  ];
  

  const filteredRows = rows.filter((row) => {
    const lowercasedCategory = category.map((cat) => cat.toLowerCase());
    const matchesCategory =
      !lowercasedCategory.length || (row.category && lowercasedCategory.includes(row.category.toLowerCase()));
  
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
        disableColumnResize // Disable column resizing
      />
      <Delete open={openDeletePopup} onClose={handleCloseDeletePopup} onConfirm={handleDelete} />
       <EditInventoryDialog currentRow = {currentRow} open={isEditInventoryOpen}  onClose={() => setEditInventoryOpen(false)}/>
    </Box>
  );
}

export default EquipmentsTable

