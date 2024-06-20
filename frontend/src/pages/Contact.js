import React from 'react'
import './Contact.css'; // Import your CSS file if needed
import Form from '../components/Form';


const Contact = () => {
    return ( 
        <>
            <header>
                <img src='../contact.png' alt="image of input output devices"></img>
                <a id="contact" href='.contact-form'>Contact Us</a>
            </header>
            <div id="description">
                <h2>We are eager to connect with you. </h2>
                <table>
                    <tr>
                        <th>Department:</th>
                        <th>Contact:</th>
                    </tr>
                    <tr>
                        <td id='left'>Investors</td>
                        <td>Investors@uteaerospace.com</td>
                    </tr>
                    <tr>
                        <td id='left'>Human Resources</td>
                        <td>HR@uteaerospace.com</td>
                    </tr>
                    <tr>
                        <td id='left'>IT & Website</td>
                        <td>IT@uteaerospace.com</td>
                    </tr>
                    <tr>
                        <td id='left'>Customer Inquiries</td>
                        <td>Customers@uteaerospace.com</td>
                    </tr>
                    <tr>
                        <td id='left'>Phone number</td>
                        <td>307-677-2964</td>
                    </tr>
                </table>

            </div>
            <div class="request">
                <p style={{font:'18pt'}}><h4 style={{font:'20pt bolder', margin:'0'}}>Request More Information</h4><br/>Please fill out the information  to set up a detailed consultation session with our knowledgeable experts. This will allow us to better understand your needs and offer tailored solutions.</p>

                <Form />

            </div>
    
        </>
    )
}

export default Contact