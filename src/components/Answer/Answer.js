import { Avatar, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const AnswerDisplay = ({ question, answer }) => {
  return (
    <Container  style={{
        float: "left",
        marginTop : "3vh",
    }}>
        <Stack spacing={2} >
            <Stack direction="row" spacing={2} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                top: 0,
            }}>

                <Typography variant="h6" component="div" gutterBottom >
                        <Avatar sx={{ bgcolor: '#0e0e0e', width: 24, height: 24, fontSize: 12 }}></Avatar>
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                        {question}
                </Typography>
            
            </Stack>

            <Stack direction="row" spacing={2} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                top: 0,
            }}>

                <Typography variant="h6" component="div" gutterBottom>
                        {answer}
                </Typography>
            
            </Stack>

        </Stack>

    </Container>
  );
};

export default AnswerDisplay;



