import React from "react";
import Cart from "../Cart";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useScrollToTopOnNav } from "../../hooks/useScrollToTopOnNav";

const App = () => {
  useScrollToTopOnNav();
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
