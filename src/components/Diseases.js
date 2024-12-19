import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import diseases from './pictures/disease.jpeg';

function Diseases() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleSubmit = () => {
    onOpen(); // Opens the modal
  };

  return (
    <Box>
     <img src={diseases} />
      <Button onClick={handleSubmit} colorScheme="teal" mb={4}>
        Add Diseases
      </Button>

      <div>
        <h2>Diseasess Information</h2>
        <p>
          Our hospital has a variety of Diseasess specializing in different fields such as Cardiology,
          Neurology, Orthopedics, and more.
        </p>
      </div>

      {/* Modal */}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Add Diseases Details</DrawerHeader>
          <DrawerBody>
            <p>Form to add Diseases details goes here.</p>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Diseases;
