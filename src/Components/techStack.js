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
            experience: "",
        };
    }

    validateForm() {
        return this.state.experience.length > 0 
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { experience } = this.state;
        this.setState({ submitted: true });

        const user = {
            experience: this.state.experience,
            // project: this.state.project
        }
        tech(user).then(res => {
            if ( experience ) {
                this.props.history.push('/Project')
            }
        })
    }

    render() {
        return (
            <div className=" Employee ">
                <form onSubmit={this.handleSubmit}>
                   <FormGroup controlId="experience" bsSize="large">
                        <b>Experience</b>
                        <FormControl
                            value={this.state.experience}
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
    const { experience } = state.techStackReducer;
    return { experience };
};
export default connect(mapStateToProps, { techstack })(techStack);


