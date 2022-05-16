import '../styles/Jugadores.css';

export default function Jugador(props) {
  return (
    <div className='jugador'>
      <img src={require(`../img-jugadores/${props.imagen}.jpg`)} />
      <div className='jugador-texto'>
        <h2>{props.nombre}</h2>
        <p>{props.posicion}</p>
      </div>
    </div>
  );
}