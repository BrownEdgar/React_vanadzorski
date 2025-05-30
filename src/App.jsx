import './App.scss';
import { Outlet } from 'react-router';
import Navbar from '@c/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { getAllActions } from '@f/products/productsSlice';
import { useEffect } from 'react';
import { getAllfeatured } from '@f/featured/featuredSlice';
import Footer from '@c/Footer/Footer';

function App() {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(getAllActions());
    dipatch(getAllfeatured());
  }, [dipatch]);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
