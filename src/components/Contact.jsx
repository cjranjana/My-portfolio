

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    if (name && email && message) {
      setIsSending(true);

      // Send email using EmailJS
      emailjs
        .sendForm('service_9507dj4', 'template_a6uob5w', e.target, 'WK1QEhgDvjwuT2qko')
        .then(() => {
          setIsSent(true);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleFormSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='to_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='from_name'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type='submit'
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
          disabled={isSending || isSent}
        >
          {isSending ? 'Sending...' : isSent ? 'Sent!' : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
