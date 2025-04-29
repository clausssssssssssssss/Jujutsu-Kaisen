import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside>
      <h3>CATEGORÍAS</h3>
      <ul>
        <li><Link to="/categories">Vestidos</Link></li>
        <li><Link to="/categories">Faldas</Link></li>
        <li><Link to="/categories">Tops</Link></li>
        <li><Link to="/categories">Jeans</Link></li>
        <li><Link to="/categories">Camisetas</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
