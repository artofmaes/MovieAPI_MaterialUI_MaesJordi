import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

import { Typography } from "@material-ui/core";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/movie/Form";
import Movies from "./components/movie/Movies";
import MovieInfo from "./components/movie/Movieinfo";
import Loading from "./components/movie/Loading";
import Layout from "./components/Layout";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        loading: false,
        error: false,
        data: []
      },
      selectedMovie: {
        error: false,
        loading: false,
        data: {}
      }
    };
  }

  getMovies = str => {
    this.setState({
      ...this.state,
      movies: {
        ...this.state.movies,
        loading: true
      }
    });
    axios
      .get(process.env.REACT_APP_ENDPOINT + "&s=" + str)
      .then(results => {
        // console.log(results.data.Search);
        this.setState({
          ...this.state,
          movies: {
            ...this.state.movies,
            data: [...results.data.Search],
            loading: false
          }
        });
        // console.log(this.state.movies.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getSpecificMovie = imdbID => {
    this.setState({
      ...this.state,
      selectedMovie: {
        ...this.state.selectedMovie,
        loading: true,
        data: {}
      }
    });
    axios
      .get("https://www.omdbapi.com/?apikey=2e3b4604&i=" + imdbID)
      .then(results => {
        // console.log(results.data.Search);
        this.setState({
          ...this.state,
          selectedMovie: {
            ...this.state.selectedMovie,
            loading: false,
            data: { ...results.data }
          }
        });
        // console.log(this.state.movies.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Layout
        title={this.state.selectedMovie.data.Title}
        year={this.state.selectedMovie.data.Year}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/movie"
            render={() => (
              <>
                <Typography variant="h6" noWrap>
                  Begin thy quest here
                </Typography>
                <br />
                <Form getMovies={this.getMovies} />
                {this.state.movies.loading && <Loading />}
                {this.state.movies.data.length !== 0 && (
                  <Movies movies={this.state.movies.data} />
                )}
              </>
            )}
          />
          <Route
            path="/movie/:id/:title"
            render={props => (
              <MovieInfo
                {...props}
                getSpecificMovie={this.getSpecificMovie}
                specificMovie={this.state.selectedMovie}
              />
            )}
          />
        </Switch>
      </Layout>
    );
  }
}
