import React from 'react';
import './App.scss';

import Home from './Home';
import Other from './Other';

import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import Directions from './components/directions/Directions';
import Auth from './pages/authentication/Auth'
import Footer from './components/footer/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Header />
          <Switch>
           <Route exact path="/" component={Home} />     
            <Route exact path="/apartments" component={Apartments} />     
            <Route exact path="/services" component={Services} />     
            <Route exact path="/directions" component={Directions} />     
            <Route exact path="/auth" component={Auth} />     
            <Route component={Other} />     
          </Switch>
         <Footer /> 
        </Router>  
      </div>
    );
  }
}

export default App;
