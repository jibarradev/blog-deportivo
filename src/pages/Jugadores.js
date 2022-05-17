import Jugador from '../components/Jugador';
import '../App.css';
import jugadoresJson from '../Jugadores.json';

export default function Jugadores() {

  let jugadores = jugadoresJson;

  return (
    <div className='jugadores'>
      {jugadores.map(jugador => 
        <Jugador 
          imagen={jugador.imagen}
          nombre={jugador.nombre}
          posicion={jugador.posicion}
        />
      )}
    </div>
  );
}