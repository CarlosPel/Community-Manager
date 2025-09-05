export const SignupScreen = () => {
  return (
    <div>
      <h1>Registro</h1>

      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellidos" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="tel" placeholder="Número de teléfono" />
      <input type="password" placeholder="Contraseña" />
      <input type="password" placeholder="Confirmar contraseña" />

      <button>Registrarse</button>
    </div>
  );
}