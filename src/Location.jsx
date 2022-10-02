import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { useGeolocated } from "react-geolocated";




const DEFAULT_LONGITUDE = -123;
const DEFAULT_LATITUDE = 48;

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

class Location extends React.Component   {
render(){
  const longitude = this.props.coords? this.props.coords.longitude: DEFAULT_LONGITUDE;
    const latitude = this.props.coords? this.props.coords.longitude: DEFAULT_LATITUDE;
  return (
        <MapContainer center={[50.5, 30.5]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
          {
            !this.props.coords?
            <div className="loading">Loading</div> : <Marker position={[[50.5, 30.5]  ]}>
            <Popup>
            You are here!
            </Popup>
            </Marker>
          }
        </MapContainer>
  )
}
  
}
   
export default useGeolocated({
  positionOptions:{
    enableHighAccuracy:false
  },
  userDecisionTimeout:10000
})(Location);