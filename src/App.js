import React from 'react';
import './App.scss';

import Home from './Home';
import Other from './Other';

import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />     
            <Route exact path="/apartments" component={Apartments} />     
            <Route exact path="/services" component={Services} />     
            <Route component={Other} />     
          </Switch>
        </Router>
          <Footer />
      </div>
    );
  }
}

export default App;
