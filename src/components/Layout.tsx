import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
