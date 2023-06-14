import React, {Navigate} from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {  Button } from "@mui/material";
import HeaderBread from "../../components/HeaderBread";
import FlexBetween from "../../components/FlexBetween";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import ShowAction from "../../components/ShowAction";

const columns = [
  { field: "id", headerName: "ProductID", flex: 0.5 },
  {
    field: "image",
    headerName: "Product Image",
    type: "image",
    flex: 0.5,
    editable: true,
    renderCell: (params) => {
      return (
        <Box
          component="img"
          sx={{
            height: 70,
            width: 70,
            maxHeight: { xs: 70, md: 50 },
            maxWidth: { xs: 70, md: 50 },
          }}
          alt="The house from the offer."
          src={params.value}
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Product Name",
    flex: 1,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    editable: true,
  },
  {
    field: "created_at",
    headerName: "Create At",
    flex: 1,
    editable: true,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    flex: 1,
  },
  {
    field: "publish",
    headerName: "Publish",
    type: "boolean",
    flex: 1,
    editable: true,
  },
  {
    field: "Action",
    flex: 1,
    renderCell: (params) => {
      return (
        <ShowAction params = {params}/>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "2750 Cotu Classic Sneaker",
    category: "Apparel",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 100,
    price: 100,
    publish: true,
  },
  {
    id: 2,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "ASMC Winter Boot Cold.Rdy",
    category: "Shose",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 107000,
    price: 100990,
    publish: false,
  },
  {
    id: 3,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "Air Jordan XXXV PF",
    category: "Apparel",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 323100,
    price: 324100,
    publish: true,
  },
  {
    id: 4,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "Arizona Soft Footbed Sandal",
    category: "Shose",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 56100,
    price: 4100,
    publish: false,
  },
  {
    id: 5,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "Boston Soft Footbed Sandal",
    category: "Shose",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 4100,
    price: 900100,
    publish: true,
  },
  {
    id: 6,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_20.jpg",
    name: "Chuck 70 Hi Sneaker",
    category: "Apparel",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 2100,
    price: 8100,
    publish: false,
  },
  {
    id: 7,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_17.jpg",
    name: "Foundations Matte Flip Flop",
    category: "Shose",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 1200,
    price: 11100,
    publish: true,
  },
  {
    id: 8,
    image:
      "https://api-prod-minimal-v5.vercel.app/assets/images/m_product/product_7.jpg",
    name: "Gazelle Vintage low-top sneakers",
    category: "Accessories",
    created_at: "2021-01-01T00:00:00.000Z",
    stock: 1002,
    price: 398000,
    publish: true,
  },
];

const Product = () => {
  const navigate = useNavigate();
  return (
    <Box p={3}>
      <FlexBetween>
        <HeaderBread page="Product" action="List" />
        <Button variant="contained" startIcon={<AddIcon />} onClick={()=> navigate("/product/add")}>
          Add New
        </Button>
      </FlexBetween>
      <Box sx={{ width: "100%" }} mt={5}>
        <DataGrid
          rowHeight={80}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Product;
