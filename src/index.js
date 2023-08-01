import React, { Component } from "react";
import ReactDOM from 'react-dom/client';

// SCSS
import './assets/scss/common.scss';
import './assets/scss/home-page.scss';

// Shared Components
import Header from './pages/common/Header';
import Intro from './pages/home-page/Intro';
import Skills from './pages/home-page/Skills';
import FormBlock from './pages/home-page/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Skills />
    <FormBlock />
  </React.StrictMode>
);