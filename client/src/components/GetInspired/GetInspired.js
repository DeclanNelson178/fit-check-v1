import React, { Component } from "react";
import axios from "axios";
import inspo from "./images/inspo.jpg";
import "./GetInspired.css";

/**
 * Get Inspired component where users can search the web for anything
 * Will display search results in a matrix-like form
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 */
class GetInspired extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.location.state.jwt,
      searchQuery: "",
      searched: false,
      images: ["", "", "", "", "", "", "", "", "", "", "", ""],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.scrapeGoogleSearch = this.scrapeGoogleSearch.bind(this);
  }

  async handleSearch(e) {
    const auth = this.state.jwt;
    await this.setState({
      jwt: auth,
      searchQuery: e.target.value,
    });
  }

  async scrapeGoogleSearch(e) {
    if (e.key !== "Enter") {
      return;
    } else {
      const auth = this.state.jwt;
      const search = this.state.searchQuery;
      await this.setState({
        jwt: auth,
        searchQuery: search,
        searched: true,
      });
    }
    const options = {
      method: "GET",
      url:
        "https://custom-search.p.rapidapi.com/api/search/CustomImageSearchAPIV2",
      params: {
        q: this.state.searchQuery,
        pageNumber: "1",
        searchEngineId: "8090045467032532905",
      },
      headers: {
        "x-rapidapi-key": "ea1392a2cfmsha3d04feaf4e7a03p1d2cd8jsn324ef9a79ba1",
        "x-rapidapi-host": "custom-search.p.rapidapi.com",
      },
    };
    var newImages = [];
    await axios
      .request(options)
      .then(function (response) {
        newImages = response.data.value;
      })
      .catch(function (error) {
        console.error(error);
      });
    const auth = this.state.jwt;
    const search = this.state.searchQuery;
    const searched = true;
    await this.setState({
      jwt: auth,
      searchQuery: search,
      searched: searched,
      images: newImages,
    });
    console.log(newImages);
  }

  render() {
    return (
      <div>
        <div id="e112_15">
          <span id="e112_16">// GET INSPIRED</span>
          <img
            hidden={this.state.searched}
            id="e112_16_img"
            alt="img0"
            src={inspo}
          ></img>
          <div hidden={!this.state.searched} id="e112_20">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img1"
              src={this.state.images[0].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_21">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img2"
              src={this.state.images[1].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_22">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img3"
              src={this.state.images[2].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_23">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img4"
              src={this.state.images[3].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_39">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img5"
              src={this.state.images[4].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_40">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img6"
              src={this.state.images[5].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_41">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img7"
              src={this.state.images[6].url}
            ></img>
          </div>
          <div hidden={!this.state.searched} id="e112_42">
            <img
              hidden={!this.state.searched}
              id="e112_20_img"
              alt="img8"
              src={this.state.images[7].url}
            ></img>
          </div>
          <div id="e112_50"></div>
          <div id="e112_52"></div>
          <div id="e112_54"></div>
          <div id="e112_60"></div>
          <div id="e112_62"></div>
          <div id="e112_64"></div>
          <div id="e112_66"></div>
          <div id="e112_68"></div>
          <div id="e112_70"></div>
          <div id="e112_73"></div>
          <span id="e114_21" hidden={!this.state.searched}>
            8 search results for
          </span>
          <br></br>
          <span id="e114_21_2" hidden={!this.state.searched}>
            "{this.state.searchQuery}"
          </span>
          <div id="e112_48"></div>
          <div id="e112_56"></div>
          <div id="e136_2000">
            <div id="e136_2001"></div>
            <div id="e136_2002"></div>
            <div id="ei112_29_46_9"></div>
            <div id="e46_9">
              <input
                id="e46_9_input_1"
                placeholder="Get Inspired..."
                onChange={this.handleSearch}
                onKeyDown={this.scrapeGoogleSearch}
              ></input>
            </div>
            <span id="e136_2003">// FIT CHECK</span>
          </div>
          <div id="e78_0"></div>
          <div id="e82_14"></div>
          <div id="e145_7"></div>
          <div id="e145_8"></div>
        </div>
      </div>
    );
  }
}

export default GetInspired;
