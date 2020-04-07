import React, { Component } from "react";
import { login } from "../utils/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
      },
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleChange(event) {
    let aUser = { ...this.state.user };
    aUser[event.target.name] = event.target.value;
    this.setState({
      user: aUser,
    });
  }

  handleLoginClick(ev) {
    ev.preventDefault();
    login(this.state.user)
      .then(() => {
        this.setState(
          {
            error: null,
          },
          () => {
            this.props.history.push("/beers");
          }
        );
      })
      .catch((error) => {
        this.setState({ error: error.response && error.response.data }); //gets the msg from the response
      });
  }

  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              value={this.state.user.username || ""}
              className="input"
              name="username"
              type="username"
              placeholder="username"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              value={this.state.user.password || ""}
              className="input"
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <button className="is-primary button" onClick={this.handleLoginClick}>
          Login
        </button>
        {this.state.error && (
          <p className="has-text-danger">
            {this.state.error.message || "error"}
          </p>
        )}
      </div>
    );
  }
}
