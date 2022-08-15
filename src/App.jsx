import React from 'react';
import styled from 'styled-components';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

export default function App() {
  return (
    <Container className="App">
        <Navbar />
        <Hero />
    </Container>
  );
}

const Container = styled.div`
    //background: rgb(34,33,33);
    //background: linear-gradient(90deg, rgba(34,33,33,1) 0%, rgba(9,9,121,1) 12%, rgba(48,123,138,1) 100%);
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'poppins', sans-serif;
    }
`;