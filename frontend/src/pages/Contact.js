
import './Contact.css'; // Import your CSS file if needed
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
                <a id='contact' href='#contact-form'>Contact Us</a>
            </header>
            <div id="description">
                <h2>We are eager to connect with you. </h2>
                <table id='contact-table'>
                    <tr>
                        <th>Department</th>
                        <th className='right'>Contact</th>
                    </tr>
                    <tr>
                        <td id='left'>Investors</td>
                        <td className='right'>
                            <a href={`mailto:${investorEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to learn more about investing in UTE Aerospace.")}`}>{investorEmail}</a>
                        </td>
                    </tr>
                    <tr>
                        <td id='left'>Human Resources</td>
                        <td className='right'>
                            <a href={`mailto:${hrEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Human Resources specialist.")}`}>{hrEmail}</a>
                        </td>
                    </tr>
                    <tr>
                        <td id='left'>IT & Website</td>
                        <td className='right'><a href={`mailto:${itEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a IT specialist.")}`}>{itEmail}</a></td>
                    </tr>
                    <tr>
                        <td id='left'>Customer Inquiries</td>
                        <td className='right'><a href={`mailto:${customerEmail}?subject=${encodeURIComponent("Investment Inquiry")}&body=${encodeURIComponent("I would like to speak with a Customer Service specialist.")}`}>{customerEmail}</a></td>
                    </tr>
                    <tr>
                        <td id='left'>Phone number</td>
                        <td className='right'>
                            <a href={`tel:${phone}`}>{phone}</a>
                    </td>
                    </tr>
                </table>

            </div>
            <div class="request">
                <p style={{font:'18pt'}}><h4 style={{font:'20pt bolder', margin:'0'}}>Request More Information</h4><br/>Please fill out the information  to set up a detailed consultation session with our knowledgeable experts. This will allow us to better understand your needs and offer tailored solutions.</p>

                <Form id='contact-form'/>

            </div>
    
        </>
    )
}

export default Contact