import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Model1 from './pages/Model1';

import Home from './pages/Home';
import CompanyLeaders from './pages/CompanyLeaders';
import Contact from './pages/Contact';
import LeadersProfile from './pages/LeadersProfile';


function About() {
  return <h1>About Page</h1>;
}

const App = () =>   {
  
  return (

    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/leadership' element={<CompanyLeaders />} />
          <Route path='/leaders/:profileId' element={<LeadersProfile />} />
          <Route path='/Model1' element={<Model1 />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      <Footer />
    </Router>



  );
}

export default App;


