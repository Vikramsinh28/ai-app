import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import AnswerDisplay from "../../components/Answer/Answer";

const Main = () => {
  
  const [qaPairs, setQAPairs] = useState([]);
  const [isFormEnabled, setIsFormEnabled] = useState(true);


  const [chatArray , setChatArray ] = useState([  
    {
      id : 1, 
      chat : "Personal"
    },
    {
      id : 2,
      chat : "Public",
    }
  ]);

  const [prompts , setPrompts] = useState([
    {
      id : 1,
      name : 'name',
      description : "dadadadadada",
      prompt : "name?"
    },
    
    {
      id : 2,
      name : 'name',
      description : "dadadadadada",
      prompt : "name?"
    },
    
    {
      id : 3,
      name : 'name',
      description : "dadadadadada",
      prompt : "name?"
    },
    
  ]);

  const generateRandomAnswer = () => {
    // Replace this with your logic to generate a random answer
    const answers = ['Yes', 'No', 'Maybe', 'Ask again later'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleQuestionSubmit = (submittedQuestion) => {
    setIsFormEnabled(false); // Disable the form after question submission

    // Simulate fetching an answer (you would replace this with your actual logic)
    setTimeout(() => {
      const newQAPair = {
        question: submittedQuestion,
        answer: generateRandomAnswer(),
      };
      setQAPairs([...qaPairs, newQAPair]);
      setIsFormEnabled(true); // Enable the form after receiving the answer
    }); // Simulate a delay of 2 seconds
  };


  useEffect(() => {
    console.log("chatArray" , chatArray);
  }, [chatArray])

  return (
    <Layout  chatArray = {chatArray}  setChatArray = {setChatArray}  prompts = {prompts} setPrompts={setPrompts}>
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
            position: "absolute",
            left : "50%",
            bottom: "0%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <QuestionForm onSubmit={handleQuestionSubmit} isFormEnabled={isFormEnabled} setIsFormEnabled = {setIsFormEnabled} />
        </Box>

      </Box> 


    </Layout>
  );
};

export default Main;
