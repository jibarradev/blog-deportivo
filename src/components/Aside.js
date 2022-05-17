import { Link } from 'react-router-dom';
import '../App.css';
import EntradaAside from './EntradaAside';

export default function Aside() {
  return (
    <aside>
      <Link className='link' to='un-futbol-que-enamora'>
        <EntradaAside imagen='copetti-aldosivi.jpg' titulo='Un fútbol que enamora' texto='Racing goleó 5-0 a Aldosivi, al que dominó de principio a fin con un juego sobresaliente. Carlos Alcaraz y Enzo Copetti, los dos por duplicado, más Javier Correa convirtieron para llevar al equipo de la semifinales de la Copa de la LPF.' />
      </Link>

      <Link className='link' to='siempre-protagonistas'>
        <EntradaAside imagen='ser-protagonistas.jpg' titulo='"Salió todo lo planeado"' texto='Fernando Gago afirmó, en conferencia de prensa, que "salió todo lo que habíamos trabajado. Tenemos una idea de juego y tratamos de demostrarla en cada partido".' />
      </Link>

      <Link className='link' to='socios-eternos'>
        <EntradaAside imagen='socios.jpg' titulo='Socios eternos, una puesta en palabras e imágenes' texto='"Socios eternos" es el nuevo libro de Julián Scher, sobre las vivencias de los núcleos afectivos de socios de Racing que desaparecieron durante la dictadura que sufrió la Argentina' />
      </Link>

    </aside>
  );
}