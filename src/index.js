import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

import {
  Nav,
  Footer,
  DevLog,
  DevLogs,
  Post,
} from "./components";

import {
  Home,
  About,
  Projects,
  Contact,
  NotFound,
} from "./Pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/DevLog" element={<DevLog />} />
         <Route path="" element={<DevLogs />} />
         <Route path=":postSlug" element={<Post/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
