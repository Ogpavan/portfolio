import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero1 from './pages/Home/Hero1';
import About from './pages/About/About';
import Work from './pages/Works/Work';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Blogs from './pages/Blogs/Blogs';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 1 second to switch from loading to loaded
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className=''><Loader/></div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero1 />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs/>} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
