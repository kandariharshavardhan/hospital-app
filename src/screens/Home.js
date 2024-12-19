import React from 'react';
import Doctors from '../components/Doctors'; // Default import
import Diseases from '../components/Diseases'; // Default import
import Patients from '../components/Patients'; // Default import
import Appointments from '../components/Appopintments'; // Default import
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from '@chakra-ui/react';

function Home() {
  return (
    <Flex direction="row" height="100%"  width="100%">
      {/* Left Tabs */}
      <Box  bg="gray.100" height="100%"  width="100%">
        <Tabs orientation="vertical" variant="unstyled">
        <Box width="10%" height="100%" bg="gray" >
          <Box height="100%" bg="gray.200" >
          <TabList>
            <Tab _selected={{ bg: 'teal.400', color: 'white' }}>Doctor</Tab>
            <Tab _selected={{ bg: 'teal.400', color: 'white' }}>Patients</Tab>
            <Tab _selected={{ bg: 'teal.400', color: 'white' }}>Diseases</Tab>
            <Tab _selected={{ bg: 'teal.400', color: 'white' }}>Appointments</Tab>
          </TabList>
          </Box>
          </Box>
          <Box width="80%" bg="gray.100">
          <TabPanels>
            <TabPanel>
              <Doctors /> {/* Display Doctors component */}
            </TabPanel>
            <TabPanel>
              <Patients /> {/* Display Patients component */}
            </TabPanel>
            <TabPanel>
              <Diseases /> {/* Display Diseases component */}
            </TabPanel>
            <TabPanel>
              <Appointments /> {/* Display Appointments component */}
            </TabPanel>
          </TabPanels>
          </Box>
        </Tabs>
      </Box>

    
    </Flex>
  );
}

export default Home;
