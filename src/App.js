import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import NewGame from './pages/NewGame'
import CoreIntro from './pages/CoreIntro'
import CoreSetup from './pages/CoreSetup'
import LoadCampaign from './components/LoadCampaign'
import StandAlone from './components/StandAlone'
import ChaosBag from './components/ChaosBag'
import Settings from './components/Settings'

import HomePage from './pages/Home'

function App(props) {
  const { history } = props;
    window.addEventListener("popstate", () => {
      history.go(1);
  });
// integrating disabling of back changes from here https://medium.com/@subwaymatch/disabling-back-button-in-react-with-react-router-v5-34bb316c99d7
  return (
  <div>

    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/NewCampaign" exact component={NewGame} />
      <Route path="/LoadCampaign/" exact component={LoadCampaign} />
      <Route path="/StandAlone/" exact component={StandAlone} />
      <Route path="/ChaosBag/" exact component={ChaosBag} />
      <Route path="/Settings/" exact component={Settings} />
      <Route path="/campaign/core/intro/" exact component={CoreIntro} />
      <Route path="/campaign/core/setup" exact component={CoreSetup} />

     
   
    </Router>
    </div>
  );
}

export default withRouter(App);
