// Removed unused 'lazy' and 'Navigate' imports
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/Login'
import RegisterPage from './pages/admin/Register'
import Dashboard from './pages/Dashboard';
import Records from './pages/Records';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import CalendarPage from '../src/components/Calender/Calender';
import CommonLoginPage from './pages/admin/commonLogin';
import AdminLoginPage from './pages/admin/adminLogin';
import StudentLoginPage from './pages/admin/studentLogin';
import { useState } from 'react';
export const AppRoutes = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Routes>
        <Route path="/" element={<Dashboard collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path="/dashboard" element={<Dashboard collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path="/inventory" element={<Inventory collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path="/records" element={<Records collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path='/settings' element={<Settings collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path='/calender' element={<CalendarPage collapsed={collapsed} setCollapsed={setCollapsed}/>} />
      {/* TODO: Use Tabs logic. No need to change urls on changing tabs. */}
        {/* <Route path='/usergeneral' element={<UserGeneral />} />
        <Route path='/useruser' element={<UserUser />} />
        <Route path='/' element={<UserGroups />} />
        <Route path='userpermissions' element={<UserPermisiions />} /> */}

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<CommonLoginPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/studentlogin" element={<StudentLoginPage />} />
    </Routes>
)};
