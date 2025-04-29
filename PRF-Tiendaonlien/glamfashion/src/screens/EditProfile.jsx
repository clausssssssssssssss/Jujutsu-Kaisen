function EditProfile() {
    return (
      <section className="edit-profile">
        <h1>Editar Perfil</h1>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo" />
          <button type="submit">Actualizar</button>
        </form>
  
        <div className="payment-methods">
          <h3>Mis métodos de pago</h3>
          <p>•••• 1234 - Claudia Ortega</p>
          <button>Nuevo Método</button>
        </div>
      </section>
    )
  }
  
  export default EditProfile
  