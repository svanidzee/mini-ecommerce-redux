import React, { Fragment, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../store/cart-slice";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const cartItems = useSelector((state) => state.cart.items);

  const getTotalCost = cartItems.reduce(
    (result, item) => item.quantity * item.price + result,
    0
  );

  const clearCart = useCallback(() => {
    if (window.confirm("Are you sure you want to clear cart?")) {
      dispatch(reset());
    }
  }, [dispatch]);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shop cart
    </Typography>
  );

  if (!cartItems) return "Loading";

  const FilledCart = () => (
    <Fragment>
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </Fragment>
  );

  return (
    <Grid container direction="column" className={classes.mainContainter}>
      <div className={classes.toolbar} />

      {/* Title */}
      <Grid item>
        <Grid
          style={{ marginTop: "1em" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className={classes.title}
            variant="h4"
            gutterBottom
            style={{ fontFamily: "Poppins" }}
          >
            Your Shopping Cart
          </Typography>
        </Grid>
      </Grid>

      {/* Card */}
      <Grid item>
        <Grid container alignItems="center" justifyContent="center">
          {getTotalCost ? <FilledCart /> : <EmptyCart />}
        </Grid>
      </Grid>

      {/* Subtotal */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent={matchesXS ? "flex-start" : "center"}
          alignItems="center"
          className={classes.cardDetails}
        >
          <Grid item style={{ marginLeft: matchesXS ? "1em" : "7em" }}>
            <Typography
              variant="h4"
              style={{
                fontSize: matchesXS ? "1.5rem" : "1.8rem",
                marginRight: "5.5em",
              }}
            >
              Subtotal: ${getTotalCost}
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesXS ? "1em" : "5.5em" }}>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={clearCart}
              style={{
                fontFamily: "Poppins",
                fontSize: matchesXS ? "0.7rem" : undefined,
                marginLeft: "12em",
              }}
            >
              Empty Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
