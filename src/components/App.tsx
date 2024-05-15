import { Routes, Route } from "react-router-dom";
// PAGES
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import HowToBuy from "../pages/HowToBuy";
import Warranty from "../pages/Warranty";
import Help from "../pages/Help";
import PickUpPoint from "../pages/PickUpPoint";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="How-to-buy" element={<HowToBuy />} />
        <Route path="Warranty" element={<Warranty />} />
        <Route path="Help" element={<Help />} />
        <Route path="Pick-up-point" element={<PickUpPoint />} />
      </Route>
    </Routes>
  );
}
