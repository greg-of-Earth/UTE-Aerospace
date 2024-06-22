import co_leader from '../assets/co_leader.png';
import no_image from '../assets/no_image.png';
import { Link } from 'react-router-dom';
import coLeaderStyles from './CompanyLeaders.module.css';

const CompanyLeaders = () => {
  return (
      <>
        <header id='head'> 
          <h1>Company Leadership</h1>
          <img src={co_leader} alt="company leadership" style={{width: '100%'}}></img>
        </header>
        <div className={coLeaderStyles['leader-container']}>
          <figure className={coLeaderStyles['leader-card']}>
            <img className={coLeaderStyles['leader-image']} src={no_image} alt='leader' style={{
            width: '25%'}}/>
            <figcaption className={coLeaderStyles.caption}>
              <h2>Daniel Mayes</h2>
              <span style={{display: 'block'}}>Owner/Manager</span>
              <span style={{display: 'block'}}>daniel@uteaerospace.com</span>
              <Link className={coLeaderStyles['bio-link']} to='/leaders'><br></br>Read Bio</Link>
            </figcaption>
          </figure>

          <figure className={coLeaderStyles['leader-card']}>
            <img className="leader-image" src={no_image} alt='leader' style={{
            width: '25%', height: 'auto'}}/>
            <figcaption className={coLeaderStyles.caption}>
              <h2>Pete Calderon</h2>
              <span style={{display: 'block'}}>Co-Owner/IPT Lead</span>
              <span style={{display: 'block'}}>pete@uteaerospace.com</span>
              <Link className={coLeaderStyles['bio-link']} to='/Leaders'><br></br>Read Bio</Link>
            </figcaption>
          </figure>
        </div>
      </>
  )
}

export default CompanyLeaders




