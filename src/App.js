import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import { Provider } from "react-redux";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/login" element={< Login />} />
          <Route exact path="/admin" element={ <Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
