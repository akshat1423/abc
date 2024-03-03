import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';
import MachineTable from '../components/Inventory/MachineTable'
import EquipmentsTable from '../components/Inventory/EquipmentsTable'; // Assuming you have this component
import InventoryTable from '../components/Inventory/InventoryTable';
import TopBarComponent from '../components/Inventory/TopBar'
import SearchBar from '../components/Inventory/SearchBar';
import { ta } from 'date-fns/locale';

const Inventory = ({collapsed, setCollapsed}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [category, setCategory] = React.useState([]);
  const [group, setGroup] = React.useState([]);
  const [tag, setTag] = React.useState([]);

  const renderTable = () => {
    switch (activeTab) {
      case 0:
        return <MachineTable searchQuery={searchQuery} category={category} group={group} tag={tag}/>;
      case 1:
        return <EquipmentsTable searchQuery={searchQuery} category={category}/>
      case 2:
        return <InventoryTable searchQuery={searchQuery} category={category} group={group} tag={tag}/>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: collapsed? '7%': '17.5%' }}>
        <MenuComponent collapsed={collapsed} setCollapsed={setCollapsed}/>
      </Box>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <TopBarComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar activeTab={activeTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} category={category} setCategory={setCategory} group={group} setGroup={setGroup} tag={tag} setTag={setTag}/>
        {renderTable()}
      </Box>
    </Box>
  );
};

export default Inventory;
