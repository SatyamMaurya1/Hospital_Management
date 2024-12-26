import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Sinterface from './components/Sinterface';
import Home from './components/Home';
import Vappoint from './components/Vappoint';
import NewAppoint from './components/NewAppoint';
import Signup from './components/Signup';
import Appointnxt from './components/Appointnxt';
import Availability from './components/Availability';
import Final from './components/Final';


function App() {
  return (
    
    <Router> 
    <Header/>
    <Routes>
    <Route path='/Sinterface/:id' element={<Sinterface/>} />
          <Route path='/Vappoint' element={<Vappoint/>}/>
          <Route path='/Sinterface' element={<Sinterface/>}/>
          <Route path='/NewAppoint/:id' element={<NewAppoint/>}/>
          <Route path='/Signup' element={<Signup/>}/>     
          <Route path='/Home' element={<Home/>}/>     
          <Route path='/' element={<Home/>} />
          <Route path='/Appointnxt/:id' element={<Appointnxt/>}/>
          <Route path='/Availability/:id' element={<Availability/>}/>
          <Route path='/final/:id' element={<Final/>}/>
          
    </Routes>       
        
    <Footer/>
    </Router>
  );
}

export default App;
