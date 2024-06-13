import Testimonials from '../components/Testimonials';
import WhyUteAerospace from '../components/Why' 
import whatVideo from '../assets/what_Video.mp4'
import Let from '../components/Let'

const Home = () => {

  return (
    <main>
        {/* Other content */}
        <video src={whatVideo} style={{width: '100%'}}/>
        <Let/>
        <WhyUteAerospace />
        <Testimonials />
    </main>
  );
};

export default Home
