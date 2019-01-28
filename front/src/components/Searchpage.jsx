import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import Filmmedia from '../containers/Filmmedia';
import '../css/Resultpage.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../containers/Footer';

class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesbysearch: [],
    }
    this.getMoviesBySearch = this.getMoviesBySearch.bind(this);

  }

  componentDidMount() {
    this.getMoviesBySearch();
  }

  componentDidUpdate(newProps) {
    if (newProps.match.params.search !== this.props.match.params.search) {
      this.getMoviesBySearch();
    }
  }

  getMoviesBySearch() {
    if (this.props.match.params.search === undefined) {
      fetch(`http://localhost:5000/cineclub/movies/`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            moviesbysearch: data,
          });
        });
    }
    else {
      fetch(`http://localhost:5000/cineclub/movies/search/${this.props.match.params.search}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            moviesbysearch: data,
          });
        });
    }
  }
  render() {
    console.log(this.props.match.params.search)
    return (
      <div className="resultpage-style">
        <NavBar />
        <Container className="result-table">
          {this.state.moviesbysearch.map(movie => <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <Filmmedia
                key={movie.id}
                id={movie.id}
                name={movie.name}
                director={movie.director}
                date={movie.date}
                poster={movie.poster}
                rating={movie.rating}
              />
            </Col>
          </Row>)}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Searchpage;