import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Apartments from './components/apartment/Apartments';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Apartments/>
        <Services />
        <Footer />
      </div>
    );
  }
}

export default App;
