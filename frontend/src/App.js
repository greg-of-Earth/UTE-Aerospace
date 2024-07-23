import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Model1 from './pages/Model1';

import Home from './pages/Home';
import CompanyLeaders from './pages/CompanyLeaders';
import Contact from './pages/Contact';
import LeadersProfile from './pages/LeadersProfile';
import Investor from './pages/Investor';
import UnderConstruction from './components/UnderConstruction';
import Career from './pages/Career';


function About() {
  return <h1>About Page</h1>;
}

const App = () =>   {
  
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/leadership' element={<CompanyLeaders />} />
          <Route path='/leaders/:profileId' element={<LeadersProfile />} />
          <Route path='/Model1' element={<Model1 />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/investors' element={<Investor/>}/>
          <Route path='/team' element={<UnderConstruction/>}/>
          <Route path='/baseStations' element={<UnderConstruction/>}/>
          <Route path='/payloads' element={<UnderConstruction/>}/>
          <Route path='/careers' element={<Career/>}/>
          <Route path='/news' element={<UnderConstruction/>}/>
          <Route path='/underConstruction' element={<UnderConstruction />} />
        </Routes>
      <Footer />
    </Router>



  );
}

export default App;


