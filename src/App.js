import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing'
import Header from './components/Header'
import NewCampaign from './components/NewCampaign'
import LoadCampaign from './components/LoadCampaign'
import StandAlone from './components/StandAlone'
import ChaosBag from './components/ChaosBag'
import Settings from './components/Settings'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function App() {
  return (
    <Router>
      <Container  fluid className="text-center vh-100">
          <Row className=""> 
            <Col >
              <header>
                <Route path="/" exact component={Header} />
                <Route path="/NewCampaign" exact component={Header} />
              </header>          
            </Col>
          </Row>
        <Row className="mt-4 h-50"> 
          <Col >
              <Route path="/" exact component={Landing} />
              <Route path="/NewCampaign" exact component={NewCampaign} />
              <Route path="/LoadCampaign/" exact component={LoadCampaign} />
              <Route path="/StandAlone/" exact component={StandAlone} />
              <Route path="/ChaosBag/" exact component={ChaosBag} />
              <Route path="/Settings/" exact component={Settings} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
