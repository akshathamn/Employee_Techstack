import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Employee.css";
import { employ } from '../Components/userFunction';
import { connect } from 'react-redux';
import { employee } from '../Actions/employeeaction';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      place: "",
      designation: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.place.length > 0 && this.state.designation.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, place, designation } = this.state;
    this.setState({ submitted: true });

    const user = {
      name: this.state.name,
      place: this.state.place,
      designation: this.state.designation
    }
    employ(user).then(res => {
      if (name && place && designation) {
        this.props.history.push('/techStack')
      }
    })
  }

  render() {
    return (
      <div className=" Employee ">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
            <b>Name</b>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="place" bsSize="large">
            <b>Place</b>
            <FormControl
              value={this.state.place}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="designation" bsSize="large">
            <b>Designation</b>
            <FormControl
              value={this.state.designation}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { name } = state.employeereducer;
  const { place } = state.employeereducer;
  const { designation } = state.employeereducer;
  return { name, place, designation };
};
export default connect(mapStateToProps, { employee })(Employee);


