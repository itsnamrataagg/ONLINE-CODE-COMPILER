import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Compiler from "./pages/Compiler";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<Signup />} />

      <Route path="/login" element={<Login />} />

      <Route path="/compiler" element={<Compiler />} />

    </Routes>

  </BrowserRouter>

);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Compiler from "./pages/Compiler";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//         <Route path="/compiler" element={<Compiler />} />

//       </Routes>

//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
