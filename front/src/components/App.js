import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Homepage from './Homepage';
import Filmpage from './Filmpage';
import Adminpage from './Adminpage';
import Resultpage from './Resultpage';
import '../css/App.css';
import Searchpage from './Searchpage';


class App extends Component {
  render() {
    return (
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/filmpage/:id" component={Filmpage} />
            <Route path="/admin" component={Adminpage} />
            <Route path="/result/genre/:id" component={Resultpage} />
            <Route path="/result/movies/search/:search" component={Searchpage} />
            <Route path="/result/movies/search/" component={Searchpage} />
          </Switch>
    );
  }
}

export default App;
