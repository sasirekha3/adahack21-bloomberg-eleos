
import React, {Component, useState} from "react";

class CheckInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.latitude,
            longitude: this.props.longitude
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        // Call API to push
        if(this.state.longitude !== -1 && this.state.latitude !== -1) {

        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={"hidden"} id={"latitude"} value={this.state.latitude} />
                <input type={"hidden"} id={"longitude"} value={this.state.longitude} />

                <label>
                    Select an Activity Tag for your Pin:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        );
    }
}

export default CheckInForm;