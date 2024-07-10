import React from 'react';
import formStyles from './styles/Form.module.css';

const Form = ({ id }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost/submit.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data)
            });

            const result = await response.json();
            alert(result.message);  // Display the PHP response message
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <form id={id} className={formStyles['contact-form']} onSubmit={handleSubmit}>
            <h4 style={{font:'20pt bolder', margin:'10px'}}>Request More Information</h4>
            <input type="text" id="name" name="name" placeholder='Name' required/>
            <input type="text" id="email" name="email" placeholder='Email' required/><br/>
            <label htmlFor="reason">Select Reason For Contacting</label><br/>
            <select id="reason" name="reason" defaultValue='' required>
                <option value="" disabled>Select</option>
                <option value="Job Opportunity">Customer Questions</option>
                <option value="Interview Request">Employment Inquiry</option>
                <option value="Research Opportunity">Investor Relations</option>
                <option value="New Friend">Partnership Inquiry</option>
            </select>
            <input type="text" name="message" placeholder='Message'/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
