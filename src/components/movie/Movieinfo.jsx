import React from "react";
import {
  CircularProgress,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Grid
} from "@material-ui/core";

export default class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getSpecificMovie(this.props.match.params.id);
  }
  render() {
    return (
      <>
        {this.props.specificMovie.loading && (
          <CircularProgress color="secondary" />
        )}
        {Object.keys(this.props.specificMovie.data).length >= 1 && (
          <>
            <Typography variant="h5">
              {this.props.specificMovie.data.Title}
            </Typography>
            <Typography variant="h3">
              {this.props.specificMovie.data.Year}
            </Typography>
            <br />
            <Typography variant="p">
              {this.props.specificMovie.data.Plot}
            </Typography>
            <br />
            <br />

            <Grid container justify="center" spacing={3}>
              <Grid item xs={11} md={5}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="550"
                      image={this.props.specificMovie.data.Poster}
                      title={this.props.specificMovie.data.Title}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={11} md={6}>
                <Card>
                  <CardActionArea>
                    <Typography variant="h6">Director</Typography>
                    <Typography variant="p">
                      {this.props.specificMovie.data.Director}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h6">Genre</Typography>
                    <Typography variant="p">
                      {this.props.specificMovie.data.Genre}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h6">Writer</Typography>
                    <Typography variant="p">
                      {this.props.specificMovie.data.Writer}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h6">Cast</Typography>
                    <Typography variant="p">
                      {this.props.specificMovie.data.Actors}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h6">Other info</Typography>
                    <Typography variant="p">
                      Released: {this.props.specificMovie.data.Released}
                      <br />
                      Rating: {this.props.specificMovie.data.Rated}
                      <br />
                      Runtime: {this.props.specificMovie.data.Runtime}
                      <br />
                      Metacritic Score:{" "}
                      {this.props.specificMovie.data.Metascore}
                      <br />
                      <br />
                    </Typography>
                    <Typography variant="h6">Box Office</Typography>
                    <Typography variant="p">
                      {this.props.specificMovie.data.BoxOffice}
                    </Typography>
                    <br />
                    <br />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </>
    );
  }
}
