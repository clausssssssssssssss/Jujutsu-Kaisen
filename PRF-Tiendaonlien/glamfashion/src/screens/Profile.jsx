<section className="profile">
  <div style={{ display: 'flex' }}>
    <div style={{ width: '50%' }}>
      <img src="/avatar-placeholder.png" alt="Avatar" style={{ width: '150px', borderRadius: '50%' }} />
      <h2>Claudia Ortega</h2>
    </div>
    <img src="/products/look6.jpg" alt="Profile background" style={{ width: '50%' }} />
  </div>

  <div className="favorites">
    <h3>Mis Favoritos</h3>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ProductCard image="/products/look1.jpg" title="Vestido Glam" price="80" />
      <ProductCard image="/products/look5.jpg" title="Vestido Rosa" price="120" />
    </div>
  </div>
</section>
