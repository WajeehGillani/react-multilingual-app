import { useTranslation } from "react-i18next";
import React, { useState } from "react";

// Mui
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

// Components
import Products from "./components/Products";

// Mui Styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: 10,
  },
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();

  const isMenuOpen = Boolean(anchorEl);

  // Methods
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // menu
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => changeLanguage("en")}>{t("English")}</MenuItem>
      <MenuItem onClick={() => changeLanguage("de")}>{t("German")}</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">{t("MultilingualApp")}</Typography>

          <div className={classes.grow} />
          <div>
            <Button
              aria-label="change current language"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {t("ChangeLanguage")}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Container maxWidth="md">
        <Products />
      </Container>
    </div>
  );
}

export default App;
