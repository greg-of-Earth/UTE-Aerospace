import React, { useEffect, useState } from 'react';
import underConstructionStyles from './UnderConstruction.module.css';
import construction from '../assets/abstract.png'
import HeaderImg from './HeaderImg';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';

const UnderConstruction = () => {
    const [timeLeft, setTimeLeft] = useState({});
    
    useEffect(() => {
        const countDownDate = new Date("Jul 22, 2024 12:00:00").getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({});
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        
        //clears up interval
        return () => clearInterval(interval);
    }, []);
    
return ( 
    <Header>
        <HeaderImg src={construction} alt="image of a computer" style={{ height: '100%', width: 'auto' }}/>
        < HeaderTitle headTitle='This Webpage is Currently Under Construction' color='white'/>
        <section id='timer' className={underConstructionStyles['timer-section']}>
                {timeLeft.days !== undefined 
                    ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
                    : "EXPIRED"}
        </section>
        
    </Header>
    
)
}
export default UnderConstruction