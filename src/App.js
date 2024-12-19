import React, { useEffect, useState } from 'react';
import { Box, Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

function App() {



  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);







  return (
    <Flex direction="column" minHeight="100vh">
      <Router>
        {/* Header */}
        <Box as="header" height="20%">
          <Header />
        </Box>

        {/* Main Body */}
        <Box as="main" height="60%" flexGrow="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
             
        </Box>

        {/* Footer */}
        <Box as="footer" height="20%">
          <Footer />
        </Box>
      </Router>
    </Flex>
  );
}

export default App;
