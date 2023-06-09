import React from 'react'; 
import {useState} from 'react'; 
import {Box, useMediaQuery} from '@mui/material'; 
import {Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar'; 
import Sidebar from '../../components/Sidebar';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box width="100%" height="100%"  display={isNonMobile ? "flex" : "block"}>
    <Sidebar
    isNonMobile={isNonMobile}
    openSidebar={openSidebar}
    setOpenSidebar={setOpenSidebar}
    drawerWidth = "250px"/>
    <Box>
      <Navbar
      OpenSidebar = {openSidebar}
      setOpenSidebar = {setOpenSidebar}/>
      <Outlet />
    </Box>
    </Box>
  )
}

export default Layout