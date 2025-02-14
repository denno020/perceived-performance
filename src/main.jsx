import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../packages/base/components/App";
import "../packages/base/util/firebase";
import "../packages/base/css/styles.css";
import "./index.css";
import "./fonts.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App sectionId={0} />} />
      <Route path="/1/*" element={<App sectionId={1} />} />
      <Route path="/2/*" element={<App sectionId={2} />} />
      <Route path="/3/*" element={<App sectionId={3} />} />
      <Route path="/4/*" element={<App sectionId={4} />} />
      <Route path="/5/*" element={<App sectionId={5} />} />
      <Route path="/6/*" element={<App sectionId={6} />} />
      <Route path="/7/*" element={<App sectionId={7} />} />
    </Routes>
  </BrowserRouter>
);
