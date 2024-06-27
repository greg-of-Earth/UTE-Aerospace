import formStyles from './Form.module.css';
const Form = ({ id }) => {
  return (
      <form id={id} className={formStyles['contact-form']}>
        <h4 style={{font:'20pt bolder', margin:'10px'}}>Request More Information</h4>
          <input type="text" id="name" name="name" placeholder='Name' required/>
          <input type="text" id="email" name="email" placeholder='Email' required/><br/>
          <label for="Select Reason">Select Reason For Contacting</label><br/>
            <select id="reason" name="reason" defaultValue='' required>
                <option value="" disabled>Select</option>
                <option value="Job Opportunity">Customer Questions</option>
                <option value="Interview Request">Emloyment Inquiry</option>
                <option value="Research Opportunity">Investor Relations</option>
                <option value="New Friend">Partnership Inquiry</option>
            </select>
          <input type="text" id={formStyles.message} name="message" placeholder='Message'/>
          <button>Submit</button>
      </form>
  )
}

export default Form
