import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import '../css/Filmpage.css';

class Filmpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieCard: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/cineclub/movies/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieCard: data[0],
        })
      })
  }

  render() {
    console.log(this.props)
    return (
      <div className="filmpage-style">
        <NavBar />
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col>
                <img classname='movie-pic' src={this.state.movieCard.poster} alt="movie-pic"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="display-3">{this.state.movieCard.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Col>
                  <p className="lead">{this.state.movieCard.director}</p>
                </Col>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Filmpage;