import React, { useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import { Box, TextField } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { AddCircleOutline, SendAndArchiveOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Input } from "@mui/material";

const Main = () => {
  const [value, setValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleFileSelect = (event) => {
    console.log(event.target.files[0] , "selected");
    alert(event.target.files[0].name + " selected");
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Layout>
      <Box
        sx={{ background: "#f7f7ff" }}
        style={{
          margin: "0%",
          borderRadius: "20px",
          height: "100vh",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 37,
            width: "80vw",
            marginLeft: "1vw",
          }}
        >
          <Tooltip title="Add a file">
            <IconButton
              onClick={() => {
                // Open the file input when the icon is clicked
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              <AddCircleOutline
                sx={{ color: "grey", fontSize: 23, marginRight: 1 }}
              />

              {/* The actual file input which is hidden */}

              <input
                type="file"
                accept=".pdf,.doc,.docx,.png" // Specify the accepted file types
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              /> 
              
            </IconButton>
          </Tooltip>

          <TextField
            label="Enter a Prompt here"
            value={value}
            onChange={handleChange}
            fullWidth
          />
          <IconButton
            onClick={handleClear}
            disabled={value === ""}
            style={{ marginLeft: 10 }}
          >
            <SendAndArchiveOutlined />
          </IconButton>
        </Box>
      </Box>
    </Layout>
  );
};

export default Main;
