import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from 'react-redux';
import "./Employee.css";
import { tech } from '../Components/userFunction';
import { techstack } from '../Actions/techStackAction';

class techStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            technologies: "",
            experience: "",
            project: ""
        };
    }

    validateForm() {
        return this.state.technologies.length > 0 && this.state.experience.length > 0 && this.state.project.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { technologies, experience, project } = this.state;
        this.setState({ submitted: true });

        const user = {
            technologies: this.state.technologies,
            experience: this.state.experience,
            project: this.state.project
        }
        tech(user).then(res => {
            if (technologies && experience && project) {
                // this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div className=" Employee ">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="technologies" bsSize="large">
                        <b>Technologies</b>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.technologies}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="experience" bsSize="large">
                        <b>Experience</b>
                        <FormControl
                            value={this.state.experience}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="project" bsSize="large">
                        <b>Project</b>
                        <FormControl
                            value={this.state.project}
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
    const { technologies } = state.techStackReducer;
    const { experience } = state.techStackReducer;
    const { project } = state.techStackReducer;
    return { technologies, experience, project };
};
export default connect(mapStateToProps, { techstack })(techStack);


