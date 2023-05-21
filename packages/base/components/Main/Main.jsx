import React from "react";
import { Routes, Route } from "react-router-dom";
import PDP from "../PDP";
import PLP from "../PLP";
import Cart from "../Cart";

const Main = (props) => {
  const { useCache, fetchFirst, browserCache, optimisticUi, preFetch } = props;

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <PLP
              useCache={useCache}
              fetchFirst={fetchFirst}
              browserCache={browserCache}
              optimisticUi={optimisticUi}
              preFetch={preFetch}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <PDP
              useCache={useCache}
              fetchFirst={fetchFirst}
              browserCache={browserCache}
              optimisticUi={optimisticUi}
              preFetch={preFetch}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
