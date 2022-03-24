import "./App.css";
import Statistics from "./Pages/statistics";
import Phonebookapp from "./Pages/Phonebookapp";
import styled from "styled-components";
import LandingPage from "./Pages/LandingPage";
import ReminderApp from "./Pages/ReminderApp"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const Button = styled.button`
    background-color: #3949ab;
    color:  white;
    padding: 5px 15px;
    border-radius: 5px;
    `

    function clickMe(){
      alert("You clicked me!");
  }

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/phonebook" component={ Phonebookapp } />
        <Route exact path="/statistics" component={ Statistics } />
        <Route exact path="/reminderapp" component={ ReminderApp } />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
