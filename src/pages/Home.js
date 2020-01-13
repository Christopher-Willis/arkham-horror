import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Landing from '../components/Landing'

function HomePage() {
  return (
    <Container id="home-container" className="text-center background app-size-ratio"> 
    
        <Header/>
        <Landing/>
    </Container>
  )
}

export default HomePage;