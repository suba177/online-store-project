import { NavLink } from "react-router-dom";

export default function Footer() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div className="container">
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
      <p>Х ПУНКТОВ ВЫДАЧИ ЗАКАЗОВ</p>
      <p>Х ВЫПОЛНЕНО ЗАКАЗОВ</p>
      <p>Х ДОВОЛЬНЫХ КЛИЕНТОВ</p>
      <p>Х ЛЕТ НА РЫНКЕ</p>
      <p>Х ЗАКАЗОВ В ДЕНЬ ОБРАБАТЫВАЕМ</p>
    </div>
  );
}
