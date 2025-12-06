import './App.css'
 import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';

function App() {
  
  return (
    <>
  <Routes>
     <Route path="/" element={<RootLayout />} />
     <Route index element={<Home />} />
     <Route path="/shop" element={<Shop />} />
     <Route path="/about" element={<About />} />
     <Route path="/contacts" element={<Contacts />} />
  </Routes>
  </>
  )
}

export default App
