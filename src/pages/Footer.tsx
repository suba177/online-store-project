import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <Stack>
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
    </Stack>
  );
}
