import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>EV-olution</div>
        <ul className='nav-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/explore'>Explore</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li className='nav-contact'><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}