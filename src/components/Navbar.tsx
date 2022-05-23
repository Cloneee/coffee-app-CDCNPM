import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import isAuth from "../app/isAuth";
import { useAppSelector } from "../app/hooks";

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const cartNumber = useAppSelector(state => state.cart.cartNumber);

  const navigate = useNavigate();
  const handleRedirect = (path: any) => {
    navigate(path);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    handleMenuClose();
    navigate("/login");
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleMenuClose();
    localStorage.removeItem("token");
    navigate("/");
  };

  const textButton = {
    ml: 2,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!isAuth() ? (
        <MenuItem onClick={handleLogin}>Đăng nhập</MenuItem>
      ) : (
        [
          <MenuItem onClick={handleProfile}>Profile</MenuItem>,
          <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>,
        ]
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show cartNumber"
          color="inherit"
          onClick={handleRedirect.bind(null, "/cart")}
        >
          <Badge badgeContent={cartNumber} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 25 }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handleRedirect.bind(null, "/")}
          >
            The Coffee Home
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={textButton}
              onClick={handleRedirect.bind(null, "/")}
            >
              Đặt hàng
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={textButton}
              onClick={handleRedirect.bind(null, "/news")}
            >
              Tin tức
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={textButton}
              onClick={handleRedirect.bind(null, "/stores")}
            >
              Cửa hàng
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={textButton}
              onClick={handleRedirect.bind(null, "/sale")}
            >
              Khuyến mãi
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={textButton}
              onClick={handleRedirect.bind(null, "/recruit")}
            >
              Tuyển dụng
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show cartNumber"
              color="inherit"
            >
              <Badge
                badgeContent={cartNumber}
                color="error"
                onClick={handleRedirect.bind(null, "/cart")}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
