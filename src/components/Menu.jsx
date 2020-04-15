import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-secondary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="absolute">
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <NavLink to="/" exact activeClassName="active">
            <ListItemText primary="Home" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <NavLink to="/movie" activeClassName="active">
            <ListItemText primary="Movies" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <NavLink to="/about" activeClassName="active">
            <ListItemText primary="About 'Movie Quest'" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <NavLink to="/contact" activeClassName="active">
            <ListItemText primary="Contact us" />
          </NavLink>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
