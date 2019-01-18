import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

 
const style = {
  width: '100%',
  height: '500px',
  marginTop: '50px',
  left: 0,
}

export class MapContainer extends React.Component {
  location = { lat: 50.466332, lng: 30.510110 };

  render() {
    return (
      <GoogleMap
        style={style}
        defaultZoom={16}
        defaultCenter={this.location}
      >
        <Marker position={this.location} />
      </GoogleMap>
    )
  }
}

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={style} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MapContainer);