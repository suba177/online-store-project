import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <Box>
      <Container>
        <Typography variant="body1">
          <NavLink to="/howtobuy" className={setActive}>
            Как купить
          </NavLink>
          <NavLink to="/about" className={setActive}>
            О нас
          </NavLink>
          <NavLink to="/help" className={setActive}>
            Помощь
          </NavLink>
          <NavLink to="pickuppoint" className={setActive}>
            Пункты выдачи
          </NavLink>
        </Typography>
      </Container>
    </Box>
  );
}
