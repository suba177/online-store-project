import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ marginTop: "auto" }}>
        <Footer />
      </footer>
    </div>
  );
}
