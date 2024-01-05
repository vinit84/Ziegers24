import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Eventpage from './components/Eventpage';
import Gamingpage from './components/Events/Gaming';
import Valorant from './components/Gaming Events/Valorant';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/*" element = {<App/>}/>
        <Route path="/events" element={<Eventpage/>}/>
        <Route path="/events/gaming" element={<Gamingpage/>} />
        <Route path="/events/gaming/valorant" element={<Valorant/>} />
        {/* <Route path="/events/technutz" element={<GamingPage/>} />
      <Route path="/events/codex" element={<GamingPage/>} />
      <Route path="/events/webdev" element={<GamingPage/>} /> */}
      </Routes>
    </Router>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






