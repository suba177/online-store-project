import { goods } from "../../data/goods";

export default function Pizzas() {
  return (
    <div className="container">
      {goods.map((item) => (
        <img
          key={item.id}
          style={{ width: "200px", height: "200px" }}
          src={item.poster}
        />
      ))}
    </div>
  );
}
