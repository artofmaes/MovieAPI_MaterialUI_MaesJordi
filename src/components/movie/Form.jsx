import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false
      }
    };
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      searchField: {
        ...this.state.searchField,
        value: e.target.value,
        error: false
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.searchField.value !== "") {
      this.setState({
        ...this.state,
        searchField: {
          ...this.state.searchField,
          error: false
        }
      });
      this.props.getMovies(this.state.searchField.value);
    } else {
      this.setState({
        ...this.state,
        searchField: {
          ...this.state.searchField,
          error: true
        }
      });
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.submitHandler}>
        <TextField
          id="standard-secondary"
          label="Enter Quest Name"
          color="secondary"
          value={this.state.searchField.value}
          onChange={this.changeHandler}
          className={this.state.searchField.error ? "error" : ""}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.submitHandler}
        >
          Start Quest
        </Button>
      </form>
    );
  }
}
