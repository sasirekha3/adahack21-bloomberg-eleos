import {Modal} from "react-bootstrap";
import React, {Component, useState} from "react";


class ActivityTagsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showActivityList: this.props.showActivityList,
            latitude: this.props.lat,
            longitude: this.props.lng
        }
        this.setLgShow = this.setLgShow.bind(this);
    }

    setLgShow(showVal) {
        this.setState({
            showActivityList: showVal
        })

    }

    render() {
        return(

            <Modal
                size="lg"
                show={this.state.showActivityList}
                onHide={() => this.setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>

        );
    }
}

export default ActivityTagsModal;


