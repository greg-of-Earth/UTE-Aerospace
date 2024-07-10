import React, { useEffect } from 'react';
import homeStyles from'./styles/Home.module.css'; 
import { Link } from 'react-router-dom';
import styles from './styles/Why.module.css';
import whatVideo from '../assets/what_Video2.mp4'

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
              <video className={homeStyles.video} id= 'video-element' src={whatVideo} autoPlay  muted  />
              <figcaption className={homeStyles.overlay} > 
                <Link to='/Model1' className={homeStyles.link} id='overlay-element'><span id='overlay'>Click Here</span></Link>
            </figcaption>
            </figure>
            <div className={styles['why-ute-aerospace-container']}>
                <h2>Why UTE Aerospace?</h2>
                <article className={styles['why-ute-aerospace']}>
                <p>
                UTE Aerospace is dedicated to building and enriching the Engineer of the
                Future. Led by former NASA and Rocketdyne engineers with over 65 years
                of combined aerospace experience, we offer unparalleled opportunities for
                growth and innovation. At UTE Aerospace, we foster a dynamic environment
                where cutting-edge technology meets visionary talent, enabling our team to
                pioneer advancements in aerospace engineering.
                <br/>
                <br/>
                Opportunities include: Aerospace, Mechanical, Software, Electrical,
                Structural, and more.
                </p>
                <button>Join Us Today!</button>
            </article>
            </div>
        </main>
    );
};


export default Home
