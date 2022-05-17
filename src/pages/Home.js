import '../App.css';
import { Link } from "react-router-dom";
import Entrada from "../components/Entrada";
import Aside from '../components/Aside';


export default function Home() {
  return (
    <div className="home">
      <div className='home-entradas'>
        <Link className='link' to='copetti-heroe-frente-a-independiente'>
          <Entrada fondo='copetti' titulo='Copetti fué el heroe frente a Independiente' />
        </Link>
        <Link className='link' to='hauche-volvio-a-marcarle-al-rojo'>
          <Entrada fondo='hauche' titulo='Hauche volvió a marcarle al Rojo' />
        </Link>
        <Link className='link' to='gago-no-se-si-somos-candidatos'>
          <Entrada fondo='gago' titulo='"No se si somos candidatos, tenemos que competir"' />
        </Link>
      </div> 
      <Aside />
      
    </div>
  );
}