import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewGame from './pages/NewGame'
import LoadCampaign from './components/LoadCampaign'
import StandAlone from './components/StandAlone'
import ChaosBag from './components/ChaosBag'
import Settings from './components/Settings'


import HomePage from './pages/Home'

function App() {
  return (

    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/NewCampaign" exact component={NewGame} />
      <Route path="/LoadCampaign/" exact component={LoadCampaign} />
      <Route path="/StandAlone/" exact component={StandAlone} />
      <Route path="/ChaosBag/" exact component={ChaosBag} />
      <Route path="/Settings/" exact component={Settings} />
    </Router>
  );
}

export default App;
