import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './classifier.css'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'

class Classifier extends Component {
    state = {  
        files: [],
        isLoading: false
    }

    // this is good for fetching data from the database
    componentDidMount (){
      this.getImages()
    }

    getImages = () =>{
      axios.get('http://localhost:8000/api/images/', {
        headers: {
            'accept': 'application/json'
        }
      }).then(resp=>{
        console.log(resp)
      })
    }

    onDrop = (files) => {
        // when function given file name is files: and state has also files 
        // so we don't need to write like {files: files} --> just write {files} it's enough 
        this.setState({
          isLoading: true
        })
        // for padding files to loadImage
        this.loadImage(files)
    }

    loadImage = (files)=>{
      setTimeout(()=>{
        this.setState({
          files, 
          isLoading: false
        })
      }, 1000);
    }
    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        return (  
            <Dropzone onDrop={this.onDrop} accept="image/png, image/jpeg, image/jpg">
            {({isDragActive, getRootProps, getInputProps}) => (
              <section className="container">
                <div {...getRootProps({className: 'dropzone back'})}>
                  <input {...getInputProps()} />
                  <i className="far fa-image mb-2 text-muted" style={{fontSize:60}}></i>
                  <p className="text-muted">{isDragActive ? "Drop some images" : "Drag 'n' drop some files here, or click to select files"}</p>
                </div>
                <aside>
                  {files}
                </aside>
                {this.state.isLoading && 
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                }
              </section>
            )}
            </Dropzone>
        );
    }
}

export default Classifier;