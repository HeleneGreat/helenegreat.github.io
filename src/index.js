import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Curriculum from './pages/Curriculum/Curriculum';
import Portfolio from './pages/Portfolio/Portfolio';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Error from './components/Error/Error';
import projects from './datas/projects'
import jobs from './datas/jobs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ReactGA from 'react-ga4';

// Style
import { createGlobalStyle } from 'styled-components'
import PostNoBillColombo from './assets/fonts/postnobillscolombo-medium-webfont.woff'
import {breakpoints} from './utils/css-breakpoints'
import fonts from './utils/fonts'
import colors from './utils/colors'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

const GlobalStyle = createGlobalStyle`
  #no-script{
    display: none;
    visibility: hidden;
  }
  @font-face {
    font-family: 'post_no_bills_colombomedium';
    src: url(${PostNoBillColombo}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  body {
    margin: 0;
    scroll-behavior: smooth;
    background-color: ${colors.primary};
  }
  ::-webkit-scrollbar {
    width: 12px;
    background : ${colors.secondary};
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 1px grey;
    background: ${colors.primaryLight};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #2a3d2a; 
  }
  * {
    font-family: ${fonts.pt};
    &::selection{
      background-color: #fff;
      color: ${colors.primary};
    }
  }
  h1, h2, h3 {
    font-family: ${fonts.colombo}
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  p, a, h1, h2, h3, ul, li{
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 55px;
    @media screen and ${breakpoints.tablet} {
      font-size: 70px;
    }
  }
  h2 {
    font-size: 35px;
    @media screen and ${breakpoints.tablet} {
      font-size: 50px;
    }
  }
  h3 {
    font-size: 28px;
    @media screen and ${breakpoints.tablet} {
      font-size: 40px;
    }
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
  .main {
    margin-top: 72px;
    min-height: calc(100vh - 248px); 
    @media screen and ${breakpoints.tablet} {
      min-height: calc(100vh - 202px); 
    }
    @media screen and ${breakpoints.laptop} {
      margin-top: 91px;
      min-height: calc(100vh - 221px); 
    }
  }
  p, a, li{
    font-size: 18px;
    line-height: 28px;
    @media screen and ${breakpoints.tablet} {
      font-size: 23px;
      line-height: 35px;
    }
  }
  .page-header{
    color: #fff;
    background-color: ${colors.primary};
    padding: 50px 0 80px;
    p {
      letter-spacing: 1px;
      margin-top: 20px;
      @media screen and ${breakpoints.laptop} {
          margin-top: 30px;
            width: 80%;
      }
      @media screen and ${breakpoints.desktop} {
          width: 70%;
      }
    }
  }
  .page-body{
    padding-top: 40px;
    padding-bottom: 80px;
  }
  .button{
    background-color: ${colors.tertiary};
    color: #fff;
    padding: 8px 25px;
    font-size: 25px;
    line-height: 35px;
    font-family: ${fonts.colombo};
    &:hover {
        background-color: ${colors.primary};
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 335px){
        font-size: 19px;
        padding: 8px 18px;
    }
    @media screen and ${breakpoints.laptop} {
      padding: 8px 30px;
      font-size: 30px;
    }
  }
`


function App() {
  const TRACKING_ID = "G-69WBCTNJ1C"; // GA4 TRACKING_ID
  
  ReactGA.gtag(
    'consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    }
  )
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        storage: 'none', // Désactive le stockage des cookies
        storeGac: false, // Ne pas stocker les données de consentement dans les cookies
        anonymize_ip: true // Anonymise l'adresse IP des utilisateurs
    }
    });
    ReactGA.ga('consent', 'default', {
      ad_storage: 'denied', // Refuser le suivi publicitaire
      analytics_storage: 'denied' // Refuser le suivi analytique
  });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: window.location.pathname });
  }, []);

  return (
    <React.StrictMode>
        <Router>
          <ScrollToTop/>
          <GlobalStyle/>
          <Header/>
          <ScrollToTopButton/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/parcours" element={<Curriculum/>}/>
            <Route path="/parcours/:jobSlug" element={<Curriculum jobs={jobs}/>}/>
            <Route path="/projets" element={<Portfolio/>}/>
            <Route path="/projets/:projectSlug" element={<Project projects={projects}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <Footer/>
        </Router>
      </React.StrictMode>
  )
}
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
