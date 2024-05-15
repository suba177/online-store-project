import { NavLink } from "react-router-dom";

export default function Header() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div>
      <nav>
        <NavLink to="/" className={setActive}>
          Домашняя страница
        </NavLink>
        <NavLink to="/How-to-buy" className={setActive}>
          Как купить
        </NavLink>
        <NavLink to="/Warranty" className={setActive}>
          Гарантии
        </NavLink>
        <NavLink to="/Help" className={setActive}>
          Помошь
        </NavLink>
        <NavLink to="/Pick-up-point" className={setActive}>
          Пункты выдачи
        </NavLink>
      </nav>
    </div>
  );
}
