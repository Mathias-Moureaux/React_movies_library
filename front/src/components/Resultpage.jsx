import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import Filmmedia from '../containers/Filmmedia';
import '../css/Resultpage.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../containers/Footer';

class Resultpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesbygenre: [],
    }
    this.getMoviesByGenre = this.getMoviesByGenre.bind(this);
  }

  componentDidMount() {
    this.getMoviesByGenre();
  }

  componentDidUpdate(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id){
      this.getMoviesByGenre();
    }
  }

  getMoviesByGenre() {
    fetch(`http://localhost:5000/cineclub/movies/genre/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          moviesbygenre: data,
        });
      });
  }

  render() {
    // console.log(this.props.match.params.id)
    return (
      <div className="resultpage-style">
        <NavBar/>
        <Container className="result-table">
          {this.state.moviesbygenre.map(movie => <Row>
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

export default Resultpage;