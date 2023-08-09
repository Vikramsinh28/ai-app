import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Box, TextField } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { SendAndArchiveOutlined } from "@mui/icons-material";

const ClearIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
};

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="App">
      <Layout>
        <Box
          sx={{ background: "#f7f7ff" }}
          style={{
            margin: "0%",
            borderRadius: "20px",
            height: "100vh",
          }}
        >
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


          </Box>
          <Box  
            style={{
              position : 'sticky',
              bottom : 0,
              margin : '0 20%',
              display : 'flex'
            }}

          >
            <TextField
              label="Your text"
              value={value}
              onChange={handleChange}
              style={{
                width: "100%",
                border: 0,
                backgroundColor: "#fff",
              }}
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
    </div>
  );
}

export default App;
