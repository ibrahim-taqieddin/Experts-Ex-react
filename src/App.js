import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import { Header } from "./components/Header";
import Exchange from "./components/exchange";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/login";

export default function App() {
  const [remove, setRemove] = React.useState(true);

  return (
    <>
      <Header setRemove={setRemove} remove={remove} />

      <Routes>
        <Route exact path="/" element={<Exchange />}></Route>
        <Route exact path="/exchange" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route
          exact
          path="/login"
          element={<LogIn setRemove={setRemove} remove={remove} />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}
