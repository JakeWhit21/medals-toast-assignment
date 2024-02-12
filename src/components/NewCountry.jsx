import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { PlusCircleFill } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';

class NewCountry extends Component {
  state = {
    showModal: false,
    showToast: false,
    newCountryName: "",
  }

  handleToastClose = () => this.setState({ showToast: false });
  handleModalClose = () => this.setState({ showModal: false });
  handleModalKeyPress = (e) => (e.keyCode ? e.keyCode : e.which) === 13 && this.handleAdd();
  handleAdd = () => {
      if(this.state.newCountryName.trim().length === 0) {
        this.setState({ showToast: true });
      }

    this.state.newCountryName.length > 0 && this.props.onAdd(this.state.newCountryName);
    this.handleModalClose();
  }

  render() {
    return (
      <React.Fragment>
<Toast show={this.state.showToast}>
  <Toast.Body>
  <button type="button" class="btn-close me-2 m-auto" onClick={this.handleToastClose}></button>
    Enter a name to add a country
  </Toast.Body>
</Toast>
        <Button variant="outline-success" onClick={() => this.setState({ showModal: true, newCountryName: "" })}>          <PlusCircleFill />
        </Button>
        <Modal onKeyPress={this.handleModalKeyPress} show={this.state.showModal} onHide={this.handleModalClose}>          <Modal.Header closeButton>
          <Modal.Title>New Country</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="modalForm1">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                name="newCountryName"
                onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                value={this.state.newCountryName}
                placeholder="enter name"
                autoFocus
                autoComplete='off'
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleAdd}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NewCountry;
