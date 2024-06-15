import Testimonials from '../components/Testimonials';
import WhyUteAerospace from '../components/Why' 
import whatVideo from '../assets/what_Video.mp4'
import Let from '../components/Let'
import React, { useEffect } from 'react';
import './Home.css'; // Import your CSS file if needed
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const video = document.getElementById("what_vid");
        const overlay = document.querySelector(".overlay");

        if (video && overlay) {
            video.addEventListener('ended', () => {
                console.log('Video ended');
                overlay.style.visibility = 'visible';
            });
        } else {
            console.error('Video or overlay element not found');
        }

        // Clean-up: Remove event listener on unmount or dependency change
        return () => {
            if (video) {
                video.removeEventListener('ended', () => {
                    console.log('Removing event listener');
                });
            }
        };
    }, []);

  return (
    <main>
        <figure id='vid_div' style={{width: '100%', margin: '0px', padding: '0px'}}> 
          <video id='what_vid' src={whatVideo} autoPlay muted style={{width: '100%', margin: 'auto'}} />

          <figcaption className='overlay'> 
            <Link to='/Model1' > Click Here </Link>
          </figcaption>
        </figure>

        <Let/>
        <WhyUteAerospace />
        <Testimonials />
    </main>
  );
};

export default Home
