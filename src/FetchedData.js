import React, { Component } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";

class FetchedData extends Component {
  state = {
    artists: [],
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/home").then((res) => {
      const artists = res.data;
      console.log(artists);
      this.setState({
        artists,
      });
    });
  }
  render() {
    // console.log(this.state.artists);
    return (
      <ul>
        {" "}
        {this.state.artists.map((artist) => (
          <li> {artist.artist_name} </li>
        ))}{" "}
      </ul>
    );
  }
}

export default FetchedData;
