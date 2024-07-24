import co_leader from '../assets/co_leader.png';
import { Link } from 'react-router-dom';
import coLeaderStyles from './styles/CompanyLeaders.module.css';
import Pete from '../assets/Pete.png';
import Dan from '../assets/Dane.png';
import Header from '../components/Header';
import HeaderImg from '../components/HeaderImg';
import HeaderTitle from '../components/HeaderTitle';


const CompanyLeaders = () => {
  const peteEmail = "pete@uteaerospace.com";
  const daneEmail = "daniel@uteaerospace.com";
  
  const email = () => {
      const subject = 'General Inquiry';
      const body = 'Hello, I am reaching out to discuss..\n\n';

      const emailLink = `mailto:${daneEmail} mailto:${peteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = emailLink;
  }

  return (
      <>
      <Header>
        <HeaderImg src={co_leader} />
        <HeaderTitle headTitle="Company Leadership" color="white" style={{top: '30%'}}/>
      </Header>

        <div className={coLeaderStyles['leader-container']}>
          <figure className={coLeaderStyles['leader-card']}>
            <img className={coLeaderStyles['leader-image']} src={Dan} alt='leader' style={{
            width: '100%', height: '250px'}}/>
            <figcaption className={coLeaderStyles.caption}>
              <h2>Daniel Mayes</h2>
              <span style={{display: 'block', marginBottom: '10px'}}>Owner/Manager</span>
              
              <span style={{display: 'block',  cursor: 'pointer', color: 'blue', textDecoration: 'underline'}} onClick={() => email(daneEmail)}>daniel@uteaerospace.com</span>
              <Link className={coLeaderStyles['bio-link']} to='/leaders/0'><br></br>Read Bio</Link>
            </figcaption>
          </figure>

          <figure className={coLeaderStyles['leader-card']}>
            <img className="leader-image" src={Pete} alt='leader' style={{
            width: '100%', height: '250px'}}/>
            <figcaption className={coLeaderStyles.caption}>
              <h2>Pete Calderon</h2>
              <span style={{display: 'block', marginBottom: '10px'}}>Co-Owner/IPT Lead</span>
              <span style={{display: 'block', cursor: 'pointer', color: 'blue', textDecoration: 'underline'}} onClick={() => email(peteEmail)}>pete@uteaerospace.com</span>
              <Link className={coLeaderStyles['bio-link']} to='/leaders/1' ><br></br>Read Bio</Link>
            </figcaption>
          </figure>
        </div>
      </>
  )
}

export default CompanyLeaders




