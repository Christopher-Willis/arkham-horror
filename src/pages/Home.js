import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../components/Header'
import Landiing from '../components/Landing'

function HomePage() {
  return (
    <Container id="home-container" className="text-center background app-size-ratio"> 
        <Header/>
        <Landiing/>
    </Container>
  )
}

export default HomePage;