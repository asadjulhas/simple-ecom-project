import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Shop/Shop';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Orders />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;