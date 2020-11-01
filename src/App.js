import React from 'react';
import './App.scss';

import Home from './Home';
import Other from './Other';

import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import DirectionsTabs from './components/directions/DirectionsTabs';
import Auth from './components/authentication/Auth'
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} >
            <Header />
            <Home />
          </Route>
          <Route exact path="/apartments" component={Apartments} >
            <Header />
            <Apartments />
          </Route>
          <Route exact path="/services" component={Services} >
            <Header />
            <Services />
          </Route>
          <Route exact path="/directions" component={DirectionsTabs} >
            <Header />
            <DirectionsTabs/>
          </Route>
          <Route exact path="/auth" component={Auth} >
            {/* <Auth /> */}
          </Route>
          <Route component={Other} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
