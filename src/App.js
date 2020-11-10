import React from 'react';
import './App.scss';

import Home from './Home';
import Error from './Error';

import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import DirectionsTabs from './components/directions/DirectionsTabs';
import Auth from './components/authentication/Auth'
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav'
import Cart from './pages/Cart'

import Users from './Users';
import UserId from './UserId';

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
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route  path="/cart" component={Cart}  />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
