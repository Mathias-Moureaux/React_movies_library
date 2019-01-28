import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

import '../css/NavBar.css';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      search: "",
      movies: [],
    }
    this.movieSearch = this.movieSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/cineclub/genre")
      .then(res => res.json())
      .then(data => {
        this.setState({
          genres: data,
        });
      });
  }


  movieSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  sendSearch(event) {
    event.preventDefault();
      fetch(`http://localhost:5000/cineclub/movies/search/${this.state.search}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            movies: data,
          });
        });
  }

  render() {
    // console.log(this.state.search)
    return (
      <div>
        <Navbar className="navbar-fixed-top navbar-style" color="white" light expand="md">
          <NavLink to="/">
            <NavbarBrand className="navbar-brand d-inline align-center">My CinéClub</NavbarBrand>
          </NavLink>
          <InputGroup className="search-bar" onClick={this.sendSearch}>
            <Input
              onChange={this.movieSearch}
              type='search'
              value={this.state.search}
              placeholder='search for a movie' />
            <NavLink to={`/result/movies/search/${this.state.search}`} >
              <InputGroupAddon addonType="append">
                <InputGroupText>Explore</InputGroupText>
              </InputGroupAddon>
            </NavLink>
          </InputGroup>
          <NavLink className="login" to="/admin">Log In</NavLink>
        </Navbar>
        <Nav className="justify-content-center" light expand="md">
          {this.state.genres.map((genre, index) => <NavItem >
            <NavLink
              className="movie-genre"
              key={genre.id}
              id={genre.id_genre}
              to={`/result/genre/${genre.id_genre}`}>{genre.genre}
            </NavLink>
          </NavItem>)}
        </Nav>
      </div >
    );
  }
}



export default NavBar;