// import Testimonials from '../components/Testimonials';
import WhyUteAerospace from '../components/Why' 
import whatVideo from '../assets/what_Video2.mp4'
// import Let from '../components/Let'
import React, { useEffect } from 'react';
import homeStyles from'./Home.module.css'; // Import your CSS file if needed
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const video = document.getElementById("video-element");
        const overlay = document.getElementById('overlay-element');
        const text = document.getElementById('overlay');

        if (video && overlay) {
            video.addEventListener('ended', () => {
                console.log('Video ended');
                text.style.color = 'white';
                text.style.textDecoration = 'underline';
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
            <figure className={homeStyles.videoContainer} id={homeStyles.videoContainer}> 
              <video className={homeStyles.video} id= 'video-element' src={whatVideo} autoPlay muted />
              <figcaption className={homeStyles.overlay} > 
                <Link to='/Model1' className={homeStyles.link} id='overlay-element'><span id='overlay'>Click Here</span></Link>
            </figcaption>
            </figure>

            {/* <Let/> */}
            <WhyUteAerospace />
            {/* <Testimonials /> */}
        </main>
    );
};


export default Home
