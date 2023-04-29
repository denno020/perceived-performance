import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from '../packages/base/components/App'
import '../packages/base/css/styles.css'
import './index.css'
import './fonts.css'

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

);
