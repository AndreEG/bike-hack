import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';
class MyMap extends Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
    this.onMyPos = this.onMyPos.bind(this);
  }

 handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
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
                  alert('Tu ubicación actual es: ' + myUbication);
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
      <div className="main">
      <p className="main-paragraph">Para nosotros es importante tu seguridad, termina tu inscripción con lo siguiente:</p>
      <div>
      <div className="dni-foto"><div>Cara frontal del dni</div>

<div className="previewComponent">
        <form>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>

      </div>




      <div className="dni-foto"><div>Cara Posterior del dni</div>
      <div className="previewComponent">
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      </div>
      </div>
      <div>
      <p>Ingresa tú ubicación actual</p>
      <div className="map-google" >
      <button className="btn center-block"  onClick={this.onMyPos}>Mi ubicacion</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDT1FgK8pARI-hv79674w5U05px8_Vt5zI'}}
          defaultCenter={{lat: -12.111062,
                lng: -77.0315913} }
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
      </div>
      </div>
      
    );
  }
}

export default MyMap;
