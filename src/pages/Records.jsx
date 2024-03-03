import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';
import ReservationsTable from '../components/records/ReservationsTable';
import IssuableTable from '../components/records/IssuableTable';
import PurchasesTable from '../components/records/PurchasesTable';
import TopBarComponent from '../components/records/TopBar'
import SearchBar from '../components/records/SearchBar';

const Records = ({collapsed, setCollapsed}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [category, setCategory] = React.useState([]);

  const renderTable = () => {
    switch (activeTab) {
      case 0:
        return <ReservationsTable searchQuery={searchQuery} category={category}/>;
      case 1:
        return <IssuableTable searchQuery={searchQuery} category={category}/>
      case 2:
        return <PurchasesTable searchQuery={searchQuery} category={category}/>;
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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} category={category} setCategory={setCategory}/>
        {renderTable()}
      </Box>
    </Box>
  );
};

export default Records;
