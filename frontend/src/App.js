import './App.css';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WhyUteAerospace from './components/why_ute_aerospace'; // Updated path

function App() {
  return (
    <div className="site-container">
      <main>
        {/* Other content */}
        <WhyUteAerospace />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;


