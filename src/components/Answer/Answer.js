import { Avatar, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FlareIcon from "@mui/icons-material/Flare";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rotatingIcon: {
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const AnswerDisplay = ({ question, answer }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second delay before showing the answer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      style={{
        float: "left",
        marginTop: "3vh",
      }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            top: 0,
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            <Avatar
              sx={{ bgcolor: "#0e0e0e", width: 24, height: 24, fontSize: 12 }}
            ></Avatar>
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {question}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            top: 0,
          }}
        >
          {loading ? (
            <div className={classes.loading}>
              <FlareIcon className={classes.rotatingIcon} />
            </div>
          ) : (
            <Typography variant="body1">{answer}</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default AnswerDisplay;
