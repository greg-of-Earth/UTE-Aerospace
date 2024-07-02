import profileStyles from './ProfileCard.module.css'; 

function ProfileCard({ profile }) {
  return (
    <section className={profileStyles['profile-card']}>
      <h2>{profile.title}</h2>
      <div className={profileStyles.figArticle}>
        <figure className='leaderFigs'>
        <h3>{profile.name}</h3>
          <img src={profile.image} alt={profile.name} />
        
          <button 
            onClick={() => window.open("https://www.linkedin.com/in/your-linkedin-id", "_blank")}
            className={profileStyles['linkedin-button']}>
            LinkedIn
          </button>
        </figure>
        
        <article className={profileStyles['content']}>

          
          {profile.bio.split('\n').map((line, index) => ( 
            <p key={index}>{line}</p>
          ))}

        </article>
      </div>
    </section>
  );
}

export default ProfileCard;

