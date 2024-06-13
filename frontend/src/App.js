import './App.css';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="site-container">
      <main>
        {/* Other content */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;


