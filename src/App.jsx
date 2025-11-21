import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Explore } from './pages/Explore/Explore';
import { NotFound } from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}