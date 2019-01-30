import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import '../css/Filmmedia.css';

class Filmadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
     }
     this.deleteMovie = this.deleteMovie.bind(this);
  }


  deleteMovie(id) {
    fetch(`http://localhost:5000/cineclub/movies/${id}`, {
      method: 'DELETE'
    })
    //mettre à jour les props ?
  }


  // INSERT INTO `movies` (`id`, `name`, `date`, `director`, `id_genre`, `rating`, `poster`) VALUES ('8', 'Glass', '2019-01-09', 'Night M. Shyamalan', '2', '82', 'https://media.senscritique.com/media/000018326963/source_big/Glass.jpg');



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
            <Media>Release date : {this.props.date}<span><Button color="danger" id={this.props.id} onClick={() => this.deleteMovie(this.props.id)}>DELETE</Button ></span></Media>
          </Media>
        </Media>
      </div>

    );
  }
}
 
export default Filmadmin;