import React, { Navigate } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {  Typography } from "@mui/material";
import HeaderBread from "../../components/HeaderBread";
import FlexBetween from "../../components/FlexBetween";


const AddProduct = () => {
  return (
    <Box p={3}>
      <FlexBetween>
        <HeaderBread page="Product" action="Create" />
      </FlexBetween>
      <Box sx={{ width: "100%" }} mt={5}>
        <FlexBetween>
          <Box>
            <Typography variant= "h5">
                Details    
            </Typography>

            <Typography >
            Title, short description, image...    
            </Typography>

          </Box>
          <Box></Box>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default AddProduct;
