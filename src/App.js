import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Internal Imports

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
