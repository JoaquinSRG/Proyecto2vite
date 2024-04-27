import logo from "../media/logo.png";
import musa from "../media/musa.historia.jpg";

import "../pages/history.css";

export default function History({ cambiarVista }) {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="menu_logo">
              <a className="link" onClick={() => cambiarVista("home")}>
                <img
                  class="img"
                  src={logo}
                  alt="imagen del logo de Educacion ABC"
                />
              </a>
            </li>
            <li className="list_item">
              <a className="link" onClick={() => cambiarVista("home")}>
                Inicio
              </a>
            </li>
            <li className="list_item">
              <a className="link" onClick={() => cambiarVista("login")}>
                Login
              </a>
            </li>
            <li className="list_item">
              <a className="link" href="#">
                Haz una donacion
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <body class="content">
        <h1 className="titulo_historia">Historia global</h1>
        <div className="box">
          <p className="parrafo_historia">
            La historian. es la narración de los sucesos del pasado;
            generalmente los de la humanidad, aunque, también puede no estar
            centrada en el humano.n.​ Hay quien más breve y concisamente afirma
            que la historia es el conocimiento del pasado humano.​ Asimismo, es
            una disciplina académica que estudia dichos acontecimientos. A la
            ciencia o disciplina académica también se le denomina historiografía
            para distinguirla de la historia entendida como los hechos objetivos
            sucedidos. Es una ciencia social debido a su clasificación y método;
            pero, si no se centra en el humano, puede ser considerada como una
            ciencia natural, especialmente en un marco de la
            interdisciplinariedad; de cualquier forma, forma parte de la
            clasificación de la ciencia que engloba las anteriores dos, es
            decir, una ciencia fáctica (también llamada factual). Su propósito
            es averiguar los hechos y procesos que ocurrieron y se desarrollaron
            en el pasado e interpretarlos ateniéndose a criterios de la mayor
            objetividad posible; aunque la posibilidad de cumplimiento de tales
            propósitos y el grado en que sean posibles son en sí mismos objetos
            de estudio de la historiología o teoría de la historia, como
            epistemología o conocimiento científico de la historia.[cita
            requerida] Se denomina historiador o historiadora a la persona
            encargada del estudio de la historia. Al historiador profesional se
            le concibe como el especialista en la disciplina académica de la
            historia, y al historiador no profesional se le suele denominar
            cronista.
          </p>
          <img class="img" src={musa} alt="Musa de la historia" />
        </div>
        <h1 className="titulo_historia">Definicion</h1>
        <p className="parrafo_historia">
          Se llama «historia» al pasado mismo, e incluso puede hablarse de una
          «historia natural» en que la humanidad no estaba presente,[cita
          requerida] que se utilizaba en oposición a la historia social, para
          referirse no solo a la geología y la paleontología, sino también a
          muchas otras ciencias naturales —las fronteras entre el campo al que
          se refiere tradicionalmente este término y el de la prehistoria y la
          arqueología son imprecisas, a través de la paleoantropología—, y que
          se pretende complementar con la historia ambiental o ecohistoria,n. 3​
          y actualizarse con la denominada «Gran Historia».10​11​12​ Ese uso del
          término «historia» lo hace equivalente a «cambio en el tiempo»n. 4​ En
          ese sentido, se contrapone al concepto de filosófico equivalente a
          esencia o permanencia (lo que permite hablar de una filosofía natural
          en textos clásicos y en la actualidad, sobre todo en medios académicos
          anglosajones, como equivalente a la física). Para cualquier campo del
          conocimiento, se puede tener una perspectiva histórica —el cambio— o
          bien filosófica —su esencia—. De hecho, puede hacerse eso para la
          historia misma (véase tiempo históricon. 5​) y para el tiempo mismo.
          En este sentido, todo pasado en relación con el presente hace alusión
          al tiempo y a su cronología, y por lo tanto tener historia.[cita
          requerida]{" "}
        </p>
        <h1 className="titulo_historia">Etimologia</h1>
        <p className="parrafo_historia">
          La palabra historia deriva del griego ἱστορία (léase historia,
          traducible por «investigación» o «información», conocimiento adquirido
          por investigación), del verbo ἱστορεῖν («investigar»). De allí pasó al
          latín historia, que en castellano antiguo evolucionó a estoria (como
          atestigua el título de la Estoria de España de Alfonso X el Sabio,
          1260-1284) y se reintrodujo posteriormente en el castellano como un
          cultismo en su forma latina original. La etimología remota procede del
          protoindoeuropeo *wid-tor- (de la raíz *weid-, «saber, ver»
          —construcción hipotética—)6​ presente también en las palabras latinas
          idea o visión, en las germánicas wit, wise o wisdom, la sánscrita
          veda,7​ y las eslavas videti o vedati, y en otras lenguas de la
          familia indoeuropea.8​ La palabra antigua griega ἱστορία fue usada por
          Aristóteles en su Περὶ τὰ ζῷα ἱστορίαι (léase Peri ta zoa jistória,
          latinizado Historia animalium, traducible por Historia de los animales
          [el título griego es plural y el latino es singular]).9​ El término se
          derivaba de ἵστωρ (léase jístōr, traducible por «hombre sabio»,
          «testigo» o «juez»). Se pueden encontrar usos de ἵστωρ en los himnos
          homéricos, Heráclito, el juramento de los efebos atenienses y en las
          inscripciones beocias (en un sentido legal, con un significado similar
          a «juez» o «testigo»). El rasgo aspirado es problemático, y no se
          presenta en la palabra cognata griega εἴδομαι («aparecer»). La forma
          ἱστορεῖν («inquirir»), es una derivación jónica, que se expandió
          primero en la Grecia clásica y más tarde en la civilización
          helenística.{" "}
        </p>
      </body>
    </>
  );
}
