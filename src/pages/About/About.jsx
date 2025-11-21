import './About.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <Navbar />
      <div className='about-container fade-in'>
        <div className='about-content'>
          <h1>Dare to drive into us and EV-olutionize your travel experience</h1>
          <p>At EV-olution, we don't just build electric vehicles—we engineer the next era of personal mobility. Founded on the belief that sustainable driving should never compromise on luxury, performance, or intelligence, our mission is to deliver vehicles that are a seamless extension of your life.

          From the driver-centric digital cockpit to our best-in-class cargo versatility and groundbreaking Smart View technology, every element is designed to enhance your journey. EV-olution is where innovation meets conscience, creating cars that are not only kinder to the planet but smarter, safer, and more exhilarating to drive. Join the EV-olution, and drive the change.</p>
          <span className='mission-span'>Our Mission, Your Journey</span>
          <Link to='/contact'><span className='question-span'>Do you dare to EV-olve and drive the change?</span></Link>
        </div>
      </div>
    </>
  )
}