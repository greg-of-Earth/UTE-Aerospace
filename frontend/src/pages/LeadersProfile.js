import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard'; 
import Pete from '../assets/Pete.JPG';
import Dan from '../assets/Dane.png';

const profiles = [
  {
    name: 'Daniel Mayes',
    image: Dan,
    title: 'Owner/ Manager',
    bio: 'My belief is that engineering is a profession which drives change and provides solutions to the modern challenges confronting society on a global scale. Upon completion of a Bachelor of Science degree in Mechanical Engineering, and a Master of Science degree in Chemical Engineering, my professional journey officially began.\n\n A significant portion of my career was the 14 years employed at NASA serving as a lead engineer in power systems and propulsion. I supported the Space Shuttle, International Space Station, X-38, and the Orion programs. Responsibilities included agency wide technical expert for batteries used in space suit life support equipment, payloads, experimental hardware, and test vehicles. Duties extended to the role of lead integration engineer for the Orion vehicle propulsion sub-system. Notably after leaving NASA, another 12 years were spent in water treatment, renewable gas, and Liquified Natural Gas and Compressed Natural Gas in the energy industry, which represents as a significant part of my career.',
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
