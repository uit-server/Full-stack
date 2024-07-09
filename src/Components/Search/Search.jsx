import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
background: rgba(255, 255, 255, 1);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
opacity: 70%;

`

const Search = ({ message }) => {
  return (
    <Div className="ms-[-2%] fixed w-full h-[191%] min-h-screen blur-sm">
     hi

    </Div>
    // <motion.div
    //   initial={{ opacity: 0, y: -20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.5 }}
    //   className="fixed top-4 right-4 bg-[#3798a6] text-white py-2 px-4 rounded-lg shadow-lg"
    // >
    //   I am search Box
    // </motion.div>
  );
};

export default Search;