
import './ProfileCard.css'; 
import no_image from '../assets/no_image.png';

function ProfileCard() {
  return (
    <div className="profile-card">
      <header>Daniel Mayes</header>
      <article>
        <figure>
          <img src={no_image} alt="Daniel Mayes" />
          
          <button 
            onClick={() => window.open("https://www.linkedin.com/in/your-linkedin-id", "_blank")}
            className="linkedin-button">
            LinkedIn
          </button>
        </figure>
        
        <div className="content">
          <figcaption>Owner/Manager</figcaption>
          <p>Daniel Mayes has served in multiple foreign policy positions both in the U.S. and abroad...</p>
          <p>Loving flying is akin to embracing the freedom of the skies...</p>
          <p>Daniel finished a Bachelor's degree major in Artificial Intelligence from Massachusetts Institute of Technology...</p>
        </div>
      </article>
    </div>
  );
}

export default ProfileCard;

