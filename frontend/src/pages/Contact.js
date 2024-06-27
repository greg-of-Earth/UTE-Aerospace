

import contactStyles from './Contact.module.css'; // Import your CSS file if needed
import Form from '../components/Form';
import contact from '../assets/contact.png'


const Contact = () => {
    const hrEmail = "HR@uteaerospace.com";
    const investorEmail = "Investors@uteaerospace.com";
    const itEmail = "IT@uteaerospace.com";
    const customerEmail = "Customers@uteaerospace.com";
    const phone = "307-677-2964";

    return ( 
        <>
            <header>
                <img src={contact} alt="Contact header"></img>
                <a id={contactStyles.contact} href='#contact-form'>Contact Us</a>
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
                        <tr>
                            <td className={contactStyles.left}>Investors</td>
                            <td className={contactStyles.right}>
                                <a href={`mailto:${investorEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to learn more about investing in UTE Aerospace.")}`}>{investorEmail}</a>
                            </td>
                        </tr>
                        <tr>
                            <td className={contactStyles.left}>Human Resources</td>
                            <td className={contactStyles.right}>
                                <a href={`mailto:${hrEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Human Resources specialist.")}`}>{hrEmail}</a>
                            </td>
                        </tr>
                        <tr>
                            <td className={contactStyles.left}>IT & Website</td>
                            <td className={contactStyles.right}><a href={`mailto:${itEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a IT specialist.")}`}>{itEmail}</a></td>
                        </tr>
                        <tr>
                            <td id={contactStyles.left}>Customer Inquiries</td>
                            <td className={contactStyles.right}><a href={`mailto:${customerEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Customer Service specialist.")}`}>{customerEmail}</a></td>
                        </tr>
                        <tr>
                            <td id={contactStyles.left}>Phone number</td>
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