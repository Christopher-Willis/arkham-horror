import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing'
import LoadCampaign from './components/LoadCampaign'
import StandAlone from './components/StandAlone'
import ChaosBag from './components/ChaosBag'
import Settings from './components/Settings'




function App() {
  return (
    <Router>
      <header>
          
      </header>
      <main>
        <Route path="/" exact component={Landing} />
        <Route path="/LoadCampaign/" exact component={LoadCampaign} />
        <Route path="/StandAlone/" exact component={StandAlone} />
        <Route path="/ChaosBag/" exact component={ChaosBag} />
        <Route path="/Settings/" exact component={Settings} />
      </main>
    </Router>
  );
}

export default App;
