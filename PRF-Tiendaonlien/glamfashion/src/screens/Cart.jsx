import ProductCard from '../components/ProductCard'

function Cart() {
  return (
    <section className="cart">
      <h1>Carrito de Compras</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <ProductCard image="/products/vestido1.jpg" title="Vestido Rojo" price="40" />
        <ProductCard image="/products/falda1.jpg" title="Falda Negra" price="25" />
        <ProductCard image="/products/top1.jpg" title="Top Elegante" price="35" />
      </div>
      <button style={{ marginTop: '2rem' }}>Ir a pagar</button>
    </section>
  )
}

export default Cart
