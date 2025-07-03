import { Button, Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
const product =["berr", "liquor", "wine"]
function About() {
  const {cart, setCart} = useState([]);
  const addtoCart =(prod)=>{
    setCart(prev=>([...prev,prod]))

  }
    return (
      <>
      { product.map((prod)=>(

      <Box>
        <h1>{prod} </h1>
        <Button onClick={(prod)=>{addtoCart(prod)}}></Button>

        
        {/* <p>Reach out to us via email or phone.</p> */}
      </Box>
    ))}
    <h1>{cart} </h1>
    </>
    );
  }
  
  export default About;
  