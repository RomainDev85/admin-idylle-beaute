import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./styles/index.scss"
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/index';
import { getUser } from "./redux/actions/user.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUser());


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
