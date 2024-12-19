import React from 'react';
import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="teal.700" 
      height="30%" 
      width="100%" 
      color="white" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      padding={4} 
    >
      <p>© 2024 My Website. All rights reserved.</p>
    </Box>
  );
}

export default Footer;
