import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import styles from './styles/Career.module.css';

// Import images directly
import careerImage from '../assets/career.png'; // Adjust image paths as needed
import mechanicalImage from '../assets/career.png'; // Make sure this is the correct path
import softwareImage from '../assets/career.png'; // Make sure this is the correct path

const cardData = [
    {
        title: 'Aerospace Engineer',
        imageUrl: careerImage,
        link: '/underConstruction' // Future custom link
    },
    {
        title: 'Mechanical Engineer',
        imageUrl: mechanicalImage,
        link: '/underConstruction' // Future custom link
    },
    {
        title: 'Software Developer',
        imageUrl: softwareImage,
        link: '/underConstruction' // Future custom link
    },
    // Add more job cards as needed
    {
        title: 'Electrical Engineer',
        imageUrl: careerImage,
        link: '/underConstruction' // Example addition
    },
    {
        title: 'Structural Engineer',
        imageUrl: mechanicalImage,
        link: '/underConstruction' // Example addition
    },
    {
        title: 'Cyber Security',
        imageUrl: softwareImage,
        link: '/underConstruction' // Example addition
    }
];

const Career = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.career}>
            {cardData.map((data, index) => (
                <JobCard
                    key={index}
                    title={data.title}
                    imageUrl={data.imageUrl}
                    buttonText="Apply Now"
                    onClick={() => navigate(data.link)}
                />
            ))}
        </div>
    );
}

export default Career;
