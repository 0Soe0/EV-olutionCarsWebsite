import './Contact.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending message...');
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success('Message sent successfully', { duration: 2000 });
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  }
  return (
    <>
      <Navbar />
      <div className='contact-container fade-in'>
        <div className='contact-content'>
          <h1>Contact Us</h1>
          <p>Please fill out the form below to contact us</p>
          <form action="" className='contact-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder='Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <label htmlFor="message">Message</label>
            <textarea 
              placeholder='Message' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}