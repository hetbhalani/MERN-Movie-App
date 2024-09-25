import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Card from "./components/Card"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from './Layout';
import { SearchProvider } from './SearchContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <SearchProvider>
    
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route index element={<Home/>}/>
            <Route path="/card" element={<Card />} />
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
);

