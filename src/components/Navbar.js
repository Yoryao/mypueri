import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-success navbar-warning">
      <div className="container">
        <NavLink className="btn btn-warning" to="/">Inicio</NavLink>
        <NavLink className="btn btn-warning" to="/contacto">Contacto</NavLink>
        <NavLink className="btn btn-warning" to="/formacion">Formacion</NavLink>
        <NavLink className="btn btn-warning" to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
