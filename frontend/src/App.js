import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Model1 from './pages/Model1';

import Home from './pages/Home';

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
          <Route path='/Model1' element={<Model1 />} />
        </Routes>
      <Footer />
    </Router>



  );
}

export default App;


