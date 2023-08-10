import React, { useState , useRef } from "react";
import { TextField, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { SendAndArchiveOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    setQuestion("");
  };

  const handleFileSelect = (event) => {
    console.log(event.target.files[0] , "selected");
    alert(event.target.files[0].name + " selected");
    console.log(selectedFile)
    setSelectedFile(event.target.files[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 37,
        width: "80vw",
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
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
      />
      <Button type="submit">
        <IconButton style={{ marginLeft: 10 }}>
          <SendAndArchiveOutlined />
        </IconButton>
      </Button>
    </form>
  );
};

export default QuestionForm;
