import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";


const Products = () => {
  return (
    <Grid containe spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default Products;
