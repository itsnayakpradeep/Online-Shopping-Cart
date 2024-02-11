import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Products from './components/products/product';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
