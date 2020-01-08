
import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import NewCampaign from '../components/NewCampaign'

function HomePage() {
  return (
    <Container id="home-container" className="text-center background app-size-ratio"> 
        <Header/>
        <NewCampaign/>
    </Container>
  )
}

export default HomePage;