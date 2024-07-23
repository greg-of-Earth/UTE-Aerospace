import React from 'react';
import styles from './JobCard.module.css'; // Import the styles

// Assuming Button is a custom component
const Button = ({ text, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {text}
    </button>
);

const JobCard = ({ title, imageUrl, buttonText, onClick }) => {
    return (
        <div className={styles.jobCard}>
            <h2 className={styles.title}>{title}</h2>
            <img src={imageUrl} alt={title} className={styles.image} />
            <Button text={buttonText} onClick={onClick} />
        </div>
    );
}

export default JobCard;

