import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewGame from './pages/NewGame'
import CoreIntro from './pages/CoreIntro'
import LoadCampaign from './components/LoadCampaign'
import StandAlone from './components/StandAlone'
import ChaosBag from './components/ChaosBag'
import Settings from './components/Settings'

import HomePage from './pages/Home'

function App() {
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();
  // hooks examples replaces connect and dispatch

  return (
  <div>
  {/* 
  <h1>Counter : {counter} </h1>
  <button onClick={(()=> dispatch({type:'INCREMENT'}))}>INCREMENT</button> 
  hooks examples*/
  }

    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/NewCampaign" exact component={NewGame} />
      <Route path="/LoadCampaign/" exact component={LoadCampaign} />
      <Route path="/StandAlone/" exact component={StandAlone} />
      <Route path="/ChaosBag/" exact component={ChaosBag} />
      <Route path="/Settings/" exact component={Settings} />
      <Route path="/campaign/core/intro/" exact component={CoreIntro} />
   
    </Router>
    </div>
  );
}

export default App;
