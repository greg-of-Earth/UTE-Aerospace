import React from 'react';
import Button from './Button';
import styles from './JobCard.module.css'; // Ensure proper importing of CSS module

const JobCard = ({ title, imageUrl, buttonText }) => {
    return (
        <div className={styles.jobCard}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.button} onClick={() => alert("Applied!")}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default JobCard;

