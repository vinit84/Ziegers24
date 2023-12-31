import './App.css';
import Eventpage from './Eventpage';
import Home from './home';
import {Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Home/>}/>
      <Route path="/eventspage" element={<Eventpage/>} />
     </Routes> 
    </AnimatePresence>
     </>

  );
}





export default App;
