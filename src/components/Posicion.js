 
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';
class Posicion extends Component {


constructor(props) {
  super(props);
    this.state = {file: '',imagePreviewUrl: ''};
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
                  alert('Tu ubicación actual es: ' + myUbicationEx);
                  } else {
                  alert('ocurrio un error inesperado');
                 }
              });
            })
          }
        }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
    <div>
      <div className="map-google" >
      
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDT1FgK8pARI-hv79674w5U05px8_Vt5zI'}}
          defaultCenter={{lat: -12.111062,
                lng: -77.0315913} }
          defaultZoom={12}
        >
        </GoogleMapReact>
        <button className="btn center-block mg-10"  onClick={this.onMyPos}>Acceder a tu ubicación</button>
      </div>
      </div>
      
    );
  }
}
 	 
  export default Posicion;