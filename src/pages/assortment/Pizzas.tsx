import GoodsList from "../../components/GoodsList";
import { goods } from "../../data/goods";
import { useState } from "react";

export default function Pizzas() {
  const [products, setProducts] = useState(goods);
  return (
    <div className="container">
      <GoodsList goods={products} />
    </div>
  );
}
