import '../styles/Header.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={require(`../img/escudo.png`)} />
      </Link>
      <nav>
        <Link className="link" to='/'>actualidad</Link>
        <Link className="link" to='jugadores'>jugadores</Link>
        <Link className="link" to='proximo-partido'>proximo partido</Link>
      </nav>
    </header>
  );
}