import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LinkPage from "./link-page";
import NavigationContainer from "./navigation-container";
import Home from "./home";



export default class App extends Component {
 
  render() {
   
    return (
      <div className='app'>
          
         
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/link-page" component={LinkPage} />
            </Switch>

          </div>
        </Router> 
        
      </div>
    );
  }
}
