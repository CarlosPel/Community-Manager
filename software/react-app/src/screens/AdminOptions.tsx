import { Link } from "react-router-dom";

export const AdminOptions = () => {
  return (
    <div>
      <h1>Opciones de Administrador</h1>
      <Link to="/NewAnnouncement">Nuevo Comunicado</Link>
      <Link to="/admin/users">Gestionar Usuarios</Link>
      <Link to="/admin/announcements">Gestionar Comunicados</Link>
      <Link to="/admin/reports">Ver Reportes</Link>
    </div>
  );
};
