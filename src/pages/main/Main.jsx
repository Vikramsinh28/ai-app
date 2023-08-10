import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import AnswerDisplay from "../../components/Answer/Answer";

const Main = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const generateRandomAnswer = () => {
    // Replace this with your logic to generate a random answer
    const answers = ['Yes', 'No', 'Maybe', 'Ask again later'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleQuestionSubmit = (submittedQuestion) => {
    setQuestion(submittedQuestion);
    const generatedAnswer = generateRandomAnswer();
    setAnswer(generatedAnswer);
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                top: 0,
            }}
        >
          {
            question ? <AnswerDisplay question={question} answer={answer} /> : null
          }
        </Box>

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
          <QuestionForm onSubmit={handleQuestionSubmit} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Main;
