import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Header.css';
class MyMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
      lat: -12.111062,
      lng: -77.0315913
     }
    };
    this.onMyPos = this.onMyPos.bind(this);
  }

onMyPos() {
  this.search();
}

search() {
  //console.log('funciona!!')
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coords = position.coords;
                console.log(coords)
                let lat = coords.latitude;
                let lng = coords.longitude
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({'location': latlng}, function(results, status) {
                  if (status === google.maps.GeocoderStatus.OK) {
                  // ubicacion más exacta
                  let myUbicationEx = results[0].formatted_address;
                  // Forma corta
                  let myUbication = results[1].formatted_address;
                  alert('Tu ubicación actual es: ' + myUbication + '----' + myUbicationEx);
                  } else {
                  alert('ocurrio un error inesperado');
                 }
              });
            })
          }
        }


  render() {
     const {center} = this.state
    return (
      <div className="map-google" >
      <button className="btn center-block"  onClick={this.onMyPos}>Mi ubicacion</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDT1FgK8pARI-hv79674w5U05px8_Vt5zI'}}
          defaultCenter={center}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyMap;
