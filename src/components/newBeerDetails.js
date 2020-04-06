import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

class newBeerDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((response) => {
      console.log("newBeerDetails -> componentDidMount -> response", response)
      let data = response.data
        this.setState({
          beers: data,
        });
      });
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-item">
          {!this.state.beers && <h1>Loading page...</h1>}
          {this.state.beers && 
            <Card>
              <CardContent>
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
          }
        </div>
      </div>
    );
  }
}

export default newBeerDetails;
