import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import HeaderBread from "../../components/HeaderBread";
import FlexBetween from "../../components/FlexBetween";
import TextField from "@mui/material/TextField";
import { useTheme, styled, InputBase } from "@mui/material";
import Stack from "@mui/material/Stack";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


const AddProduct = () => {
  const theme = useTheme();

  

  const ReactQuillContainer = styled("div")(({ theme }) => ({
    "& .ql-container.ql-snow": {
      " borderBottomLeftRadius": "8px",
      borderBottomRightRadius: "8px",
    },

    /* Snow Theme */
    "& .ql-toolbar.ql-snow": {
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      color: "#fff",
    },

    "& .ql-snow .ql-stroke": {
      stroke: "#fff",
    },
    "& .ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill": {
      fill: "#fff",
    },
    ".ql-snow .ql-picker": {
      color: "#fff",
    },
    "& .ql-editor": {
      minHeight: "200px",
      maxHeight: "660px",
    },
  }));
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <Box p={3}>
      <FlexBetween>
        <HeaderBread page="Product" action="Create" />
      </FlexBetween>
      <Box sx={{ width: "100%" }} mt={5}>
        <FlexBetween sx={{ alignItems: "flex-start" }}>
          <Box flexGrow={0.3}>
            <Typography variant="h5" fontWeight="bold">
              Details
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Title, short description, image...
            </Typography>
          </Box>
          <Box
            flexGrow={0.7}
            backgroundColor={theme.palette.background.alt}
            style={{ padding: " 20px ", borderRadius: "10px" }}
          >
            <Stack component="form" spacing={2} noValidate autoComplete="off">
              <TextField
                fullWidth
                variant="outlined"
                label="Product Name"
                id="fullWidth"
              />

              <TextField multiline rows={6} label=" Sub Description" />
              <Box borderRadius="8px">
                <Typography variant="h6" fontWeight="bold" paddingBottom="5px">
                  {" "}
                  Content
                </Typography>
                <Box>
                  <ReactQuillContainer>
                    <ReactQuill modules={modules} formats={formats} />
                  </ReactQuillContainer>
                </Box>
              </Box>
                <Stack>
                  <Typography variant="h6"> Images</Typography>
                  <Box>
                    <Box>
                      <InputBase
                        styled={{ display: "none" }}
                        type="file"
                        accept="image/*"
                        id="contained-button-file"
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                        }}
                      />
                      <Stack>
                        <CloudUploadIcon />
                        <Stack>
                          <Typography variant="h6">
                            Drop or Select file
                          </Typography>
                          <Typography variant="p">
                            Drop files here or click browser thorough your
                            machine
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
            </Stack>
          </Box>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default AddProduct;
