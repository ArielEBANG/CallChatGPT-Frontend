import React from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';

const drawerWidth = 240;

const SideBarLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Main Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat risus vitae urna fermentum, nec convallis mauris pharetra.
          Suspendisse potenti. Fusce sagittis urna sit amet elit cursus
          vehicula. Nam vitae enim nec turpis fermentum auctor.
        </Typography>
        <Typography paragraph>
          Curabitur nec nunc felis. Vivamus volutpat, nisl nec malesuada
          fringilla, sapien arcu dictum nunc, id ultrices ligula purus at
          justo. Sed at diam a ligula gravida accumsan.
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBarLayout;
