import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Table from './Table';
import Charts from './Charts';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {

  render() {
      return (
      <main>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/Dashboard' component={Dashboard}/>
          <Route path='/Table' component={Table}/>
          <Route path='/Charts' component={Charts}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
