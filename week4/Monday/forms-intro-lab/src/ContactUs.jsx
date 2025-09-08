import {useState} from 'react'




function ContactUs() {


    const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
  

        // Create a new object for the contact information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
        // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  
  };



    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType ] = useState('')
    const [comments, setComments] = useState('')

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' value={phone} onChange={e => setPhone(e.target.value)} />
        
          <select name='phoneType' onChange={e => setPhoneType(e.target.value)}
            value={phoneType}>
    
    <option value='' disabled>
      Select a phone type...
    </option>
    <option>Home</option>
    <option>Work</option>
    <option>Mobile</option>
  </select>

        <textarea>This is the value for the text area element.</textarea>
        
        // src/ContactUs.jsxx

<div>
  <label htmlFor='comments'>Comments:</label>
  <textarea
    id='comments'
    name='comments'
    onChange={e => setComments(e.target.value)}
    value={comments}
  />
</div>
        
        
        
        
        
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;