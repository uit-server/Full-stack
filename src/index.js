import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from 'react-router-dom';
import Navigator from './navigator.js';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import DDMLab from './subLInks/Labs/DDM/DDMLab.jsx';
import Home from './Home/Home.jsx';
import CarouselSlider from './Components/CarouselSlider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <Router>
      <CarouselSlider />

    </Router>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
