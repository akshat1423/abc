import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import machineData from '../../utilities/dummy_data/dummy_data.json';
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Placeholder icon
import SettingsIcon from '@mui/icons-material/Settings'; // Placeholder icon
import WifiIcon from '@mui/icons-material/Wifi'; // Placeholder icon
import LoopIcon from '@mui/icons-material/Loop'; // Placeholder icon
import { useState,useEffect } from 'react';
import Delete from './Popups/Delete';
import EditInventoryDialog from './Popups/EditInventory';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddStock from './Popups/AddStock';
import RemoveStock from './Popups/RemoveStock';
import { useSelector } from 'react-redux';
import InventoryListAPIs from '../../utilities/api/AdminInventoryList';
import InventoryDetailAPIs from '../../utilities/api/AdminInventoryDetail';
const tagIcons = {
  "star": <StarBorderIcon />,
  "gear": <SettingsIcon />,
  "wifi": <WifiIcon />,
  "loop": <LoopIcon />,
};



//const rows = machineData.map((item, index) => ({ ...item, id: index }));


const InventoryTable = ({searchQuery, category, group, tag}) => {

  const [tableData, setTableData] = useState([]);
  
  const [page, setPage] = useState(0);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [isEditInventoryOpen, setEditInventoryOpen] = useState(false);

  const [openAddStockPopup, setopenAddStockPopup] = useState(false);
  const [openRemoveStockPopup, setopenRemoveStockPopup] = useState(false);

  // const [addStockQuantity, setAddstockQuantity] = useState(0);
  // const [substractStockQuantity, setSubstractStockQuantity] = useState();
  const {user} = useSelector(state => state.user);
  const tokens = {
    refresh_token: user.refresh,
    access_token: user.access
  }
  console.log('token', tokens);

  useEffect(()=>{
    const response = InventoryListAPIs.InventoryListGet(tokens);
    response.then((result)=>{
      console.log(result);
      setTableData(result);
      console.log('55', tableData);
    }).catch((error)=>{
        console.log("error", error);
    })
  }, []);
  
   const rows = tableData.map((item, index) => ({ ...item, id: index }));

  const handleEditInventory = (row)  => {
    setCurrentRow(row);
    setEditInventoryOpen(true);
  }
  const handleOpenDeletePopup = (row) => {
    setCurrentRow(row);
    setOpenDeletePopup(true);
  };

  const handleOpenAddStockPopup = (row) => {
    setCurrentRow(row);
    setopenAddStockPopup(true);
  };
  const handleOpenRemoveStockPopup = (row) => {
    setCurrentRow(row);
    setopenRemoveStockPopup(true);
  };

  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };

  const handleCloseAddStockPopup = () => {
    setopenAddStockPopup(false);
  };
  const handleCloseRemoveStockPopup = () => {
    setopenRemoveStockPopup(false);
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




  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  // console.log('87', category.length);
  const filteredRows = rows.filter((row) => {
    const lowercasedCategory = category.map((cat) => cat.toLowerCase());
    const lowercasedTags = tag.map((tg) => tg.toLowerCase());
    const lowercasedGroup = group.map((grp) => grp.toLowerCase());

    const matchesCategory =
      !lowercasedCategory.length || (row.category && lowercasedCategory.includes(row.category.toLowerCase()));

      const matchesGroup = !lowercasedGroup.length || (row.group && lowercasedGroup.includes(row.group.toLowerCase()));

      const matchesTags =
      !lowercasedTags.length ||
      lowercasedTags.some((tag) =>
        row.tag_1 && row.tag_1.toLowerCase().includes(tag) ||
        row.tag_2 && row.tag_2.toLowerCase().includes(tag) ||
        row.tag_3 && row.tag_3.toLowerCase().includes(tag) ||
        row.tag_4 && row.tag_4.toLowerCase().includes(tag)
      );
    const matchesSearchQuery =
      !searchQuery ||
      (row.group && row.group.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.description && row.description.toLowerCase().includes(searchQuery.toLowerCase()) )||
      [row.tag_1, row.tag_2, row.tag_3, row.tag_4].some((tag) => tag && tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.availability &&  row.availability.toLowerCase().includes(searchQuery.toLowerCase()))||
      (row.category && row.category.toLowerCase().includes(searchQuery.toLowerCase()))||
      (row.upc && row.upc.includes(searchQuery.toLowerCase()))
  
    return matchesCategory && matchesSearchQuery && matchesGroup && matchesTags;
  });
  

  const columns = [
    { 
      field: 'itemDetails', 
      headerName: 'Item Details', 
      width: 275,
      renderCell: (params) => {
        const imageUrl = params.row && params.row.image ? params.row.image : 'path/to/default/image.jpg'; // Provide a default image path if necessary
        const text = params.row && params.row.name ? params.row.name : 'No Text';
        const subtext = params.row && params.row.upc ? params.row.upc : 'No Subtext';
        return(
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={imageUrl} alt={params.row.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography variant="subtitle2">{text}</Typography>
              <Typography variant="body3" sx={{color:'blue'}}>{subtext}</Typography>
            </Box>
          </Box>
        );
        },
    },
    {
      field: 'group',
      headerName: 'Group',
      width: 100,
    },
    
    { field: 'category', headerName: 'Select Category', width: 175 },
    {
      field: 'tags',
      headerName: 'Tags',
      width: 225,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {[params.row.tag_1, params.row.tag_2, params.row.tag_3, params.row.tag_4].map((tag, index) => (
            tag && (
              <IconButton key={index} aria-label={tag}>
                {tagIcons[tag]} {/* Use the corresponding icon from tagIcons, fallback to a default icon */}
              </IconButton>
            )
          ))}
        </Box>
      ),
    },
    { field: 'stock_available', headerName: 'Stock', width: 100 },
    {
      field: 'editstock',
      headerName: 'Edit stock',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <React.Fragment>
          <IconButton aria-label="add"  onClick={() => handleOpenAddStockPopup(params.row)}>
            <AddCircleOutlineOutlinedIcon sx={{color: 'green'}}/>
          </IconButton>
          <IconButton aria-label="remove"  onClick={() => handleOpenRemoveStockPopup(params.row)}>
            <RemoveCircleOutlineSharpIcon sx={{color: '#C90505'}}/>
          </IconButton>
        </React.Fragment>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 120,
      gap: 2,
      renderCell: (params) => (
        <React.Fragment>
          <IconButton aria-label="edit"  onClick={() => handleEditInventory(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete"  onClick={() => handleOpenDeletePopup(params.row)}>
            <DeleteOutlineSharpIcon sx={{color: '#C90505'}}/>
          </IconButton>
          <IconButton aria-label="move up">
          <KeyboardArrowUpIcon sx={{color:'#007BFF'}} />
          </IconButton>
        </React.Fragment>
      ),
    },
  ];

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
        paginationMode="server" // Change to 'client' if handling pagination client-side
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
      <AddStock currentRow = {currentRow} open={openAddStockPopup} onClose={handleCloseAddStockPopup}/>
      <RemoveStock currentRow = {currentRow} open={openRemoveStockPopup} onClose={handleCloseRemoveStockPopup}  />
      <Delete currentRow = {currentRow} open={openDeletePopup} onClose={handleCloseDeletePopup} onConfirm={handleDelete} />
      <EditInventoryDialog currentRow = {currentRow} open={isEditInventoryOpen}  onClose={() => setEditInventoryOpen(false)}/>
    </Box>
  );
}

export default InventoryTable

