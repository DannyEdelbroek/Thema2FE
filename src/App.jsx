import Navbar from './main/navbar';
import Footer from './main/Footer';
import Notfound from  './main/NotFound'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
