import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Footer from './components/Footer';

    
function App() {
    
    return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/services' component={Services} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
