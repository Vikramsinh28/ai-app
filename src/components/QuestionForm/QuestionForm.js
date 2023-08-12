import React, { useState  } from "react";
import { Button, TextareaAutosize } from "@mui/material";
import { IconButton } from "@mui/material";
import { SendAndArchiveOutlined } from "@mui/icons-material";

const QuestionForm = ({ onSubmit , isFormEnabled }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    setQuestion("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TextareaAutosize
        style={{  
          width: "55vw",
          padding: "1vh 1vw",
          paddingTop: "1vh",
          fontSize: "1rem",
          resize: "none",
          borderRadius: "5px",
        }}

        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={!isFormEnabled} // Disable the input when isFormEnabled is false
      />
      <Button type="submit" disabled={!isFormEnabled}>
        <IconButton style={{ marginLeft: 10 }}>
          <SendAndArchiveOutlined />
        </IconButton>
      </Button>
    </form>
  );
};

export default QuestionForm;
