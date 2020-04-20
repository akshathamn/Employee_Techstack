import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Employee.css";
import { projects } from '../Components/userFunction';
import { connect } from 'react-redux';
import { project } from '../Actions/projectAction';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
    };
  }

  validateForm() {
    return this.state.project.length > 0 ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { project } = this.state;
    this.setState({ submitted: true });

    const user = {
      project: this.state.project
    }
    projects(user).then(res => {
      if ( project ) {
        // this.props.history.push('/techStack')
      }
    })
  }

  render() {
    return (
      <div className=" Employee ">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="project" bsSize="large">
            <b>Project</b>
            <FormControl
              autoFocus
              type="text"
              value={this.state.project}
              onChange={this.handleChange}
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
  const { project } = state.projectReducer;
  return { project };
};
export default connect(mapStateToProps, { project })(Project);


