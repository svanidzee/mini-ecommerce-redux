import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Products, Navbar, Cart } from "./components";
import { fetchData } from "./store/products-slice";

const App = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
