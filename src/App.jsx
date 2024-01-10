 
import Home from './pages/Home.jsx' 
import About from './pages/About.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Checkout from './pages/Checkout.jsx'
import Contact from './pages/Contact.jsx'
import Policies from './pages/Policies.jsx'
import Wholesale from './pages/Wholesale.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/all-products' element={<AllProducts/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policies' element={<Policies/>}/>
        <Route path='/wholesale' element={<Wholesale/>}/>


      </Routes>
      
    </>
  );
}

export default App;
