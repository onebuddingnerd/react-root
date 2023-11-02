import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import InfoIcon from '@mui/icons-material/Info';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const {childJSX, ...other } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs style={{paddingLeft: '10%'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={
                <div style={{display: 'flex', flexFlow: 'row'}}>
                    <InfoIcon />
                    <h5>&#160; About</h5>
                </div>} 
                {...a11yProps(0)} />
          <Tab label={<h5>Projects</h5>} {...a11yProps(1)} />
          <Tab label={<h5>Coursework</h5>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {childJSX[0]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {childJSX[1]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {childJSX[2]}
      </CustomTabPanel>
    </Box>
  );
}