import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 180;

const Sidebar = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#121212',
                    color: 'white',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider sx={{borderColor: 'white', width: '90%', marginLeft: '5%'}} />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{color: 'white'}}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{borderColor: 'white', width: '90%', marginLeft: '5%'}} />
        </Drawer>
        <Box component="main" className='contents'>
            {children}
        </Box>
    </Box>
  );
}

export default Sidebar;