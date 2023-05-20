import React from "react";
import Cart from "../Cart";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useCommonHooks } from "../../hooks/useCommonHooks";
import { useClickRipple } from "../../hooks/useClickRipple";

const App = () => {
  useCommonHooks();
  useClickRipple();
  return(
  <>
    <Cart />
    <div className="wrapper">
      <Header />
      <Main />
    </div>
    <Footer />
  </>
)};

export default App;
