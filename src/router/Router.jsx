import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import GlobalState from "../global/GlobalState";
import React from 'react';
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailPage from "../pages/DetailPage/DetailPage";

const Router = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokemon/:pokeName" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default Router;
