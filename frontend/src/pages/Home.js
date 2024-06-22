import Testimonials from '../components/Testimonials';
import WhyUteAerospace from '../components/Why' 
import whatVideo from '../assets/what_Video.mp4'
import Let from '../components/Let'
import React, { useEffect } from 'react';
import homeStyles from'./Home.module.css'; // Import your CSS file if needed
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
            <figure className={homeStyles.videoContainer} id={homeStyles.videoContainer}> 
              <video className={homeStyles.video} id={homeStyles.video} src={whatVideo} autoPlay muted />
              <figcaption className={homeStyles.overlay} id={homeStyles.overlay}>
                <Link to='/Model1' className={homeStyles.link} id={homeStyles.link}>Click Here</Link>
              </figcaption>
            </figure>

            <Let/>
            <WhyUteAerospace />
            <Testimonials />
        </main>
    );
};


export default Home
