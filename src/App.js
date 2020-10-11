import React from 'react';
import './App.scss';

import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Other from './Other';

import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />     
            <Route exact path="/about" component={About} />     
            <Route exact path="/contacts" component={Contacts} />     
            <Route component={Other} />     
          </Switch>


          <Header />
          <Apartments />
          <Services />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
