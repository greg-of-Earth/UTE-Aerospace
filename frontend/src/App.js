import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WhyUteAerospace from './components/why_ute_aerospace'; // Updated path

function Home() {
  return <h1>Home Page</h1>;
}

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
        </Routes>
        <main>
        {/* Other content */}
        <WhyUteAerospace />
        <Testimonials />
      </main>
      <Footer />
    </Router>



  );
}

export default App;


