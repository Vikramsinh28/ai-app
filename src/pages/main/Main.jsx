import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box , Button, Typography } from "@mui/material";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import AnswerDisplay from "../../components/Answer/Answer";

const Main = () => {
  
  const [qaPairs, setQAPairs] = useState([]);
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [modelSelectionCategory , setModelSelectionCategory] = useState([
    {
      id : 1,
      category : "Personal",
    },
    {
      id : 2,
      category : "Public",
    },
    {
      id : 3,
      category : "Personal",
    }
  ]);

  const [modelSelection , setModelSelection] = useState({})


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
    // setIsFormEnabled(false); // Disable the form after question submission
    // Simulate fetching an answer (you would replace this with your actual logic)

    console.log("modelSelection" , modelSelection);

    if(modelSelection === "" && modelSelection === null && modelSelection === undefined){
      alert("Please select a model first");
      console.log("modelSelection in if" , modelSelection);
      setIsFormEnabled(false);
    }else {
      alert("Model Selected");
      console.log("modelSelection in else" , modelSelection);
      setTimeout(() => {
        const newQAPair = {
          question: submittedQuestion,
          answer: generateRandomAnswer(),
        };
        setQAPairs([...qaPairs, newQAPair]);
        setIsFormEnabled(true); // Enable the form after receiving the answer
      }); // Simulate a delay of 2 seconds
    }

  };

  const handleModelSelection = (model) => {
    setModelSelection(model);
    alert("Model Selected");
  }



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

          <Typography variant="h4" style={{
            fontSize: "1.5rem",
          }}>
             Select Model 
          </Typography>


          {
            modelSelectionCategory.map((category , index) => (
              <Button key={index} style={{
                padding: "1vh 1vw",
                margin: "1vh",
                border : "1px solid #0e0e0e",
                borderRadius: "20px",
                cursor: "pointer",
              }}

              onClick={() => handleModelSelection(category)}

              >
                {category.category}
              </Button>
            ))
          }


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
          <QuestionForm onSubmit={handleQuestionSubmit} isFormEnabled={isFormEnabled} setIsFormEnabled = {setIsFormEnabled} modelSelection = {modelSelection} />
        </Box>

      </Box> 


    </Layout>
  );
};

export default Main;
