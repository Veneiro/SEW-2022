## 17 de Abril
Este fue el día de comienzo del proyecto, en él principalmente comencé a generar la estructura básica del mismo basándome en la documentación que se nos había proporcionado. Todo esto creando los html, javascript y otros archivos que iba a necesitar además de tener una página básica funcionando.
## 3 de Mayo
Aquí enlacé los archivos que iba a necesitar como los javascript con los html. También mejoré la estética general de la página haciendo un css más complejo. Además de esto también empecé a añadir lo siguiente:
- Completar puntos básicos del html, añadiendo las listas (ordenadas, no ordenadas, de definición y anidadas), la tabla y los recursos multimedia (imagen adaptable, video y audio)
- Añadir la funcionalidad de meteorología, lo que me permitía ver la meteorología actual del concejo
- Comenzar el procesamiento del XML, en este caso el paso a html
- Añadir la funcionalidad del carousel de fotos y las respectivas fotos
## 8 de Mayo
Este día lo dedique a la parte de la conversión del xml a los diferentes formatos pedidos. En este caso termine la conversion a svg aunque aún no se veía de manera gráfica en la página y también comencé a dar las primeras pinceladas a la generación del KML aunque no tenía todavía muy claro que camino tomar, en este caso lo que tenía para el KML era un gráfico de barras cosa que más adelante modificaría. Este día fue dedicado exclusivamente a esto debido a la complejidad del tema ya que veníamos de los ejercicios trabajados en clase en los que generabamos el kml con otro lenguaje y lo creabamos a mano para luego cargarlo en la página a tener que hacerlo todo de golpe.
## 30 de Mayo
En este día me dedique principalmente a la parte de php y a la parte del juego estilo quizz. Cree toda la estructura básica de la aplicación php, creé la base de datos que usaría y por último implementé de manera básica la funcionalidad de hacer reservas aunque en este momento sólo tenía la funcionalidad de seleccionar el recurso y hacer la reserva, no había implementado aún las fechas y horas de entrada y salida.

En la parte del juego lo terminé completamente, cree la vista para el mismo y un archivo javascript que interactuaba con esta para ir mostrando las preguntas y más tarde la puntuación final.
## 31 de Mayo
En este día el punto principal fue la inclusión de la meteorología diaria. Por el resto de implementaciones realizadas fueron principalmente correcciones de código que había hecho en los días anteriores por nuevos errores que aparecían y la adición de algún css extra.

La parte de la meteorología diaria fue bastante compleja debido a que tuve que aprender una nueva api diferente a la de clase, en este caso la de aemet, ya que la api de openweather no me permitía acceder a la meteorología diaria de manera gratuita, sólo a la actual.

Una vez obtenida la api key el proceso fue el habitual, dediqué un tiempo a leer y comprender la documentación de esta api y más tarde procedí a realizar la implementación de mi código terminando con un resultado similar al que se puede ver en la página que sería pulido en uno de los siguientes días.
## 1 de Junio
Este día lo dediqué principalmente a corregir algunos fallos relacionados con la medición meteorológica diaria que mostraba algunos errores puntuales. Además dedique este día también a informarme y revisar el trabajo realizado durante el curso para saber que enfoque necesitaba tomar de cara a la representación del kml y el svg generados en mi página web.
## 2 de Junio
Este día terminé de realizar los últimos cambios a la generación del svg y el kml teniendo ya terminada esta parte y funcionando. Después de darle bastantes vueltas y buscar información tanto en los documentos de la asignatura como en foros de internet conseguí solucionar los problemas que tenía y acabar con la versión funcional que se puede ver ahora mismo en la página, en la cual se ve la altimetría representada en un gráfico de altimetría y la ruta representada en un mapa de google maps.
## 5 de Junio
Este día lo dedique a finalizar la parte de php y hacer algunas correciones en el código ya finalizado. La parte de php, después de mucho esfuerzo, quedó funcionando prácticamente de la manera que se pide en la documentación, faltando algunos puntos de validación solamente.

Un usuario puede iniciar sesión o registrarse, tras iniciar sesión entra en la aplicación que le permite tanto hacer una nueva reserva seleccionando la fecha y hora de entrada y salida además del recurso que se quiere seleccionar. También se verán en esta página todas las reservas ya realizadas junto a sus fechas y horas de entrada y salida y abajo del todo se verá el precio final de todas las reservas que sería el presupuesto necesario para pagar todas estas reservas.

Los arreglos que hice fueron principalmente relacionados a limpiar un poco el código y a mejorar un poco la forma en la que se visualizaba la meteorología diaria.
## 6 de Junio
Este día terminé ya por completo la parte de php, generé el archivo sql de la base de datos final que me había quedado tras implementar toda la funcionalidad, añadí las validaciones pertinentes a la hora de realizar una reserva como la fecha y hora y la ocupación del recurso y modifique de manera general la parte visual de la página para tener un html válido y bien estructurado.

Terminar de hacer todo esto me llevo bastante tiempo debido a las modificaciones de estructura que tuve que realizar para poder tener las validaciones de la reserva.
## 7 de Junio
En este día, ya finalizada la funcionalidad de la página ya me dedique a comenzar la documentación del proyecto, pasar validadores, hacer algunas correcciones menores y preparar de manera general el proyecto para su correcta entrega.

>**He de comentar que se debería tener en cuenta cada uno de estos días de trabajo más como un periodo de tiempo, ya que en muchos casos que hay un espacio de tiempo amplio entre días se debe a que en ese periodo de tiempo estuve trabajando en lo que comento en el primer día**

## Funcionamiento en la máquina local mediante XAMPP

Este es el medio de funcionamiento que he usado durante todo el proyecto. Cambié la configuración del servidor Apache para que tomara de ruta raíz la carpeta de mi proyecto y estuve trabajando de esta manera. Esto me facilitó la implementación de la parte de php ya que al estar trabajando desde un inicio en XAMPP cuando llegue a esta parte funcionó todo sin problemas ya que el servidor apache puede cargar correctamente los php.

## Funcionamiento en la nube (Azure) con una cuenta de estudiante



## Prueba de Usabilidad del Proyecto

Añadir mirar cuando tiempo estimado tiene la ruta

**Tanda 1 - Ordenador:**

|Participante|Edad|Género|Nivel de Destreza|Tarea 1 (segundos)|Tarea 2 (segundos)|Tarea 3 (segundos)|
|---|---|---|---|---|---|---|
|Participante 1|35|Masculino|7|120|180|240|
|Participante 2|42|Femenino|6|150|200|260|
|Participante 3|28|Masculino|8|90|120|180|
|Participante 4|50|Femenino|4|240|300|360|
|Participante 5|22|Femenino|9|80|100|130|
|Participante 6|63|Masculino|3|300|360|420|
|Participante 7|31|Masculino|6|130|160|200|
|Participante 8|47|Femenino|5|180|230|290|
|Participante 9|38|Femenino|7|100|140|180|
|Participante 10|56|Masculino|2|360|420|500|
|Participante 11|25|Masculino|8|95|120|160|
|Participante 12|43|Femenino|6|170|220|270|

**Tanda 2 - Móvil:**

|Participante|Edad|Género|Nivel de Destreza|Tarea 1 (segundos)|Tarea 2 (segundos)|Tarea 3 (segundos)|
|---|---|---|---|---|---|---|
|Participante 1|35|Masculino|7|140|190|250|
|Participante 2|42|Femenino|6|180|230|290|
|Participante 3|28|Masculino|8|110|150|200|
|Participante 4|50|Femenino|4|270|330|400|
|Participante 5|22|Femenino|9|90|120|160|
|Participante 6|63|Masculino|3|360|420|500|
|Participante 7|31|Masculino|6|190|250|320|
|Participante 8|47|Femenino|5|230|290|360|
|Participante 9|38|Femenino|7|130|180|230|
|Participante 10|56|Masculino|2|420|500|600|
|Participante 11|25|Masculino|8|120|160|200|
|Participante 12|43|Femenino|6|200|260|330|

**Tanda 3 - Tablet:**

|Participante|Edad|Género|Nivel de Destreza|Tarea 1 (segundos)|Tarea 2 (segundos)|Tarea 3 (segundos)|
|---|---|---|---|---|---|---|
|Participante 1|35|Masculino|7|130|180|240|
|Participante 2|42|Femenino|6|160|210|270|
|Participante 3|28|Masculino|8|100|140|190|
|Participante 4|50|Femenino|4|220|280|340|
|Participante 5|22|Femenino|9|80|100|130|
|Participante 6|63|Masculino|3|280|340|410|
|Participante 7|31|Masculino|6|150|200|250|
|Participante 8|47|Femenino|5|200|250|320|
|Participante 9|38|Femenino|7|120|160|200|
|Participante 10|56|Masculino|2|340|410|490|
|Participante 11|25|Masculino|8|100|140|190|
|Participante 12|43|Femenino|6|180|230|290|
