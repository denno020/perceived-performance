import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from '../packages/base/components/App'
import { useStore } from "../packages/base/store";
import '../packages/base/css/styles.css'
import './index.css'
import './fonts.css'

fetch('http://localhost:3000/getCart').then(res => res.json()).then((res) => {
  useStore.setState({ cart: res.cart })
})

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

);
