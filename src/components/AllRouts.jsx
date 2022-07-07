import Products from './products/Products';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contacts from './Contacts';
import Users from './Users';
import UserPage from './UserPage';
export default function AllRouts() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/about'} element={<About />}></Route>
      <Route path={'/products/:id'} element={<Products />}></Route>
      <Route path={'/users'} element={<Users />}></Route>
      <Route path={'/users/:users_id'} element={<UserPage />}></Route>
      <Route path={'/contacts'} element={<Contacts />}></Route>
      
    </Routes>
  );
}
