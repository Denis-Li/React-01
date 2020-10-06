import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
