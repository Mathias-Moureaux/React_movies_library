import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Filmcard.css'

class Filmcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {

    return (
      <div>
        <div>
          <Card>
            <CardImg top src={this.props.poster} alt={this.props.name} />
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardSubtitle>Director : {this.props.director}</CardSubtitle>
              <CardText>Rating: {this.props.rating}/100</CardText>
              <NavLink to={`/filmpage/${this.props.id}`}><Button>Movie details</Button></NavLink>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Filmcard;