import React, { Component } from 'react';
import './styles.css';

class MyMap extends Component {
    constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  imageReady(e) {
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
  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className="width-50 float-left margin-8" >
      <p className="text-center"></p>

        <div>
          <input style={{color:"transparent"}}  type="file" onChange={(e)=>this.imageReady(e)} />
        </div>
        <div >
          {imagePreview}
        </div>
      </div>
    )
  }
 }
export default MyMap;