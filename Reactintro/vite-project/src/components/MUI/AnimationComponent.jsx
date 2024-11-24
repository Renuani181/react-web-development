import React from 'react';
import { Box, AppBar, Tabs, Tab, useTheme, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/ArrowUpward';
import { green } from '@mui/material/colors';
import PropTypes from 'prop-types';

const fabStyle = {
  position: 'absolute',
  top: '80%', // Positioning near the bottom of the dashboard component
  right: '16px', // Aligning to the right
  zIndex: 1000,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function AnimationComponent() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%', // Make sure it takes the full width of the parent container
        position: 'relative',
        minHeight: 500, // Adjust the min height according to your layout
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        {/* Add Content for Item One */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Add Content for Item Two */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Add Content for Item Three */}
      </TabPanel>

      {/* FABs positioned relative to the DashboardLayout */}
      {fabs.map((fab, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: `${fab.sx.top}`, // Use the predefined position (near the bottom)
            right: `${fab.sx.right}`,
            zIndex: 1000,
          }}
        >
          <Fab color={fab.color} sx={fab.sx} aria-label={fab.label}>
            {fab.icon}
          </Fab>
        </Box>
      ))}
    </Box>
  );
}

export default AnimationComponent;
