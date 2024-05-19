import { Routes, Route } from "react-router-dom";
// PAGES
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import HowToBuy from "../pages/HowToBuy";
import About from "../pages/About";
import Help from "../pages/Help";
import PickUpPoint from "../pages/PickUpPoint";
import Combos from "../pages/assortment/Combos";
import Pizzas from "../pages/assortment/Pizzas";
import Snacks from "../pages/assortment/Snacks";
import Drinks from "../pages/assortment/Drinks";
import Desserts from "../pages/assortment/Desserts";
import Sauces from "../pages/assortment/Sauces";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="combos" element={<Combos />} />
        <Route path="pizzas" element={<Pizzas />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="desserts" element={<Desserts />} />
        <Route path="sauces" element={<Sauces />} />
        <Route path="howtobuy" element={<HowToBuy />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="pickuppoint" element={<PickUpPoint />} />
      </Route>
    </Routes>
  );
}
