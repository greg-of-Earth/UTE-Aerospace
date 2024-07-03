import { Link } from 'react-router-dom';
import contactStyles from './styles/Contact.module.css'; 
import Form from '../components/Form';
import contact from '../assets/contact.png';
import { ReactComponent as PhoneIcon } from '../assets/phone.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';


const Contact = () => {
    const hrEmail = "HR@uteaerospace.com";
    // const investorEmail = "Investors@uteaerospace.com";
    // const itEmail = "IT@uteaerospace.com";
    // const customerEmail = "Customers@uteaerospace.com";
    const phone = "1-307-677-2964";

const call = () => {
    window.location.href = 'tel: +1-307-677-2964';
}

const email = () => {
    const subject = 'General Inquiry';
    const body = 'Hello, I am reaching out to discuss..\n\n';

    const emailLink = `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = emailLink;
}

    return ( 
        <>
            <header>
                <img id={contactStyles["contact-image"]} src={contact} alt="Contact header"></img>
                <section className={contactStyles['top-logos']}>
                    <a id={contactStyles.contact} href='#contact-form'>Contact Us</a>
               
                    <PhoneIcon id='phoneIcon' className={contactStyles["contact-icon"]} style={{backgroundColor: 'transparent'}} onClick={call} />
                    <EmailIcon id='emailIcon' className={contactStyles["contact-icon"]} onClick={email}/>
        
                </section>
            </header>
            <div id={contactStyles.description}>
                <h2>We are eager to connect with you. </h2>
                <table id={contactStyles['contact-table']}>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th className={contactStyles.right}>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td className={contactStyles.left}>Investors</td>
                            <td className={contactStyles.right}>
                                <a href={`mailto:${investorEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to learn more about investing in UTE Aerospace.")}`}>{investorEmail}</a>
                            </td>
                        </tr> */}
                        <tr>
                            <td className={contactStyles.left}>Human Resources</td>
                            <td className={contactStyles.right}>
                                <Link to="#" onClick={email}>{hrEmail} </Link>

                                {/* <a onClick={email} href={`mailto:${hrEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Human Resources specialist.")}`}>{hrEmail}</a> */}
                            </td>
                        </tr>
                        {/* <tr>
                            <td className={contactStyles.left}>IT & Website</td>
                            <td className={contactStyles.right}><a href={`mailto:${itEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a IT specialist.")}`}>{itEmail}</a></td>
                        </tr> */}
                        {/* <tr>
                            <td id={contactStyles.left}>Customer Inquiries</td>
                            <td className={contactStyles.right}><a href={`mailto:${customerEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Customer Service specialist.")}`}>{customerEmail}</a></td>
                        </tr> */}
                        <tr>
                            <td id={contactStyles.left}>Phone</td>
                            <td className={contactStyles.right}>
                                <a href={`tel:${phone}`}>{phone}</a>
                        </td>
                        </tr>
                    </tbody>    
                </table>
            </div>
            <Form id='contact-form'/>
        </>
    )
}

export default Contact