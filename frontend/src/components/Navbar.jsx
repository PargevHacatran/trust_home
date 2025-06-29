import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.svg'; // предполагается, что ты конвертируешь PDF в SVG или PNG


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="ТрастДом" className="navbar-logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/about">О платформе</Link></li>
          <li><Link to="/find">Найти жильё</Link></li>
        </ul>
      </div>
      <div className="navbar-auth">
        <button className="login"><Link to="login">Войти</Link> </button>
        <button className="register"> <Link to='signin'> Регистрация</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;
