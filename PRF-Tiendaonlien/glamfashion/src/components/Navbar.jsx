import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">GLAMFASHION</Link>

      <div>
        <Link to="/categories">Categorías</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  )
}

export default Navbar
