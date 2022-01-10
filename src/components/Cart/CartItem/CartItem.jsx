import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  addItemToCart,
  removeItem,
} from "../../../store/cart-slice";

import {
  Typography,
  Button,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { title, price, id, quantity, totalPrice } = item;

  const removeCartHandler = useCallback(() => {
    dispatch(removeItemFromCart(id));
  }, [dispatch, id]);

  const addCartHandler = useCallback(() => {
    dispatch(
      addItemToCart({
        id,
        price,
        title,
      })
    );
  }, [dispatch, id, price, title]);

  const removeSingle = useCallback(() => {
    dispatch(removeItem(id));
  }, [dispatch, id]);

  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.imageUrl}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h4"
              style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}
            >
              {item.name}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h5"
              style={{
                marginTop: "0.3em",
                fontFamily: "Poppins",
                fontSize: "1.5rem",
              }}
            >
              ${totalPrice}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid
          item
          className={classes.buttons}
          style={{ fontFamily: "Poppins" }}
        >
          {/* - button */}
          <Button
            type="button"
            size="small"
            onClick={removeCartHandler}
            style={{ backgroundColor: "transparent" }}
          >
            -
          </Button>
          <Typography>{quantity}</Typography>
          {/* + button */}
          <Button
            type="button"
            size="small"
            onClick={addCartHandler}
            style={{ backgroundColor: "transparent" }}
          >
            +
          </Button>
        </Grid>

        {/* Remove button */}
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={removeSingle}
          style={{ fontFamily: "Poppins", marginLeft: "6em" }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(CartItem);
