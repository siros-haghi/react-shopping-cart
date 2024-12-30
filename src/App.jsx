import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { CartProvider } from './context/CartContext'

import Navbar from './components/Navbar'
import Shop from './pages/Shop'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
