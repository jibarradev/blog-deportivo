import '../App.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={require(`../img/escudo.png`)} />
      </Link>
      <nav>
        <Link className="link elemento-header" to='/'>actualidad</Link>
        <Link className="link elemento-header" to='jugadores'>jugadores</Link>
        <Link className="link elemento-header" to='proximo-partido'>proximo partido</Link>
      </nav>
    </header>
  );
}