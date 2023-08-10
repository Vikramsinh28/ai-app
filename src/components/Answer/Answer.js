import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

const AnswerDisplay = ({ question, answer }) => {
  return (
    <Container  style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        top: 0,
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
                        Q:
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

                <Typography variant="h6" component="div" gutterBottom >
                        A:
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                        {answer}
                </Typography>
            
            </Stack>

        </Stack>

    </Container>
  );
};

export default AnswerDisplay;



