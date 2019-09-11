import React, { Component } from 'react';
import axios from 'axios';

class FileChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageUrls: [],
      message: ''
    }
  }
  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
  }

  uploadImages = () => {
    const uploaders = this.state.images.map(image => {
      const fd = new FormData();
      fd.append("image", image, image.name);
      axios.post("/uploadimage", fd, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => console.log(res.data))
        .catch(() => console.log(`no se pudo subir la imagen ${image.name}`))

    });

    // Once all the files are uploaded

  }

  render() {
    return (
      <div>
        <br />
        <div >
          <h1>Image Uploader</h1><hr />
          <div >
            <input className="form-control " type="file"
              onChange={this.selectImages} multiple />
          </div>
          <p className="text-info">{this.state.message}</p>
          <div>
            <button value="Submit"
              onClick={this.uploadImages}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FileChooser;