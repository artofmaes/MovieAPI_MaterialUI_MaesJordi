import React from "react";
import { Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default props => (
  <>
    <br />
    <Typography variant="h3">Welcome champ!</Typography>
    <br />
    <Typography variant="h7">
      Ready to start your movie quest? Click the button underneath to start
      exploring!
    </Typography>
    <br />
    <br />
    <br />
    <Button variant="contained" color="secondary">
      <NavLink to="/movie">Go to quest</NavLink>
    </Button>
  </>
);
