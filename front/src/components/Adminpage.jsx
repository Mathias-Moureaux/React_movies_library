import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import Footer from '../containers/Footer';
import '../css/Homepage.css';
import { Row, Col } from 'reactstrap';
import Filmadmin from '../containers/Filmadmin';



class Adminpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allmovies: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/cineclub/movies/`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allmovies: data,
        });
      });
  }
  render() {
    return (
      <div className="homepage-style">
        <NavBar />
        {this.state.allmovies.map(movie => <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <Filmadmin
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
        <Footer />
      </div>
    );
  }
}

  export default Adminpage;