import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import '../css/Filmmedia.css';

class Filmadmin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
 
     }
    // this.deleteMovie=this.deleteMovie.bind(this);
  }


  // deleteMovie(id) {
  //   fetch(`/cineclub/movies/remove_movie/${this.props.id}`, {
  //     method: 'DELETE',
  //   })
  //     .then()
  // }


  render() {
    const imgstyle = {
      maxHeight: 110,
      paddingRight: 10
    }

    return (
      <div>
        <Media >
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
            <Media>Release date : {this.props.date} <span><Button color="danger" id={this.props.id} href={this.props.id}>DELETE</Button ></span></Media>
          </Media>
        </Media>
      </div>

    );
  }
}
 
export default Filmadmin;