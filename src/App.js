import React, { useState, useContext } from "react";
import { Route, Routes, HashRouter} from 'react-router-dom';
import Knowledge from "./Knowledge"

const App = () => {

  return(
    <HashRouter>
      <Routes >
        <Route exact path="/" element={<Knowledge />}>
        </Route>
      </Routes >
    </HashRouter>
  );
}

export default App;
