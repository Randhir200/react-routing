import './App.css';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/products/Products';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/products/:id'} element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
