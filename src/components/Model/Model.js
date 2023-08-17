import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Box,
} from '@mui/material';

const ChatModal = ({ open, handleClose, handleSubmit, formData, handleFormChange }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="chat-modal-title"
      aria-describedby="chat-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" id="chat-modal-title">
            Chat Details
          </Typography>
          <form onSubmit={handleSubmit} >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextareaAutosize
              rowsMin={3}
              placeholder="Prompt"
              name="prompt"
              value={formData.prompt}
              onChange={handleFormChange}
              style={{ width: '100%', padding: '16.5px 14px', marginTop: '10px' }}
            />
            <Button type="submit" variant="contained" color="primary" style={{width:'100%'}}>
              Save
            </Button>
          </form>
        </Paper>
      </Box>
    </Modal>
  );
};

export default ChatModal;
