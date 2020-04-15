import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../Helpers";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  CardActions,
  Typography
} from "@material-ui/core";

export default function Movies({ movies }) {
  return (
    <>
      <Typography variant="h6" noWrap>
        Thine Results
      </Typography>
      <Grid container justify="center" spacing={4}>
        {movies.map(movie => (
          <Grid item xs={10} md={4} sm={5} key={movie.imdbID}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={movie.Poster}
                  title={movie.Title}
                />
                <Typography variant="h6">{movie.Title}</Typography>
              </CardActionArea>
              <CardActions>
                <Link to={`movie/${movie.imdbID}/${slugify(movie.Title)}`}>
                  <Button variant="contained" color="secondary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
