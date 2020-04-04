import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class BeerDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params

    axios
    .get(`https://ih-beers-api.herokuapp.com/beers/${id}`)
    //   .get(`https://ih-beers-api.herokuapp.com/beers/${this.props._id}`)
      .then(apiResponse => {
        this.setState({
          beers: apiResponse.data
        });
        console.log(
          "BeerDetails -> componentDidMount -> beers",
          this.state.beers
        );
        console.log(
          "BeerDetails -> componentDidMount -> apiResponse",
          apiResponse.data
        );
      });
  }
  render() {
    return (
      <div className="card-container">
        <div className="card-item">
          <Card>
            <CardContent>
              <img
                src={this.state.beers.image_url}
                className="card-icon"
                alt=""
              />
              <h2>{this.state.beers.name}</h2>
              <p>{this.state.beers.tagline}</p>
              <p>{this.state.beers.first_brewed}</p>
              <h3>Attenuation Level:</h3>{" "}
              <p>{this.state.beers.attenuation_level}</p>
              <h2>Description:</h2>
              <p>{this.state.beers.description}</p>
              <h2>Contributed by:</h2>
              <p>{this.state.beers.contributed_by}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
