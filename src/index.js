import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Curriculum from './pages/Curriculum/Curriculum';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Error from './components/Error/Error';

// Style
import { createGlobalStyle } from 'styled-components'
import PostNoBillColombo from './assets/fonts/postnobillscolombo-medium-webfont.woff'
import {breakpoints} from './utils/css-breakpoints'
import fonts from './utils/fonts'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'post_no_bills_colombomedium';
    src: url(${PostNoBillColombo}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  body {
    margin: 0;
  }
  * {
    font-family: ${fonts.pt};
  }
  h1, h2 {
    font-family: ${fonts.colombo}
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  p{
    margin: 0;
  }
  .container {
    width: 90%;
    margin: 0 auto;
    @media screen and ${breakpoints.laptop} {
      width: 80%;
    }
    @media screen and ${breakpoints.desktop} {
      width: 1200px;
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/parcours" element={<Curriculum/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/portfolio/:projectId" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
