import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./../components/FlexBetween";
import profileImage from "../assets/profile.jpeg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },

  {
    text: "Client Facing",
    icon: null,
  },

  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },

  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },

  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },

  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },

  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },

  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({ drawerWidth, openSidebar, setOpenSidebar, isNonMobile }) => {
  const { pathName } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathName && pathName.substring(1));
  }, [pathName]);

  return (
    <Box component="nav">
      {openSidebar && (
        <Drawer
          variant="persistent"
          anchor="left"
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          sx={{
            with: drawerWidth,
            "&.MuiDrawer-paper": {
              color: theme.palette.secondary.alt,
              backgroundColor: theme.palette.background.main,
              width: drawerWidth,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px ",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem ">
              <FlexBetween color={theme.palette.secondary.alt}>
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    ECOMMERCE
                  </Typography>
                </Box>
                {isNonMobile && (
                  <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem " }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem button key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroudColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          {/*1h29p16s*/}
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.primary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
