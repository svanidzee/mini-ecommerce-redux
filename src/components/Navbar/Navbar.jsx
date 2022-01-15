import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  InputBase,
  Hidden,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Navbar = ({ searchValue, setSearchValue }) => {
  const classes = useStyles();
  const location = useLocation();

  const { totalQuantity } = useSelector(({ cart }) => cart);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            varinat="h6"
            className={classes.title}
            color="inherit"
          >
            Keyboards
          </Typography>

          <Hidden mdDown>
            {location.pathname === "/" && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                {/* Input  */}
                <InputBase
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Search…"
                  onChange={onChangeSearchInput}
                  value={searchValue}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            )}
          </Hidden>

          <div className={classes.grow} />

          {/* Cart Icon  */}
          {location.pathname === "/" && (
            <div className={classes.cartButton}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
                className={classes.disableRipple}
              >
                <Badge badgeContent={totalQuantity} color="secondary">
                  <ShoppingCart
                    style={{
                      "&:focus": {
                        color: "red",
                      },
                    }}
                  />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
