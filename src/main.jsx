import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../packages/base/components/App';
import AppWithFooterPushed from '../packages/01-push-footer/components/App';
import AppWithFooterFoldPushed from '../packages/02-push-fold-footer/components/App';
import AppWithFetchFirst from '../packages/03-fetch-first/components/App';
import AppWithDataCache from '../packages/04-data-cache/components/App';
import AppWithPreFetching from '../packages/05-pre-fetching/components/App';
import AppWithBrowserCache from '../packages/06-browser-cache/components/App';
import AppWithOptimisticUI from '../packages/07-optimistic-ui/components/App';
import { useStore } from "../packages/base/store";
import '../packages/base/css/styles.css'
import './index.css'
import './fonts.css'

// fetch('http://localhost:3000/getCart').then(res => res.json()).then((res) => {
//   useStore.setState({ cart: res.cart })
// })
// Clear contents of cart on initial render to ensure cart items aren't leaked acros demo's
fetch('http://localhost:3000/clearCart', {
  method: 'DELETE'
})

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/1/*" element={<AppWithFooterPushed />} />
      <Route path="/2/*" element={<AppWithFooterFoldPushed />} />
      <Route path="/3/*" element={<AppWithFetchFirst />} />
      <Route path="/4/*" element={<AppWithDataCache />} />
      <Route path="/5/*" element={<AppWithPreFetching />} />
      <Route path="/6/*" element={<AppWithBrowserCache />} />
      <Route path="/7/*" element={<AppWithOptimisticUI />} />
    </Routes>
  </BrowserRouter>,

);
