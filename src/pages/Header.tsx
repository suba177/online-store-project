import { NavLink } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Container } from "@mui/material";

export default function Header() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "700px",
                }}
              >
                <NavLink to="/" className={setActive}>
                  Домашняя страница
                </NavLink>
                <NavLink to="/combos" className={setActive}>
                  Комбо
                </NavLink>
                <NavLink to="/pizzas" className={setActive}>
                  Пиццы
                </NavLink>
                <NavLink to="snacks" className={setActive}>
                  Закуски
                </NavLink>
                <NavLink to="drinks" className={setActive}>
                  Напитки
                </NavLink>
                <NavLink to="desserts" className={setActive}>
                  Десерты
                </NavLink>
                <NavLink to="sauces" className={setActive}>
                  Соусы
                </NavLink>
              </Typography>
            </Box>

            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            <FormGroup sx={{ ml: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    color="success"
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth ? "Logout" : "Login"}
              />
            </FormGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
