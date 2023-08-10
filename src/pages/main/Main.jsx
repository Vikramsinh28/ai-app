import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import AnswerDisplay from "../../components/Answer/Answer";

const Main = () => {
  
  const [qaPairs, setQAPairs] = useState([]);

  const generateRandomAnswer = () => {
    // Replace this with your logic to generate a random answer
    const answers = ['Yes', 'No', 'Maybe', 'Ask again later'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleQuestionSubmit = (submittedQuestion) => {
    const newQAPair = {
      question: submittedQuestion,
      answer: generateRandomAnswer(),
    };
    setQAPairs([...qaPairs, newQAPair]);
  };

  return (
    <Layout>
      <Box
        style={{
          margin: "0%",
          borderRadius: "20px",
          height: "100vh",
        }}
      >
        <Box component="main" style={{
           float: "left",
           padding: "2vh 2vw",
        }}>
          {qaPairs.map((qaPair, index) => (
            <AnswerDisplay
              key={index}
              question={qaPair.question}
              answer={qaPair.answer}
            />
          ))}

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
