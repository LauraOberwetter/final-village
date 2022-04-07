import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

//import components
import Nav from "./Components/nav/Nav";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Menu from "./Components/menu/Menu";
import Contact from "./Components/contact/Contact";



export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

