import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ViewDetails from './Pages/ViewDetails'
import Apple from './Pages/Apple'
import Computer from './Pages/Computer'
import Kitchen from './Pages/Kitchen'
import BestSales from './Pages/BestSales'
import Watch from './Pages/Watch'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ViewCart from './Pages/ViewCart'
import OrderHistory from './Pages/OrderHistory'
import CheckOutPage from './Pages/CheckOutPage'
import BottomNav from './Components/BottomNav'
import CartSidebar from './Components/CartSidebar'



function App() {

  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact/>} ></Route> 
        <Route path='/login' element={<Login/>} ></Route> 
        <Route path='/register' element={<Register/>} ></Route> 
        <Route path='/viewDetails/:id' element={<ViewDetails />} ></Route> 
        <Route path='/apple' element={<Apple />} ></Route> 
        <Route path='/computer' element={<Computer />} ></Route> 
        <Route path='/kitchen' element={<Kitchen />} ></Route> 
        <Route path='/watch' element={<Watch />} ></Route> 
        <Route path='/bestsales' element={<BestSales />} ></Route>
        <Route path='/viewcart' element={<ViewCart />} ></Route> 
        <Route path='/orderhistory' element={<OrderHistory />} ></Route> 
        <Route path='/cartsidebar' element={<CartSidebar />} ></Route> 
        <Route path='/checkoutpage' element={<CheckOutPage />} ></Route> 


      </Routes>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BottomNav/>
      <Footer />
    </div>
  )
}

export default App
