import React from "react";
import Cart from "./Cart";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AppContextProvider from "../contexts/AppContext";

const App = () => (
  <AppContextProvider>
    <Cart />
    <Header />
    <Main />
    <Footer />
  </AppContextProvider>
);

export default App;
