import React, { Component } from 'react';
import Filmcard from './Filmcard';
import { Container, Row, Col } from 'reactstrap';
import '../css/Filmsection.css';

class Filmsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/cineclub/movies")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => {
        this.setState({
          movies: data,
        });
      });
  }


  render() {
    return (
      <Container className="film-section">
        <Row >
          <Col sm="12" className="section-style">
            <h2 className="title-section">{this.props.name}</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          {this.state.movies.map((movie, index) => <Col md="4" lg="3"><Filmcard key={movie.id} name={movie.name} director={movie.director} date={movie.date} rating={movie.rating} poster={movie.poster} id={movie.id} /></Col>)}
        </Row>
      </Container>
    );
  }
}

export default Filmsection;