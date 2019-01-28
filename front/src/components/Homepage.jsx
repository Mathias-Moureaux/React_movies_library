import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import Footer from '../containers/Footer';
import Filmsection from '../containers/Filmsection';
import '../css/Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="homepage-style">
        <NavBar />
        <Filmsection name="In Theaters"/>
        <Filmsection name="Coming Soon"/>
        <Filmsection name="Best Movies"/>
        <Footer />
      </div>
     );
  }
}
 
export default Homepage;