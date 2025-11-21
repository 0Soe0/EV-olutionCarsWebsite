import './NotFound.css';
import { Navbar } from '../../components/Navbar/Navbar';
import car7 from '../../assets/car7.png';

export const NotFound = () => {
  return (
    <>
      <Navbar />
    <div>
      <img src={car7} alt="can driving into the distance" className='background' />
      <div className='not-found-content'>
        <span>404</span>
        <h1> Not found, like you could be, driving into the distance</h1>
        <p>Take a break, explore the posibilities</p>
      </div>
    </div>
    </>
  )
}