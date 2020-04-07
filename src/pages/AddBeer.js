import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

class AddBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    axios({
      method: "POST",
      url: "https://ih-beers-api.herokuapp.com/beers/new",
      data: qs.stringify(this.state),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        this.props.history.push(`/beer-detail/${response.data._id}`);
      })
      .catch((err) => {
        console.log("AddBeer -> handleSubmit -> err", err.response.data);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
            name="tagline"
            placeholder="tagline"
          />
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
            placeholder="description"
          />
          <input
            type="date"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            name="first_brewed"
            placeholder="first brewed"
          />
          <input
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            name="brewers_tips"
            placeholder="brewers tips"
          />
          <input
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            name="attenuation_level"
            placeholder="attenuation level"
          />
          <input
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            name="contributed_by"
            placeholder="contributed by"
          />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  }
}

export default AddBeer;
