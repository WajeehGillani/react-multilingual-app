/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

// i18next
import { useTranslation } from "react-i18next";

// Mui Styles
const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
  media: {
    height: 150,
  },
  image: {
    fontSize: 120,
  },
});

const ProductCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍇</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Grapes")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍈</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Melon")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍉</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Watermelon")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍊</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Tangerine")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍋</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Lemon")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍌</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Banana")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍍</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Pineapple")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🥭</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Mango")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍎</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Red")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <span className={classes.image}>🍏</span>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t("Green")}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>$250</CardActions>
        </Card>{" "}
      </Grid>
    </>
  );
};
export default ProductCard;
