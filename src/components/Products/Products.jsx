import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice";

import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ searchValue }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.products);

  const handleKeyboardToCart = useCallback(
    (obj) => {
      dispatch(addItemToCart(obj));
    },
    [dispatch]
  );

  const filtredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        justifyContent="center"
        className={classes.mainContainter}
      >
        {(status === "loading" ? [...Array(2)] : filtredItems).map(
          (product, index) => (
            <Grid item key={index}>
              <Grid container alignItems="center" justifyContent="center">
                <Product
                  product={product}
                  loading={status}
                  onAddToCart={handleKeyboardToCart}
                />
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </main>
  );
};

export default Products;
