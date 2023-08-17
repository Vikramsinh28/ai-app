import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Delete, Message } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import {Paper} from '@mui/material';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ChatModal from '../Model/Model';

const drawerWidth = 200;
const rightDrawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(4)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer({children , chatArray , setChatArray , prompts , setPrompts}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    prompt: '',
  });
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // add chat in chatArray 
  const addChat = (chat) => {
    setChatArray([...chatArray , chat])
  }

  const removeChat = (id) => {
    const newChatArray = chatArray.filter((chat) => chat.id !== id);
    setChatArray(newChatArray);
  }

  const handleModalOpen = (chat) => {
    setSelectedChat(chat); // Set the selected chat before opening the modal
    setOpenModel(true);
  };


  const handleFormChange = (event) => {
    const { name, value } = event.target;
  };

  const handleSubmit = (event) => {
    // get the prompt from id of selected chat and update the prompt array 
    const newPrompt = {
      id : prompts.length + 1,
      name : formData.name,
      description : formData.description,
      prompt : formData.prompt
    }

    setPrompts([...prompts , newPrompt])
  };

  React.useEffect(() => {
    if (selectedChat) {
      const selectedPrompt = prompts.find((prompt) => prompt.id === selectedChat.id);
      if (selectedPrompt) {
        setFormData({
          name: selectedPrompt.name,
          description: selectedPrompt.description,
          prompt: selectedPrompt.prompt,
        });
      }
    }
  }, [selectedChat, prompts]);
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx ={{
         boxShadow : 'none',
         borderBottom : '1px solid #e0e0e0',
      }}>
        <Toolbar
            sx={{   
                backgroundColor : '#fff',
                boxShadow : 'none', 
            }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color : '#000'
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{
                color : '#000',
          }}>
            AI WEB
          </Typography>
        </Toolbar>

      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Stack sx={{
          width: '100%',
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          mt : 2
        }}
         style={{
            cursor : 'pointer'
         }}
        >
          <Button
            sx={{
              width: '50%',
              borderRadius: 4,
              backgroundColor : '#f5f5f5',
              height: 40,
              color: '#0e0e0e',
              '&:hover': {
              },
            }}

            style={{
              margin : '0 20%'
            }}

            onClick = {() => {
              addChat({
                id : chatArray.length + 1,
                chat : "New Chat",
              })
            }}
          >
            <AddIcon sx={{ mr: 1 ,
              color : '#0e0e0e',
              fontSize : 20
            }} />
          </Button>
          
        </Stack>

        <List>
          {chatArray.map((text, index) => (
            <ListItem key={text.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  display   : 'flex',
                  alignItems : 'center',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                > 
                  <Message sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText primary={text.chat} sx={{ opacity: open ? 1 : 0 }} />
                
                {
                  open ? (
                    <Delete sx={{ width: 20, height: 20 }} style = {{
                      position : 'absolute',
                      right : 10,
                      color : 'grey'
                    }}
                    onClick = {() => {
                      removeChat(text.id)
                    }

                    } />
                  ) : null
                }

              </ListItemButton>
            </ListItem>
          ))}
        </List> 
      </Drawer>

      <Drawer variant="permanent" anchor="right" open={rightDrawerOpen} style={{
        // width : rightDrawerWidth,
        zIndex : 29090,
      }}>
        <DrawerHeader>
          <IconButton onClick={() => setRightDrawerOpen(!rightDrawerOpen)} >
            {
              theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />
            }
          </IconButton>
        </DrawerHeader>
        <Divider />

      <Stack sx={{
          width: '100%',
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          mt : 2
        }}
         style={{
            cursor : 'pointer'
         }}
        >
          <Button
            sx={{
              width: '50%',
              borderRadius: 4,
              backgroundColor : '#f5f5f5',
              height: 40,
              color: '#0e0e0e',
              '&:hover': {
              },
            }}

            style={{
              margin : '0 20%'
            }}

            onClick = {() => {
              addChat({
                id : chatArray.length + 1,
                chat : "New Chat",
              })
            }}
          >
            <AddIcon sx={{ mr: 1 ,
              color : '#0e0e0e',
              fontSize : 20
            }} />
          </Button>
          
        </Stack>

        <List>
          {prompts.map((text, index) => (
            <ListItem key={text.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  display   : 'flex',
                  alignItems : 'center',
                }}

                onClick = {handleModalOpen}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Message sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText primary={text.prompt} sx={{ opacity: open ? 1 : 0 }} />
                {
                  open ? (
                    <Delete sx={{ width: 20, height: 20 }} style = {{
                      position : 'absolute',
                      right : 10,
                      color : 'grey'
                    }}
                    onClick = {() => {
                      removeChat(text.id)
                    }

                    } />
                  ) : null
                }

              </ListItemButton>
            </ListItem>
          ))}
        </List> 
        
      
      </Drawer>
      
      <Box component="main" >
        <DrawerHeader />
        {children}
      </Box>


      <ChatModal open =  {openModel}  handleSubmit =  {handleSubmit} formData = {formData} handleFormChange = {handleFormChange} />

    </Box>
  );
}
