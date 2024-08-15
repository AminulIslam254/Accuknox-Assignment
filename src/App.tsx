import React from 'react';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './components/Home';

import { RouteStrings } from './components/utils/Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteStrings.HomePage} element={<Home />} />
        </Routes>


      </BrowserRouter>


    </>
  );
}

export default App;
