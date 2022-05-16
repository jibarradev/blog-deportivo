import '../styles/Articulo.css';

export default function Articulo(props) {
	return (
		<div className='articulo'>
			<div className='articulo-contenedor'>
				<h2 className='titulo-principal'>{props.tituloArticulo}</h2>
				<img src={require(`../img/${props.imagenArticulo}`)} />
				<p>{props.parrafoArticuloUno}</p>
				<p>{props.parrafoArticuloDos}</p>
				<h2>{props.tituloArticuloDos}</h2>
				<p>{props.parrafoArticuloTres}</p>
				<p>{props.parrafoArticuloCuatro}</p>
			</div>
		</div>
	);
}