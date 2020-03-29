import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
