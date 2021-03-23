import React, { Component } from "react";
import axios from "axios";
import "../GetAdvice/GetAdvice.css";

/**
 * Get Advice component where users can upload images for fashion advice
 * Users can also tag images and provide descriptions
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class GetAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.location.state.jwt,
      tags: "",
      description: "",
      file: null,
      filePreview: null,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  // Updates dynamically when user inputs tags
  async handleTagChange(e) {
    const oldJwt = this.state.jwt;
    const oldDescription = this.state.description;
    const oldFile = this.state.file;
    const oldFilePreview = this.state.filePreview;
    await this.setState({
      jwt: oldJwt,
      description: oldDescription,
      tags: e.target.value,
      file: oldFile,
      filePreview: oldFilePreview,
    });
  }

  // Updates dynamically when user inputs description
  async handleDescriptionChange(e) {
    const oldJwt = this.state.jwt;
    const oldTags = this.state.tags;
    const oldFile = this.state.file;
    const oldFilePreview = this.state.filePreview;
    await this.setState({
      jwt: oldJwt,
      tags: oldTags,
      description: e.target.value,
      file: oldFile,
      filePreview: oldFilePreview,
    });
  }

  async onFileChange(event) {
    // Update the state
    const oldJwt = this.state.jwt;
    const oldTags = this.state.tags;
    const oldDescription = this.state.description;
    console.log(event.target.files[0]);
    await this.setState({
      jwt: oldJwt,
      tags: oldTags,
      description: oldDescription,
      file: event.target.files[0],
      filePreview: window.URL.createObjectURL(
        new Blob([event.target.files[0]], {
          type: "image/png",
        })
      ),
    });
    document.getElementById("e63_34").style.opacity = 0;
  }

  async handleImageUpload(event) {
    event.preventDefault();
    // Create an object of formData
    var formData = new FormData();
    // Update the formData object
    console.log(this.state.file);
    formData.append("file", this.state.file);
    formData.append("tags", this.state.tags);
    formData.append("description", this.state.description);
    // Request made to the backend api
    // Send formData object
    console.log(
      await axios.post("http://localhost:5000/outfits", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: this.state.jwt,
        },
      })
    );
  }

  render() {
    return (
      <div>
        <div id="e63_2">
          <span id="e64_9">// GET ADVICE</span>
          <span id="e63_63">// TAGS</span>
          <span id="e63_64">// DESCRIPTION</span>
          <div id="e64_123">
            <img id="img_preview" src={this.state.filePreview} />
          </div>
          <div id="e63_34">
            <label className="style-file-upload">
              <input
                id="e63_36"
                type="file"
                onChange={this.onFileChange}
              ></input>
            </label>
          </div>
          <div id="e64_24">
            <input
              id="tags_input"
              value={this.state.tags}
              onChange={this.handleTagChange}
            ></input>
          </div>
          <div id="e64_31">
            <textarea
              id="description_input"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            ></textarea>
          </div>
          <div id="e136_2005">
            <div id="e136_2006"></div>
            <div id="e136_2007"></div>
            <span id="e136_2008">// FIT CHECK</span>
          </div>
          <div id="e136_2023">
            <button
              id="submit_button"
              onClick={this.handleImageUpload}
            ></button>
          </div>
          <span id="e136_2024">SUBMIT</span>
          <div id="e134_0"></div>
          <div id="e135_21"></div>
          <div id="e158_1"></div>
          <div id="e159_1"></div>
        </div>
      </div>
    );
  }
}

export default GetAdvice;
