import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Beers.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api.herokuapp.com/beers")
      .then((apiResponse) => {
        this.setState({
          beers: apiResponse.data,
        });
      });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.beers.map((aBeer, _id) => (
          <div className="card-item" key={_id}>
            <Card>
              <CardContent>
                <Link to={`/beers/details/${aBeer._id}`}>
                  <img src={aBeer.image_url} className="card-icon" alt="" />
                </Link>
                <h2>{aBeer.name}</h2>
                <p>{aBeer.tagline}</p>
                <small>Contributed by: {aBeer.contributed_by}</small>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
