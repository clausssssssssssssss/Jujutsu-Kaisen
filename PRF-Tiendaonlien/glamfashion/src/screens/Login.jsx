function Login() {
    return (
      <section className="login">
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <h1>Inicia sesión</h1>
          <form>
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
        <img src="/img/img4Glam.jpg" alt="Login background" style={{ width: '50%' }} />
      </div>
    </section>
    )
  }

  
  export default Login
  