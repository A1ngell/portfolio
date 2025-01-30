import '../styles/Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {

  return (
    <nav className='navbar' id='navbar'>
        <h2>{"{"}A1ngell{"}"}</h2>
        <ul className='nav-list'>
        <Link to="title-proyects" smooth={true} duration={500}>
            <li><a href="#cards"></a>Proyectos</li>
        </Link>

        <Link to="skills" smooth={true} duration={1000}>
          <li><a href="#"></a>Habilidades</li>
        </Link>

        <Link to="Aboutme" smooth={true} duration={1500}>
          <li><a href="#"></a>Educacion</li>
        </Link>
        </ul>

        <Link to="Contact" smooth={true} duration={1500}>
          <button>Contactar</button>
        </Link>
    </nav>
  );
}

export default Navbar;