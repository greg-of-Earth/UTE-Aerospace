import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard'; 
import Pete from '../assets/Pete.JPG';
import Dan from '../assets/Dan.jpg';

const profiles = [
  {
    name: 'Daniel Mayes',
    image: Dan,
    title: 'Owner/ Manager',
    bio: 'My belief is that engineering is a way to change the world. After getting my Bachelor of Science degree in Mechanical Engineering, and my Master of Science degree in Chemical Engineering, my professional journey officially began. \n\n A significant portion of my career was the 14 years working at NASA. In particular, for  power systems, space suit life support, and propulsion programs: Space Shuttle, International Space Station Freedom, X-plane, and Orion, as a team leader. After leaving NASA, another 12 years were spent in water treatment, renewable gas, and Liquified Natural Gas and Compressed Natural Gas in the energy industry, which was also a noteworthy part of my career. \n\n Through the different ventures mentioned, and the many I have not included as a consultant, I have learned the importance of engineering and how it is used for the betterment of technology, people, and the world. This led to the launch of UTE Aerospace.',
    linkedin: 'https://www.linkedin.com/in/another-linkedin-id'
  },
  {
    name: 'Pete Calderon',
    image: Pete,
    title: 'Co-Owner/ IPT Lead',
    bio: 'Engineering is a way to change the world. Through the transition from pure science to finding a customer\'s need and creating a solution, the possibilities are limitless. \n\n My story begins when I graduated from Texas A&M University with a Bachelor of Science specializing in Aerospace Engineering. My first position after college was at Rocketdyne, working on the space shuttle main engines, designing components for the Space Station Freedom, and supporting tests for Atlas and Delta rockets. Other noteworthy companies I worked with were Boeing, Eaton, Honeywell, Siemens, Blue Origin, Collins Aerospace, and Northrop Grumman. \n\n After working for these firms, I wish to leverage my knowledge of best practices to lead a creative company that focuses on making work enjoyable, while also pushing technological limits. This is why my business partner and I started UTE Aerospace.',
    linkedin: 'https://www.linkedin.com/in/another-linkedin-id'
  }
];

function LeadersProfile() {
  const { profileId } = useParams();
  const profile = profiles[profileId]
  return (
    <>   
      {profile ? <ProfileCard profile={profile} /> : <p>Profile not found</p>} 
    </>
  );
}

export default LeadersProfile;
