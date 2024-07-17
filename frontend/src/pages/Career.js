import React from 'react';
import JobCard from '../components/JobCard';
import styles from './styles/Career.module.css';

// Import images directly
import careerImage from '../assets/career.png'; // Adjust image paths as needed
import mechanicalImage from '../assets/career.png'; // Make sure this is the correct path
import softwareImage from '../assets/career.png'; // Make sure this is the correct path

const cardData = [
    {
        title: 'Aerospace Engineer',
        imageUrl: careerImage,  // Refer to imported image variable
    },
    {
        title: 'Mechanical Engineer',
        imageUrl: mechanicalImage,  // Refer to imported image variable
    },
    {
        title: 'Software Developer',
        imageUrl: softwareImage,  // Refer to imported image variable
    },
    // Add more job cards as needed
    {
        title: 'Electrical Engineer',
        imageUrl: careerImage,  // Example addition
    },
    {
        title: 'Structural Engineer',
        imageUrl: mechanicalImage,  // Example addition
    },
    {
        title: 'Cyber Security',
        imageUrl: softwareImage,  // Example addition
    }
];

const Career = () => {
    return (
        <div className= {styles.career}>
            {cardData.map((data, index) => (
                <JobCard
                    key={index}
                    title={data.title}
                    imageUrl={data.imageUrl}
                    buttonText="Apply Now"
                />
            ))}
        </div>
    );
}

export default Career;

