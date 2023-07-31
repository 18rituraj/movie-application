import React from 'react'

function Contact() {
  return (
    <div className='contact'>
    <main>
  <h1>Contact Us</h1>
  <form>

    <div>
      <label>name</label>
      <input type="text" required placeholder='ABC'></input>
    </div>

    
    <div>
      <label>email</label>
      <input type="email" required placeholder='ABC@gmail.com'></input>
    </div>

    
    <div>
      <label>Message</label>
      <input type="text" required placeholder='Tell us about your query...'></input>
    </div>

    <button type='submit' >Send</button>


  </form>
    </main>
    
    </div>
  )
}

export default Contact