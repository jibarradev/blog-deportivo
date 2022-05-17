import '../App.css';

export default function EntradaAside(props) {
  return (
    <div className='entrada-aside'>
      <img src={require(`../img/${props.imagen}`)}/>
      <div className='entrada-aside-texto'>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}