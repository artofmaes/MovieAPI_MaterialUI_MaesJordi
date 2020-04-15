import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function SearchAppBar() {
  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Movie Quest
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
