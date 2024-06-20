import './Form.css';
const Form = ({ id }) => {
  return (
      <form id={id} class="contact-form">
                  <input type="text" id="name" name="name" placeholder='Name'/>
                  <input type="text" id="email" name="email" placeholder='Email'/><br/>
                  <input type="text" id="message" name="message" placeholder='Message'/>
      </form>
  )
}

export default Form
