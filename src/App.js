import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Shop/Shop';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />

        <Route path='/order' element={
          <RequireAuth>
        <Orders />
        </RequireAuth>
        } />

        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;