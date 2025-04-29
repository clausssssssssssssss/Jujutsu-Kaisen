function Payment() {
    return (
      <section className="payment">
        <h1>Detalles de Pago</h1>
  
        <div className="details">
          <p><strong>Dirección de Envío:</strong> Ricaldone</p>
          <p><strong>Teléfono:</strong> 82383859</p>
          <p><strong>Total:</strong> $189.99</p>
        </div>
  
        <div className="payment-methods">
          <p><strong>Método de Pago:</strong> Tarjeta de Crédito (•••• 7830)</p>
        </div>
  
        <button style={{ marginTop: '2rem' }}>Pagar</button>
      </section>
    )
  }
  
  export default Payment
  