import React, { Component } from 'react';
import fig01 from '../fig01.png';
import fig02 from '../fig02.png';
import fig03 from '../fig03.png';

class Home extends Component {
  render() {
    return (
      <div className="summary animated fadeIn">
        <div className="">
          <h1 className="summary-t1">Algoritmo de optimización para la determinación de una línea
               base de evaluación de la distribución escolar en un territorio</h1>
             <h4 className="summary-t4">Dr Julio Rojas Mora <br/>
             Académico de la Escuela de Ingeniería Informática <br/>
            Universidad Católica de Temuco
             </h4>
             <br/>
             <br/>
             <p className="summary-p">Actualmente Chile pasa por un proceso de reforma estructural de la educación, en
                donde se ha instalado la idea de la necesidad de un cambio profundo en términos de
                la gestión de los recursos usados en la educación, de los participantes en la provisión
                de los servicios educativos y de la filosofía que orienta a los agentes que participan
                de este “mercado de la educación”.</p>
              <p className="summary-p">
                En un intento de mejorar su posibilidad de lograr movilidad social verticalmente
                ascendente (Puga, 2011), los estudiantes aventajados de estratos socio-económicos
                vulnerables migraron al sistema de educación privada subvencionada por el Estado,
                siendo fomentado este comportamiento por estrategias segregatorias -decisiones de
                admisión, expulsión y agrupamiento de los alumnos con respecto a su rendimiento
                académico- que fueron establecidas por las escuelas de este sistema (Bellei, 2013).
                Así, el llamado “efecto par” -las externalidades positivas que reciben los compañeros
                de alumnos de alto rendimiento académico en sus relaciones sociales- se pierde del
                todo en este ambiente, condenando a los colegios de bajo rendimiento académico a
                no tener figuras que den el ejemplo.
              </p>
              <p className="summary-p">
                Aunque hay estudios que analizan en profundidad el problema de la segregación
                socioeconómica en el sistema educativo chileno, los datos que utilizan son anteriores
                a la promulgación (en 2008) de la Ley Nro. 20.248 de Subvención Escolar Preferencial
                (SEP). Esta política pública, configurada en un voucher suplementario, está dirigida
                a la población educativa más vulnerable, o “prioritaria”, como se define en la Ley.
              </p>
              <p className="summary-p">
                Definamos la distribución escolar en un territorio como la forma en que los estudiantes
                pertenecientes al mismo se reparten entre todas las escuelas disponibles.
                Sería importante poder evaluar la distribución escolar en un territorio dado contra
                una línea base que tuviera en consideración diferentes criterios para su determinación.
                Para esto, habría que implementar un algoritmo de cálculo de esta línea base
                en la que se asignaran estudiantes a escuelas de tal manera que se minimizara una
                combinación lineal de estos criterios. Pensamos que dicho algoritmo debería tomar
                en consideración al menos tres criterios cruciales:
              </p>
              <p className="summary-p summary-n">
                1. Nivel de segregación de la comuna calculado con un índice adecuado de aquellos
                desarrollados en la literatura especializada.
              </p>
              <p className="summary-p summary-n">
                2. Distancia promedio recorrida por los estudiantes para acceder al centro educativo
                al cual sería asignado.
              </p>
              <p className="summary-p summary-n">
                3. Limitar el número de instituciones educativas en funcionamiento al nivel mínimo
                adecuado para atender a la población escolar.
              </p>
              <p className="summary-p">
                Una solución adecuada estaría basada en los llamados «algoritmos genéticos», herramientas
                iterativas de optimización que permiten combinar resultados cada vez
                mejores hasta obtener un resultado muy cercano al óptimo.
              </p>
              <p className="summary-p">
                En la Figura 0.1 podemos ver un ejemplo para un territorio con cinco escuelas
                y cien estudiantes. Las escuelas están representadas por triángulos invertidos cuyo
                tamaño muestra el nivel de segregación de acuerdo a una escala derivada de la literatura
                científica en el tema (por encima de 0,3 es alta y por encima de 0,6 es
                aberrante). Los triángulos pequeños son estudiantes vulnerables (de acuerdo a un
                criterio como el establecido por la SEP), mientras que los circulos pequeños representan
                a estudiantes no vulnerables. Cada polígono muestra el territorio cubierto
                por cada una de las escuelas en funcionamiento. La situación inicial, similar a lo que
                se podría encontrar a cualquier país europeo, muestra a los estudiantes asistiendo a
                la escuela más cercana a su domicilio, mientras la situación final balancea los tres
                criterios establecidos, lo que ha permitido reducir el número de escuelas necesarias a
                tres.
              </p>
              <p className="summary-p">
                La evolución de los criterios tomados en cuenta en la determinación de la línea
                base puede ser apreciada en la Figura 0.2. En primer término, tenemos la distancia
                <img src={fig01} className="sumarry-image"/>
                media recorrida por los estudiantes, la cual arranca desde un punto mínimo (pues
                los estudiantes inicialmente asisten a la escuela más cercana a su domicilio), subiendo
                a un nivel máximo cercano a los 3,25 Km, para finalmente llegar a los 3 Km
                de promedio. Por contra, la segregación socioeconómica arranca de un nivel máximo
                superior a 0,8 (nivel aberrante, pues al acceder a su escuela más cercana, los
                estudiantes comparten características socioeconómicas locales que no representan al
                territorio en su totalidad), para rápidamente descender al nivel final de 0,13 (nivel
                bajo). Finalmente, el costo por escuelas abiertas arranca en un nivel máximo (cinco
                escuelas abiertas, cada una funcionando por debajo de su capacidad máxima) y rápidamente
                converge al valor final (tres escuelas abiertas, funcionando a su capacidad
                máxima o muy cercana a ella).
              </p>
              <p className="summary-p summary-last">
                Utilizando estos criterios se podría evaluar la situación actual de un territorio y
                comparar que tan lejos se encuentra de esta línea base. De esta manera, se dispondría
                de una herramienta que pudiera servir para ayudar a la toma de decisiones en políticas
                públicas educativas, pues al reducirse la segregación socioeconómica escolar, sin
                perjudicar demasiado a los estudiantes por el incremento de la distancia que tendría
                que recorrer, se podría fomentar el efecto par y lograr mejorar el rendimiento de
                instituciones educativas que atienden, fundamentalmente, a estudiantes vulnerables.
                <img src={fig02} className="sumarry-image"/>
                <img src={fig03} className="sumarry-image"/>
              </p>
        </div>
      </div>
    );
  }
}

export default Home;
