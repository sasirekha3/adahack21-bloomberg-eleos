import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import '../App.css'
import CurrentLocation from './CurrentLocation';
import ActivityTagsModal from "./ActivityTagsModal";
import CheckInForm from "./CheckInForm";
import {Col, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const mapStyles = {
    width: '40%',
    height: '40%',
};


export class MapContainer extends Component {


    constructor (props) {
        super(props)
        this.state = {
            markers: [
            ],
            newMarker: {
                latitude: -1,
                longitude: -1
            },
            showActivityList: false
        };
        this.onClick = this.onClick.bind(this);
    }

    //adds marker when clicked
    onClick(t, map, coord) {

        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        console.log(lat);
        console.log(lng);

        this.setState({
            newMarker: {
                title: "",
                name: "",
                latitude: lat,
                longitude: lng
            },
            markers : [
                ...Object.entries(this.state.markers),
                {
                    title: "",
                    name: "",
                    position: { lat, lng }
                }
            ]
        });

    }



    render() {
        return (
    <div >
        <Container>
            <Row>
                <Col id="map">
                    <Map
                        centerAroundCurrentLocation
                        google={this.props.google}
                        onClick={this.onClick}
                        classname={"map"}
                        style={mapStyles}
                        zoom={15}

                    >

                        {this.state.markers.map((marker, index) => (
                            <Marker
                                key ={index}
                                title={marker.title}
                                name={marker.name}
                                position={marker.position}
                            />
                        ))}

                    </Map>
                </Col>
                <Col>
                    <CheckInForm />
                </Col>
            </Row>
        </Container>

    </div>

        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBSyyvZ9j734-dgYvSdFWS1iWOD_K5qIek'
})(MapContainer);