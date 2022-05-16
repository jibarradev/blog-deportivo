import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Normalize.css';
import Home from './pages/Home';
import Header from './components/Header';
import Articulo from './pages/Articulo';
import Jugadores from './pages/Jugadores';
import ProximoPartido from './pages/ProximoPartido';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route 
          path='copetti-heroe-frente-a-independiente' 
          element={<Articulo 
          tituloArticulo='Racing le ganó a Independiente por Copetti y volvió a ser el héroe del clásico' 
          imagenArticulo='copetti-independiente.jpg' 
          parrafoArticuloUno='Racing volvió a vencer a Independiente en el clásico de Avellaneda por la fecha 7 de la Copa Liga Profesional con un gol sobre la hora de Enzo Copetti que volvió a amargar al Rojo y se transformó en el héroe de la Academia para llevarse una nueva victoria que consolidó el invicto de los dirigidos por Fernando Gago.' parrafoArticuloDos='El 11 de abril de 2021 Copetti resultó una pieza clave para los dirigidos por Juan Antonio Pizzi para destrabar un clásico que finalizaba en cero hasta la última jugada del partido. Allí, el árbitro Mauro Vigliano cobró una falta muy polémica de Sergio Barreto sobre el juvenil Maggi que provocó el enojo del Rojo. 
          Tras la queja airada de Independiente por considerar que el punta rival simuló dentro del área, Copetti se hizo cargo de cambiar la pena máxima por gol para que la Academia se lleve los tres puntos en el clásico disputado en el Estadio Presidente Perón por la novena jornada de la Copa de la Liga 2021.' 
          tituloArticuloDos='Copetti, tras volver al gol para Racing vs. Independiente: "Fue un desahogo"'
          parrafoArticuloTres='Enzo Copetti manifestó sus sensaciones tras el gol que valió la victoria de Racing frente a Independiente en un festejo emotivo que calificó como un “desahogo” y reveló que evitó hablar instantes después del encuentro porque “no quería largarme a llorar” en pleno césped. “Me emocioné porque tenía una acumulación de sentimientos”, profundizó sobre el tanto.'
          parrafoArticuloCuatro='En este sentido, contó los pensamientos que se le vinieron a la cabeza en su llegada al estadio en lo que sería una premonición: “Tuve recuerdos del último clásico que jugamos en Racing”. “Nos metimos atrás en el segundo tiempo. Deberíamos haber ido más adelante para salir a buscar más el resultado”, analizó sobre el duelo y evitó hablar del futuro: “No pensamos ser campeones. Solo vamos partido a partido”.'
          />} />

          <Route 
          path='hauche-volvio-a-marcarle-al-rojo' 
          element={<Articulo 
          tituloArticulo='Hauche, a pedido de De Paul en el triunfo de Racing ante Independiente: "Le pude cumplir"' 
          imagenArticulo='hauche-independiente.jpg' 
          parrafoArticuloUno='A los dos minutos, el futbolista de 35 años aprovechó un remate de Tomás Chancalay que rebotó en el palo para agarrar la pelota y, sin miramientos, definió sin arquero para abrir la cuenta en el clásico de la fecha 7 del certamen doméstico.' 
          parrafoArticuloDos='Independiente es un rival que despierta sonrisas en Hauche porque es el séptimo gol que le anota al Rojo como futbolista profesional. El Demonio le anotó cuatro goles con la camiseta de Argentinos, mientras que los tres restantes fueron con la Academia.' 
          tituloArticuloDos='La premonición de Rodrigo De Paul con Hauche para el clásico Independiente vs. Racing'
          parrafoArticuloTres='"Que Hauche haga un gol porque lo tengo en el Gran DT. El otro día salió que Antoine (Griezmann) le había escrito al chico del Gran DT porque no está la aplicación para el iPhone y acá creamos un grupo y jugamos. Cada uno tiene su equipo. El otro día vino contento porque le había hecho un gol (Martín) Ojeda de Godoy Cruz. Nos jugamos alguna cena, je, también juegan Angelito Correa y Luis Suárez, nos divertimos. Obviamente que el clásico lo voy a mirar", contó De Paul en diálogo con TyC Sports.'
          parrafoArticuloCuatro='"Le pude cumplir. Espero que haya sumado un punto. Me tenía fe. Esta vez, por suerte se dio. Lo más importante es que ganamos", expresó el Demonio en conferencia de prensa luego de la victoria.'
          />} />

          <Route 
          path='gago-no-se-si-somos-candidatos' 
          element={<Articulo 
          tituloArticulo='Gago, tras la victoria de Racing en el clásico: de "la alegría es muy grande" al "estamos para competir"' 
          imagenArticulo='gago-independiente.jpg' 
          parrafoArticuloUno='El técnico aseguró que fueron "superiores" en la primera mitad y que entendían que el Rojo iba a reaccionar al estar en desventaja. "Ellos se iban a posicionar más alto. Tratamos de no meternos tan atrás. No era nuestra intención. No pudimos tener el balón como pretendíamos. Tienen jugadores de calidad y un gran entrenador. La jugada del segunda gol fue por una acumulación de toques. Tratamos de generar. La alegría es muy grande por los chicos", afirmó.' 
          parrafoArticuloDos='En ese sentido, aseguró que sus jugadores "vienen trabajando muy bien" y que la Academia va "de menos a más" en el campeonato. "Si estamos para ser candidatos, no sé. Estamos para competir. Es lo que quiero trasladarle a los chicos. Necesitamos competir cada partido. Algunas veces nos va a salir mejor. Tenemos que estar en ese nivel de competencia cada partido", dijo.' 
          tituloArticuloDos='Sobre ganar el clásico'
          parrafoArticuloTres='Son partidos especiales. Lo dije después del partido con Atlético Tucumán. Juega mucho la emoción. Cuando te empatan y el equipo no encuentra la forma... Es algo que demuestran los jugadores, que estaban en partido y alguna situación íbamos a intentar aprovecharla", dijo.'
          parrafoArticuloCuatro='Por último, Gago dijo que está "convencido" de lo que hace y que intenta transmitírselo a los futbolistas. "Hay situaciones donde ellos terminan teniendo razón y no yo, y ellos deciden. Yo estoy convencido de lo que hago a pesar del resultado", dijo. Y sentenció: "Yo no cambié. Tengo una forma y creo en una forma. Trato de llevarla a cabo con los jugadores que tengo".'
          />} />

          <Route 
          path='un-futbol-que-enamora' 
          element={<Articulo 
          tituloArticulo='UN FÚTBOL QUE ENAMORA' 
          imagenArticulo='copetti-aldosivi.jpg' 
          parrafoArticuloUno='Racing goleó 5-0 a Aldosivi, al que dominó de principio a fin con un juego sobresaliente. Carlos Alcaraz y Enzo Copetti, los dos por duplicado, más Javier Correa convirtieron para llevar al equipo de la semifinales de la Copa de la LPF.' 
          parrafoArticuloDos='A pleno, sin caídas de tensión, con regulación de ritmo a placer -cuando la ventaja concedió espacio para esa decisión-, con funcionamiento preciso en extremo y con aspectos que un espectador celebra en partidos de la elite europea. Porque los movimientos de Carlos Alcaraz remiten en espejo a los que hacen esos volantes top, que no ocupan espacios como referencia y rompen al área ajena para convertir. Así lo hizo repetidamente, sin que los medios ni los defensores de Aldosivi pudieran detectarlo y así festejó por duplicado, como todo Racing en la celebración de un fútbol que promueve ilusiones justificadas y que lo ha puesto en las semifinales de la Copa de la Liga.' 
          tituloArticuloDos='El plan de Aldosivi no funcionó'
          parrafoArticuloTres='Los marplatenses, como ya lo intentaron varios rivales, apostaron a interrumpir la cadena de pases y salir rápido en provecho de la velocidad de Mosquera. Apenas una vez conectó, en el inicio, y Chila Gómez le tapó el remate al achicarle con rapidez. Racing ajustó de inmediato, en especial con Matías Rojas y Facundo Mura proyectados por derecha y con Tomás Chancalay abierto por izquierda. De Rojas y de Chanca nacieron las asistencia, exquisitas, para Charly. Así como pegó sin perder tiempo en el inicio, Racing también lo cumplió en la reanudación, ya que a los 11 segundos Copetti pedía la pelota para rematar el tiro penal luego de la falta que le cometiera Valentini. Y 11 minutos después, el delantero recogía un rebote en casi en el área chica para el 4-0.'
          parrafoArticuloCuatro='Racing, además de las virtudes que ya se le reconocen como perfil definido de su juego, tiene el atributo de la responsabilidad colectiva. ¿En qué se expone? En la determinación de sostener el ataque, de aplicarse con la misma dedicación al desarollo a pesar de un pleito resuelto en el amanecer del segundo período. Entonces, Chila, cuando resolvía una ocasión espóradica de riesgo, demandaba atención para evitar desconcentraciones; Insúa, sin importar el deselance consumado, cortaba alto y generaba un avance profundo para el 5-0 a cargo de Correa a falta de un cuarto de hora para el cierre; Moreno no descuidaba su zona próxima y marcaba las zonas a transitar... Así entiende Racing el juego: como un asunto serio en el que su estilo genera enamoramiento.'
          />} />

          <Route 
          path='siempre-protagonistas' 
          element={<Articulo 
          tituloArticulo='gago: "salió todo lo trabajado"' 
          imagenArticulo='ser-protagonistas.jpg' 
          parrafoArticuloUno='El entrenador y su jugador de la "Academia" valoraron la goleada ante Aldosivi y el pasaje a semis de la Copa de la Liga. "Siempre buscamos ser protagonistas", manifestó "Pintita", mientras que "Charly" aseguró que "le da igual" jugar contra Boca o Defensa y Justicia.' 
          parrafoArticuloDos='El entrenador de Racing, Fernando Gago, aseguró que "salió todo lo trabajado", en referencia al rendimiento colectivo mostrado por su equipo en la goleada por 5-0 ante Aldosivi, resultado que dejó a "La Academia" en las semifinales de la Copa de la Liga Profesional.' 
          tituloArticuloDos='Hoy nos impusimos durante todo el encuentro'
          parrafoArticuloTres='"Salió todo lo trabajado. Me gustó la entrega con la que jugaron. Ahora hay que seguir trabajando y pensar en el próximo partido", declaró Gago en conferencia de prensa. "El equipo tiene una idea de juego y trata de demostrarla en cada partido. Hoy nos impusimos durante todo el encuentro", agregó sobre la goleada a favor ante el "Tiburón" de Mar del Plata de esta noche en el Cilindro de Avellaneda.'
          parrafoArticuloCuatro='"El objetivo siempre fue jugar cada partido como lo planeamos, porque cada encuentro es un desafío", reforzó sobre la filosofía que intenta transmitirle a sus dirigidos. "Nosotros tenemos una manera de jugar y obviamente que nos fijamos en las virtudes del rival, pero siempre buscamos ser protagonistas", añadió.'
          />} />

          <Route 
          path='socios-eternos' 
          element={<Articulo 
          tituloArticulo='socios eternos' 
          imagenArticulo='socios.jpg' 
          parrafoArticuloUno='A poco más de seis meses de la decisión institucional de devolverles su condición a 46 socios, socias e hinchas víctimas del terrorismo de Estado en la década de 1970 y en el inicio de la de 1980, el libro Socios Eternos, escrito por Julián Scher, recrea la pasión por Racing de aquellas personas para quienes el celeste y blanco representaban un hecho vital.' 
          parrafoArticuloDos='"Socios eternos" es el nuevo libro de Julián Scher, un recorrido hecho con textos tan breves como emocionantes a través de las vivencias de los núcleos afectivos de socios, socias e hinchas de Racing que desaparecieron durante el genocidio que sufrió la Argentina y a quienes el club reincorporó, precisamente, como socios eternos a partir de un acto efectuado en el Cilindro de Avellaneda el 7 diciembre de 2021 y que representó un suceso histórico por la repercusión nacional e internacional alcanzada a partir de la decisión institucional asumida.' 
          tituloArticuloDos='Scher y el libro'
          parrafoArticuloTres='Cada uno de esos textos (46 capítulos, 139 páginas) está articulado con una fotografía en una combinación que permite dimensionar todo lo que significaba Racing para las 46 víctimas del espanto que la institución supo reconocer y todo lo que significa para su gente querida la recuperación de ese vínculo. Hay voces de hijos, hijas, madres, padres, amistades, compañeros y compañeras de cancha de cada desaparecido y de cada desparecida, conformando la constelación de conmociones que respresenta esta obra que fue publicada por Grupo Editorial Sur (GES) y cuenta con prólogo del periodista Carlos Ulanovsky y contratapa del poeta Vicente Zito Lema.'
          parrafoArticuloCuatro='Como sintetiza Ulanovsky en el prólogo: "El libro tiene la condición de establecer una ceremonia en la que los que ya no estén alcanzan dimensión de inolvidables".
          Scher es sociólogo y máster en Ciencia Política y Sociología. Publicó el libro "Los desaparecidos de Racing" en 2017, igual que ahora con la edición de Grupo Editorial Sur (GES), y trabaja sobre los lazos entre el fútbol, el genocidio y los derechos humanos en la Argentina.'
          />} />

          <Route path='jugadores' element={<Jugadores />} />

          <Route path='proximo-partido' element={<ProximoPartido />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
