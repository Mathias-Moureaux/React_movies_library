import React, { Component } from 'react';
import { Media } from 'reactstrap';
import '../css/Filmmedia.css';

class Filmmedia extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    const imgstyle = {
      maxHeight: 110,
      paddingRight: 10
    }

    return (
      <div>
        <Media>
          <Media left href="#">
            <Media object style={imgstyle} src={this.props.poster} alt="placeholder" />
          </Media>
          <Media body>
            <Media heading>
              {this.props.name}
            </Media>
            <Media>
            Director : {this.props.director} 
            </Media>
            <Media>Release date : {this.props.date} <span>Rating : {this.props.rating}</span></Media>
          </Media>
        </Media>
      </div>

    );
  }
}

export default Filmmedia;