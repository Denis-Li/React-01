import React from 'react';
import './App.scss';

import Home from './Home';
import Error from './pages/Error';

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
          <Route exact path="/React-01/" component={Home} >
            <Header />
            <Home />
          </Route>
          <Route exact path="/React-01/apartments" component={Apartments} >
            <Header />
            <Apartments />
          </Route>
          <Route exact path="/React-01/services" component={Services} >
            <Header />
            <Services />
          </Route>
          <Route exact path="/React-01/directions" component={DirectionsTabs} >
            <Header />
            <DirectionsTabs/>
          </Route>
          <Route exact path="/React-01/auth" component={Auth} >
          </Route>
          <Route exact path="/React-01/users" component={Users} />
          <Route  path="/React-01/users/:userName" component={UserId} />
          <Route  path="/React-01/cart" component={Cart}  />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
