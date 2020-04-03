import React, { Component } from "react";
import axios from "axios";

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers").then(apiResponse => {
      this.setState({
        beers: apiResponse.data
      });
      console.log(
        "Beers -> componentDidMount -> apiResponse",
        this.state.beers
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.beers.map((aBeer, _id) => (
          <div key={_id}>
            <div>
              {/* <Link to={`/countrylist/countryinfo/${aCountry.ccn3}`}> */}
              <p>Name:{aBeer.name}</p>
              <p>Tagline: {aBeer.tagline}</p>
              <p>Contributed by: {aBeer.contributed_by}</p>
              {/* </Link> */}
            </div>
          </div>
        ))}
        {/* <Route path="/countrylist/countryinfo/:ccn3" component={CountryInfo} /> */}
      </div>
    );
  }
}

export default Beers;
