import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import { withRouter } from "react-router";
import '../css/Filmmedia.css';

class Filmadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalUpdate: false,
      title: '',
      director: '',
      date: '',
      genre: 0,

    }
    this.deleteMovie = this.deleteMovie.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateField = this.updateField.bind(this);
  }


  toggleModal() {
    this.setState({
      modalUpdate: !this.state.modalUpdate
    });
  }

  updateField(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // updateMovie(event, id) {
    
  //   const { data } = this.state;
  //   event.preventDefault();

  //   fetch(`http://localhost:5000/movies/update/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(res => res.text())
  //     .then(this.toggleModal)
  //     .then(res => {
  //       if (res.error) {
  //         alert(res.error);
  //       } else {
  //         alert('Movie successfully updated!');
  //       window.location.reload()
  //       }
  //     })
  //     .catch(e => {
  //       console.error(e);
  //       alert('Oops...something went wrong');
  //     });
  // }

  deleteMovie(id) {
    fetch(`http://localhost:5000/cineclub/movies/remove/${id}`, {
      method: "DELETE"
    })
      .then(res => res.text())
      .then(res => {
        if (res.error) {
          console.log(res.error);
        } else {
          alert('Movie successfully cancelled!');
        }
      })
      .then(window.location.reload())
  }


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
            <Media>Release date : {this.props.date}
              <span>
                <Button size="sm" color="info" onClick={this.toggleModal}>UPDATE</Button>{' '} <Button color="danger" size="sm" id={this.props.id} onClick={() => this.deleteMovie(this.props.id)}>DELETE</Button >
              </span>
            </Media>
            <Modal isOpen={this.state.modalUpdate} toggle={this.toggleModal} className={this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Edit : {this.props.name}</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input type="text" name="title" id="1" placeholder={this.props.name} onChange={this.updateField}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Director</Label>
                    <Input type="text" name="director" id="2" placeholder={this.props.director} onChange={this.updateField}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Release date</Label>
                    <Input type="text" name="date" id="1" placeholder={this.props.date} onChange={this.updateField}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select genre</Label>
                    <Input type="select" name="genre" id="exampleSelect" onChange={this.updateField}>
                      <option value='1'>Action</option>
                      <option value='2'>Sci-Fi</option>
                      <option value='3'>Thriller</option>
                      <option value='4'>Comedy</option>
                      <option value='5'>Animation</option>
                      <option value='6'>Drama</option>
                    </Input>
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="info" size="sm" onClick={this.toggleModal}>CANCEL</Button>{' '}
                <Button type="submit" color="success" size="sm" onClick={this.toggleModal}>SUBMIT</Button>
              </ModalFooter>
            </Modal>
          </Media>
        </Media>
      </div>

    );
  }
}

export default Filmadmin;
// export default withRouter(Filmadmin);




  // INSERT INTO `movies` (`id`, `name`, `date`, `director`, `id_genre`, `rating`, `poster`) VALUES ('2', 'Une affaire de famille', '2018-12-12', 'Hirokazu Kore-eda', '6', '93', 'https://media.senscritique.com/media/000017832054/source_big/Une_affaire_de_famille.jpg'), ('3', 'Les Frères Sisters', '2018-09-19', 'Jacques Audiard', '6', '90', 'https://media.senscritique.com/media/000018033576/source_big/Les_Freres_Sisters.jpg'), ('4', 'Green Book', '2019-01-23', 'Peter Farrelly', '6', '92', 'https://media.senscritique.com/media/000018240638/source_big/Green_Book_Sur_les_routes_du_sud.jpg'), ('5', 'La Mule', '2019-01-23', 'Clint Eastwood', '6', '87', 'https://media.senscritique.com/media/000018323063/source_big/La_Mule.jpg'), ('6', 'Venom', '2018-10-10', 'Ruben Fleischer', '1', '75', 'https://media.senscritique.com/media/000018071183/source_big/Venom.jpg'), ('7', 'Spider-Man : New Generation', '2018-12-12', 'Bob Persichetti', '5', '83', 'https://media.senscritique.com/media/000018251074/source_big/Spider_Man_New_Generation.jpg'), ('8', 'Le Grand bain', '2018-10-24', 'Gilles Lelouche', '4', '91', 'https://media.senscritique.com/media/000017986858/source_big/Le_Grand_Bain.jpg')
