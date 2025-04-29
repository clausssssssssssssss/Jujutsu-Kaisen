import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './screens/Home'
import Categories from './screens/Categories'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import Cart from './screens/Cart'
import Payment from './screens/Payment'
import Terms from './screens/Terms'
import Abouts from './screens/Abouts'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/abouts" element={<Abouts />} />
      </Routes>
    </>
  )
}

export default App
