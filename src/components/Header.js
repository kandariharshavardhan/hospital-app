import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, HStack, List, ListItem } from '@chakra-ui/react';
import doctor3 from './pictures/doctor3.png'

function Header() {
  return (
    <Box
      as="header"
      bg="teal.500" // Background color
      height="30%" // Height as requested
      width="100%" // Full width
      color="white" // Text color
      padding={4} // Padding around content
    >
      <Flex as="nav" justifyContent="space-around" alignItems="center">
        <HStack justifyContent="space-between" >
        <Box 
      width="7%">
      <img src={doctor3}  />
      </Box>
        <List display="flex" styleType="none" margin={0} padding={0}>
          <ListItem mx={3}>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem mx={3}>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem mx={3}>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </List>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
