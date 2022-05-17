import '../App.css';

export default function Entrada(props) {
  return ( 
    <article className={props.fondo === 'hauche' ? 'entrada entrada-hauche' : props.fondo === 'copetti' ? 'entrada entrada-copetti' : props.fondo === 'gago' ? 'entrada entrada-gago' : 'entrada'}>
      <h2>{props.titulo}</h2>
    </article>
    
  );
}