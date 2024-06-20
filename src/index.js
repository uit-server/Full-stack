import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faq from './Faq/Faq.js';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from 'react-router-dom';
import Navigator from './navigator.js';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import Conference from './Conference/Conference.jsx';
import OtherCommittie from './Conference/OtherCommittee.jsx';
import DownloadLinks from './Conference/DownloadLinks.jsx';
import LogoAnimation from './Images/LogoAnimation.jsx';
import Navbar from './Nav/Navbar.jsx';
import PdfPage from './PdfPage/PdfPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <Router>
      <Navigator />

    </Router>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
