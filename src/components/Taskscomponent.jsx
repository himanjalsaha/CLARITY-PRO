// import React from 'react'
import TopNav from './TopNav'
import ListView from './ListView';
import Kanban from './Kanban';
import Timeline from './Timeline';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// const Taskscomponent = () => {
//   return (
//     <div className='bg-[#282828] w-full '>
//         <TopNav/>
//       <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
//         <text className='text-white text-2xl font-sans font-bold mx-5'>Manage your Tasks</text>
//         <div className='m-5' >
//           <ul className=' flex flex-row gap-5  text-lg'>
//             <button className='hover:overline '>Board</button>
//             <button className='hover:overline '>List</button>
//             <button className='hover:overline '>Timeline</button>
//             <button className='hover:overline '>Files</button>
//           </ul>
//         </div>
//         <hr />
//         <Boardview/>
//         </div>
//     </div>
//   )
// }

// export default Taskscomponent

import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
        <Box sx={{ p: 3 }}>
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

export default function Taskscomponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

        <div className='bg-[#282828] w-full '>
        <TopNav/>
      <div className=' h-[calc(100vh-74px)] overflow-auto text-white p-5'>
        <text className='text-white text-2xl font-sans font-bold mx-5'>Manage your Tasks</text>
        <Box sx={{ width: '100%'  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
        <Tabs value={value} textColor='primary' onChange={handleChange}  aria-label="basic tabs example">
          <Tab  label="Board View"  {...a11yProps(0)} sx={{ color: 'white' }} />
          <Tab label="List View" {...a11yProps(1)}  sx={{ color: 'white' }}/>
          <Tab label="Timeline" {...a11yProps(2)}  sx={{ color: 'white' }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Kanban/> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <ListView/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Timeline/>
      </CustomTabPanel>
    </Box>
       
     
        </div>
    </div>
  );
}
