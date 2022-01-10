import React, { Fragment } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
import LoadingBlock from "../../LoadingBlock";

const Product = ({ product, onAddToCart, loading }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const onAddKeyboard = () => {
    const obj = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
    };

    onAddToCart(obj);
  };

  return (
    <Fragment>
      <Card className={classes.root}>
        {loading === "loading" ? (
          <LoadingBlock />
        ) : (
          <>
            <CardMedia
              className={classes.media}
              image={product.imageUrl}
              title={product.name}
            />
            <CardContent className={classes.cardContent}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ marginBottom: "1em" }}
                >
                  <Typography
                    variant="h4"
                    style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}
                    gutterBottom
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: "-0.3em",
                      fontFamily: "Poppins",
                      fontSize: "1.5rem",
                    }}
                  >
                    {product.price}$
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Poppins",
                    }}
                  >
                    {product.description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <IconButton
                aria-label="add to cart"
                style={{
                  marginTop: matchesXS ? 0 : "1em",
                }}
                onClick={onAddKeyboard}
              >
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </>
        )}
      </Card>
    </Fragment>
  );
};

export default React.memo(Product);
