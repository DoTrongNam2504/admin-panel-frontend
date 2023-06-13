import React from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";

const Product = () => {
  const theme = useTheme();
  return (
  <Box  p={3 } >
      <Box>
        <Typography fontWeight= {"bold"} variant="h3">Product</Typography>

      </Box> 
  </Box>
  )
}

export default Product