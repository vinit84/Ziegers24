import './App.css';
import {Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './components/home';
import Eventpage from './components/Eventpage';

// import ScrollComponent from './components/ScrollComponent';
import GamingPage from './components/Events/Gamingpage';
import Valorant from './components/Gaming Events/Valorant';
// import LocomotiveScrollComponent from './components/LocomotiveScrollComponent';




function App() {
  
  const location = useLocation();
  return (
    <>
     {/* <ScrollComponent/>
     <LocomotiveScrollComponent/> */}
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Home/>}/>
      <Route path="/events" element={<Eventpage/>} />
      <Route path="/events/gaming" element={<GamingPage/>} />
      <Route path="/events/gaming/valorant" element={<Valorant/>} />
      {/* <Route path="/events/technutz" element={<GamingPage/>} />
      <Route path="/events/codex" element={<GamingPage/>} />
      <Route path="/events/webdev" element={<GamingPage/>} /> */}
      
     </Routes> 
    </AnimatePresence>
     </>

  );
}









export default App;
