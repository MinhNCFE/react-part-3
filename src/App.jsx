
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListProduct from './components/ListProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/ProductDetail';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
