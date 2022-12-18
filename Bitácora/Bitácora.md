# Seminario 1

## Fecha - 23 / 09 / 2022
### Trabajo 1 : Creación de la cuenta de azure

#### Creación de la cuenta de Azure
- Para comenzar entro en la página de Azure Students donde se me mostrará el siguiente contenido. En este procederé a clickar en ***Empieza aquí*** para comenzar la creación de la cuenta de azure
<img src="./Multimedia/Fotos/Screenshot_661.png" alt="Pagina principal"/>
- Después de esto simplemente nos mandará introducir nuestro correo electrónico y contraseña de nuestra cuenta de estudiante para verificarnos como estudiante y nos llevará a la pantalla del servicio
<img src="./Multimedia/Fotos/Screenshot_662.png" atl="Dentro de azure">

#### Creación de la Máquina virtual linux
- Para crear nuestra máquina virtual primero pulsamos en el menú superior izquierdo que viene indicado con 3 líneas y le damos a home
<img src="./Multimedia/Fotos/Screenshot_663.png" alt="Home de azure">
- En este apartado nos dirigiremos al botón de ***Crear un recurso*** y veremos lo siguiente
<img src="./Multimedia/Fotos/Screenshot_664.png" alt="Imagen de creación del recurso">
- Al pulsar en el vinculo *Crear* situado debajo del recurso *Máquina virtual* nos mandará a la pantalla de creación de la misma donde podemos configurarla a nuestro gusto
<img src="./Multimedia/Fotos/Screenshot_665.png" alt="Configuración de la máquina">
- Después de configurar la máquina y crearla se nos muestra una página que tardará un rato en validar la máquina. Tras validarla se nos mostrará lo siguiente
<img src="./Multimedia/Fotos/Screenshot_684.png" alt="Máquina Creada y validada">
- Tras tener la máquina validada y darle al botón de crear se nos permitirá descargar la clave que más tarde usaremos para conectarnos
<img src="./Multimedia/Fotos/Screenshot_1.png" alt="Generación de la clave">
- Tendremos que descargar la clave anterior y después se nos creará el recurso con éxito mostrandonos la siguiente información
<img src="./Multimedia/Fotos/Screenshot_2.png" alt="Implementación completada">
- Yendo al terminal, en este caso lo he hecho desde el terminal de linux porque no tenía el WSL en Windows. Primero deberemos asignar los permisos y después con nuestra clave y usuario nos conectaremos a la máquina como se nos dice en la propia página de Azure
<img src="./Multimedia/Fotos/Captura%20de%20pantalla%20de%202022-12-14%2012-42-21.png" alt="Prueba de conexión SSH">
- Desde este mismo terminal y poniendo el siguiente comando se nos permitirá de la misma manera conectarnos mediante el uso de sftp
<img src="./Multimedia/Fotos/Captura%20de%20pantalla%20de%202022-12-14%2012-43-53.png" alt="Prueba de conexión SFTP">

#### Comparación de las cuentas de estudiante AWS, Azure y Google
- Ventajas Google Cloud:
  - Se te proporcionan 200 créditos gratuitos tienen un año de duración
  - Tendrás la posibilidad de publicar una insignia en Linkedin exclusiva una vez demostrado tu dominio de Google Cloud tras completar una misión de la insignia de habilidad. Esto te permitirá demostrar el conocimiento de Google Cloud de cara a posibles ofertas de trabajo
  - Obtendrás una certificación que te permitirá posicionarte mejor de cara a obtener un puesto de trabajo en Google Cloud además de que fue la certificación más rentable del 2019 y 2020
  - También google nos proporciona una gran seguridad junto con el uso de funciones de IA integradas.
  - Podrás integrar la colaboración por videollamada, correo electrónico, chat y documentos gracias al Google Workspace
  - Tendrás a tu disposición la misma seguridad que se utiliza en el propio Google y todas sus aplicaciones
- Ventajas Azure:
  -  Obtienes un crédito de 100$ que tendrá una valided de un año
  -  Se puede renovar la suscripción de estudiante anualmente desde la propia pagina de azure student. Teniendo en cuenta que debe renovarse antes de haber pasado el año.
  -  Proporcina acceso a los principales servicios de manera gratuita como son el Azure App Service, Azure Functions, Azure Notifications Hubs, Azure Database for MySQL, Application Insights y Azure DevOps Service.
  -  Sencillo acceso a todos los servicios, solo con poner tu cuenta de estudiante y que se te verifique tendrás acceso instantáneo a todas las ventajas anteriormente mencionadas
- Ventajas AWS:
  - Facilidad de uso. AWS te proporciona una manera rapida y sencilla de hospedar tu aplicación tanto existente como si es una nueva aplicación basada en SaaS. Además podrás usar la consola de administración de AWS o las API de servicio documentadas para obtener acceso a la plataforma de hospedaje de aplicaciones de AWS.
  - Es Flexible: Te permite seleccionar el Sistema Operativo, el lenguaje de programación, la plataforma de las aplicaciones web, la base de datos así como el resto de servicios que se necesiten. También te permite cargar el software y los servicios que necesties a la aplicación para facilitar la migración de aplicaciones existentes y mantiene las opciones para crear nuevas soluciones.
  - Es Rentable: Solo deberás afrontar el costo de la potencia de cómputo, el almacenamiento y demás recursos que se utilicen sin contratos a largo plazo ni compromisos iniciales.
  - De Confianza: Ya que cuentas con la infraestructura escalable y segura que utilizan aplicaciones como la tienda de Amazon.com
  - Escalabilidad y alto desempeño: Con las herramientas Auto Scaling y Elastic Load Balancing, la aplicación podrá ampliarse o reducirse según la demanda. Y gracias al respaldo de la sólida infraestructura de Amazon tendrás acceso a los recursos en cualquier momento.
  - Seguro: Se aplica un enfoque integral para proteger y reforzar la infraestructura, incluidas medidas físicas, operativas y de software.
#### La ciberseguridad en la nube
##### ¿Qué es?
La seguridad en la nube es toda la tecnología, los protocolos y las buenas prácticas que protegen los entornos informáticos en la nube, las aplicaciones que se ejecutan en la nube y los datos almacenados en ella. La seguridad de los servicios en la nube comienza por comprender qué se está asegurando exactamente, así como los aspectos del sistema que se deben administrar.

A modo de resumen, el desarrollo del soporte contra las vulnerabilidades de seguridad está en gran medida en manos de los proveedores de servicios en la nube. Aparte de elegir un proveedor consciente de la seguridad, los clientes deben centrarse sobre todo en la configuración adecuada del servicio y en los hábitos de uso seguro. Además, los clientes deben asegurarse de que el hardware y las redes de los usuarios finales estén debidamente asegurados.

El alcance total de la seguridad en la nube está diseñado para proteger lo siguiente, independientemente de sus responsabilidades:

- **Redes físicas**: enrutadores, energía eléctrica, cableado, controles de clima, etc.
- **Almacenamiento de datos**: discos duros, etc.
- **Servidores de datos**: hardware y software informáticos de la red central
- **Plataformas de virtualización de equipos informáticos**: software de máquinas virtuales, máquinas anfitrionas y máquinas invitadas
- **Sistemas operativos (OS)**: software que soporta todas las funciones informáticas
- **Middleware**: gestión de la interfaz de programación de aplicaciones (API),
- **Entornos de ejecución**: ejecución y mantenimiento de un programa en ejecución
- **Datos**: toda la información almacenada, modificada y a la que se ha accedido
- **Aplicaciones**: servicios tradicionales de software (correo electrónico, software de impuestos, paquetes de productividad, etc.)
- **Hardware de usuario final**: ordenadores, dispositivos móviles, dispositivos de Internet de las cosas (IoT), etc.

Con la informática en la nube, la propiedad de estos componentes puede variar ampliamente. Esto puede hacer que no esté claro el alcance de las responsabilidades de seguridad del cliente. Dado que asegurar la nube puede parecer diferente en función de quién tiene autoridad sobre cada componente, es importante entender cómo se suelen agrupar.

Estos componentes informáticos se están asegurados bajo dos puntos de vista principales:

- Los tipos de servicios en la nube son servicios ofrecidos por proveedores externos como módulos utilizados para crear el entorno de la nube. Dependiendo del tipo de servicio, se puede gestionar un grado diferente de los componentes dentro del servicio.
- Los entornos de la nube son modelos de implementación en los que uno o más servicios en la nube crean un sistema para los usuarios finales y las empresas. Estos segmentan las responsabilidades de gestión, incluida la seguridad, entre los clientes y los proveedores.

##### ¿Cómo Funciona?
Cada medida de seguridad en la nube funciona para lograr uno o más de los siguientes objetivos:

- Permitir la recuperación de datos en caso de pérdida de datos
- Proteger el almacenamiento y las redes contra el robo de datos malicioso
- Evitar los errores humanos o negligencias que causan la fuga de datos
- Reducir el impacto de cualquier compromiso de datos o sistemas

La **seguridad de los datos** es un aspecto de la seguridad en la nube que implica el fin técnico de la prevención de amenazas. Existen herramientas y tecnologías que permiten a los proveedores y los clientes insertar barreras entre el acceso y la visibilidad de los datos confidenciales. Entre ellas, el cifrado es una de las herramientas más potentes disponibles. El cifrado codifica los datos para que solo los pueda leer alguien que tenga la clave de cifrado. En caso de pérdida o robo de los datos, no será posible leerlos ni interpretarlos. Las protecciones para el tráfico de datos, tales como las redes privadas virtuales (VPN), también ganan importancia en las redes de la nube.

La **gestión de identidades y accesos (IAM)** se refiere a los privilegios de acceso que se ofrecen a las cuentas de los usuarios. La gestión de la autenticación y la autorización de las cuentas de usuario también se aplica aquí. Los controles de acceso son fundamentales para restringir a los usuarios, tanto a los legítimos como a los maliciosos, el acceso y el compromiso de los datos confidenciales y sistemas. La gestión de contraseñas, la autenticación de varios factores y otros métodos entran en el alcance de la IAM.

La **gobernanza** se centra en las políticas de prevención, detección y mitigación de amenazas. Con PYMES y empresas, aspectos como la información sobre amenazas pueden ayudar a rastrear y priorizar las amenazas para mantener los sistemas esenciales vigilados cuidadosamente. Sin embargo, incluso los clientes individuales de la nube podrían beneficiarse de la valoración de las políticas y la formación sobre el comportamiento seguro del usuario. Estas se aplican sobre todo en los entornos empresariales, pero las normas para el uso seguro y la respuesta a las amenazas pueden ser útiles para cualquier usuario.

La **planificación de la retención de datos (DR)** y la continuidad del negocio (BC) implica medidas técnicas de recuperación de desastres en caso de pérdida de datos. Los métodos para la redundancia de datos, como las copias de seguridad, son fundamentales para cualquier plan de DR y BC. Además, disponer de sistemas técnicos para garantizar la continuidad de las operaciones puede ser de gran ayuda. Las plataformas para probar la validez de las copias de seguridad y las instrucciones detalladas de recuperación de los empleados son igual de valiosas para un plan de BC completo.

El **cumplimiento legal** gira en torno a la protección de la privacidad del usuario, tal como lo establecen los órganos legislativos. Los gobiernos asumieron la importancia de proteger la información de los usuarios privados para que no sea explotada con fines de lucro. Por lo tanto, las empresas deben seguir los reglamentos para cumplir con estas políticas. Uno de los enfoques es el uso del enmascaramiento de datos, que oculta la identidad dentro de los datos mediante métodos de cifrado.

##### ¿Qué hace que sea diferente?
La seguridad informática tradicional ha experimentado una inmensa evolución debido al cambio a la informática basada en la nube. Si bien los modelos de la nube permiten una mayor comodidad, la conectividad siempre activa requiere nuevas consideraciones para mantenerlas seguras. La seguridad en la nube, como una solución de ciberseguridad modernizada, se distingue de los modelos informáticos heredados en algunos aspectos.

- **Almacenamiento de datos**: Las plataformas basadas en la nube han ayudado a transferir los costes de desarrollo y mantenimiento de los sistemas, pero también a eliminar cierto control de los usuarios.
- **Velocidad de escalada**: La infraestructura y las aplicaciones centradas en la nube son muy modulares y se movilizan rápidamente. Si bien esta capacidad mantiene los sistemas uniformemente ajustados a los cambios empresariales, también plantea problemas cuando la necesidad de mejoras y comodidad de una empresa supera su capacidad para mantenerse al día en materia de seguridad.
- **Interfaz del sistema de usuarios finales**: tanto para las empresas como para los usuarios individuales, los sistemas de nubes también se conectan con muchos otros sistemas y servicios que se deben asegurar. Los permisos de acceso deben mantenerse desde el nivel de dispositivo de usuario final hasta el nivel de software e incluso el nivel de red. Además, tanto proveedores como usuarios deben estar atentos a las vulnerabilidades que pueden causar a través de comportamientos de configuración y acceso al sistema inseguros.
- **Proximidad a otros datos de sistemas en red**: dado que los sistemas en la nube son una conexión persistente entre los proveedores de la nube y todos sus usuarios, esta importante red puede comprometer incluso al propio proveedor. En los entornos de redes, un solo dispositivo o componente débil se puede explotar para infectar al resto. Los proveedores de la nube se exponen a las amenazas de muchos usuarios finales con los que interactúan, bien sea que estén proporcionando almacenamiento de datos u otros servicios. Las responsabilidades adicionales en materia de seguridad de la red recaen en los proveedores cuyos productos entregados de otro modo se basarían exclusivamente en los sistemas de los usuarios finales y no en los propios.

Resolver la mayoría de los problemas de seguridad en la nube significa que tanto los usuarios como los proveedores de la nube, tanto en entornos personales como en empresariales, deben ser proactivos en cuanto a sus propias funciones en la ciberseguridad. Este doble enfoque significa que los usuarios y los proveedores deben abordar lo siguiente:

- Configuración y mantenimiento seguros del sistema.
- Educación sobre seguridad del usuario, tanto a nivel de comportamiento como a nivel técnico.

##### Riesgos
Algunas amenazas comunes a la seguridad en la nube incluyen:

- **Riesgos de la infraestructura basada en la nube**, incluidas las plataformas informáticas heredadas incompatibles y las interrupciones de los servicios de almacenamiento de datos de terceros.
- **Amenazas internas debidas a errores humanos** como, por ejemplo, la mala configuración de los controles de acceso de los usuarios.
- **Amenazas externas** causadas casi exclusivamente por actores maliciosos, como malware, phishing y ataques de DDoS.

##### La importancia de la ciberseguridad en la nube
La introducción de la tecnología de la nube ha obligado a todos a reevaluar la ciberseguridad. Los datos y aplicaciones pueden estar flotando entre sistemas locales y remotos, y estar siempre accesibles por Internet. Si accede a Google Docs desde el teléfono móvil o si utiliza el software Salesforce para gestionar a sus clientes, esos datos pueden guardarse en cualquier parte. De ahí que protegerlos sea más difícil que cuando solo se trataba de impedir que usuarios no deseados accedieran a su red. La seguridad en la nube requiere ajustar algunas prácticas informáticas previas, pero se ha vuelto más esencial por dos razones clave:

- **Comodidad por encima de la seguridad**. La informática en la nube está creciendo de forma exponencial como método principal tanto para el lugar de trabajo como para el uso individual. La innovación ha permitido que la nueva tecnología se implemente más rápido de lo que avanzan las normas de seguridad de la industria, lo que hace que los usuarios y los proveedores tengan más responsabilidad a la hora de considerar los riesgos de la accesibilidad.
- **Centralización y almacenamiento para múltiples usuarios**. Cada componente, desde la infraestructura básica hasta pequeños datos como correos electrónicos y documentos, puede ahora localizarse y accederse de forma remota e ininterrumpida a través de conexiones basadas en la web. Toda esta recopilación de datos en los servidores de unos pocos proveedores de servicios importantes puede ser muy peligrosa. Los actores de amenazas pueden atacar ahora a grandes centros de datos de varias empresas y causar importantísimas filtraciones de datos.

# Seminario 2

## Fecha - 07 / 09 / 2022
### Trabajo 1 : Entradas a la bitácora sobre usabilidad
#### UO acabado en 2 : Comentar 3 videos sobre la mala usabilidad en la Web y 3 sobre las buenas prácticas en la Web

- Mala Usabilidad
><a href="https://www.youtube.com/watch?v=cIjNWxYDSFU">Video 1</a>: En este video se nos comentan ciertos errores relacionados a la usabilidad en la web como son el **uso de url demasiado largas o complejas** en caso de la estructura web, **utilizar imagenes o recursos sobredimensionados o contar con servidores de baja calidad** en caso de la velocidad, **No usar elementos adecuados para responsive o no adaptarlos correctamente a todos los navegadores o dispositivos** en caso de responsive, **el uso de estructuras como h1, h2... y no facilitar las conductas más fáciles como encontrar la dirección, el telefono** en caso de la estructura de contenido, **web no adecuada al lenguja que usará el usuario final** en caso de la adaptabilidad al lenguaje. Me parece un video sencillo, corto y que va directamente a los principales fallos que nos podemos encontrar para poder evitarlos de manera que pueda ser comprendido de una manera más sencilla.

><a href="https://www.youtube.com/shorts/2H3wzz6enm8">Video 2</a>: En este video corto se nos presenta de una manera sencilla y clara que es la usabilidad web, acompañando esto de las 3 principales desventajas de tener una mala usabilidad en nuestra aplicación web.

><a href="https://www.youtube.com/watch?v=Ehot67NX4o0">Video 3</a>: En este video se nos presentan diversos errores relacionados con la usabilidad móvil y recursos bloqueados y las soluciones posibles de los mismos.

- Buena Usabilidad

><a href="https://www.youtube.com/watch?v=p9o13k54GIA">Video 1</a>: Este segundo video nos habla sobre buesnas practicas que debemos de tener para nuestras aplicaciones web con el fin de que el usuario tenga una buena experiencia en la página además de sentir que tiene el control de lo que está haciendo en todo momento. En el video se nos nombran dos reglas principales a seguir como son: Tratar de captar la atención del usuario manteniendo la claridad, la sencillez y la coherencia en lo que queremos transmitir ya que los primeros segundos serán los cruciales para decidir si un usuario se quedará o no. La segunda regla nos dice que mientras menos clics haga el usuario para llegar a donde quieras que llegue más exitosa podrá ser la aplicación y la experiencia dentro de la misma. En el video también se nos muestran diversos tips de cara a aplicar en nuestros proyectos para mantener siempre una buena usabilidad.

><a href="https://www.youtube.com/watch?v=KLluZGWPyO4">Video 2</a>: En este video/master class se nos presenta de manera más desarrollada los principales conceptos o principios de usabilidad en una aplicación web así como posteriormente en base a esos conceptos se hace una exploración por diversos sitios web para identificar prácticas a destacar, recomendar o que deberían utilizarse.

><a href="https://www.youtube.com/watch?v=aMs1Gjq03Pc">Video 3</a>: Este video del propio canal de google nos muestra una serie de prácticas de usabilidad importantes de cara al uso de la aplicación web en dispositivos móviles. Es un video corto sencillo y que va directo a los puntos principales a tratar de cara a la usabilidad en dispositivos móviles.

### Trabajo 2
### Resumen del libro "No me hagas pensar" 3ª edición
#### Resumen General
No me hagas pensar, un libro de Steve Krug, es una guía para crear sitios web que sean fáciles y agradables de usar. Está dirigido a diseñadores y desarrolladores web, así como a personas no técnicas que necesitan comprender los principios detrás de un buen diseño web. El autor brinda consejos prácticos para crear sitios web que sean intuitivos y accesibles, con un enfoque en la experiencia del usuario. Argumenta que los sitios web deben diseñarse pensando en el usuario, con énfasis en hacer que su experiencia sea lo más fácil y agradable posible. Los temas cubiertos incluyen la importancia de la navegación y el diseño visual, las pruebas de usabilidad y la accesibilidad. El libro también brinda sugerencias para simplificar tareas complejas, hacer que el contenido sea más legible y escaneable y garantizar que los sitios web sean accesibles para todos los usuarios. Con una escritura clara y concisa y una gran cantidad de consejos prácticos, No me hagas pensar es un recurso invaluable para cualquier persona interesada en el diseño web.
#### Capítulo 1: ¡No me hagas pensar!
El primer capítulo del libro de Steve Krug "Don't Make Me Think" introduce a los lectores al concepto de usabilidad. Krug argumenta que los sitios web deben diseñarse de tal manera que los usuarios puedan encontrar fácilmente lo que buscan sin frustrarse o confundirse. Continúa explicando los tres principios más importantes de la usabilidad: (1) hacer que la tarea del usuario sea simple y obvia; (2) dar a los usuarios comentarios sobre su progreso; y (3) mantener a los usuarios en control. También explica la importancia de probar un sitio web con usuarios reales para encontrar posibles problemas de usabilidad. Finalmente, Krug describe los pasos para diseñar un sitio web exitoso y enfatiza la importancia de considerar la experiencia del usuario.
#### Capítulo 2: ¿Cómo usamos realmente la web?
En el capítulo 2 del libro de Steve Krug, "No me hagas pensar", profundiza en el concepto de usabilidad y por qué es importante para los sitios web. Explica que la usabilidad se trata de hacer que un producto o servicio sea fácil de usar y enfatiza la importancia de comprender la perspectiva del usuario. Krug explica que el objetivo de la usabilidad es hacer que las cosas sean "evidentes", de modo que los usuarios no tengan que pensar demasiado ni tomarse demasiado tiempo para descubrir cómo usar un producto o servicio. También brinda consejos prácticos sobre cómo crear un diseño efectivo, como usar barras de navegación y menús, facilitar el acceso al contenido, usar imágenes para comunicar el significado y mantener el diseño simple. Finalmente, Krug argumenta que la usabilidad se debe considerar desde el comienzo del proceso de diseño, ya que puede ahorrar tiempo, dinero y la frustración de tener que regresar y solucionar problemas más adelante.
#### Capítulo 3: Diseño de rótulos 101
En el tercer capítulo de No me hagas pensar, Steve Krug se sumerge en el concepto de prueba de usabilidad, que es la práctica de probar un producto o sitio web con un pequeño grupo de usuarios para observar qué tan fácil es para ellos usar el producto. Krug explica que las pruebas de usabilidad son la única forma de saber con certeza cómo interactúan los usuarios con un producto o sitio web, y que es la mejor manera de garantizar que el producto o sitio web sea fácil de usar. Krug explica además que la parte más importante de las pruebas de usabilidad es que se debe realizar temprano y con frecuencia, y que debe involucrar a una variedad de usuarios. Esto asegurará que el producto o sitio web esté diseñado para la audiencia más amplia posible. Finalmente, Krug brinda algunos consejos prácticos para realizar pruebas de usabilidad, como usar una muestra representativa de usuarios y brindarles instrucciones claras.
#### Capítulo 4: ¿Animal, vegetal o mineral?
En el cuarto capítulo del libro No me hagas pensar, Steve Krug analiza el concepto de usabilidad. Explica que la usabilidad es una combinación de factores como la velocidad, la eficiencia y la facilidad de uso, así como la intuición, ya que todos afectan la experiencia del usuario. Krug afirma que el objetivo de la usabilidad es hacer que los sitios web y las aplicaciones sean lo más fáciles e intuitivos de usar para que las personas puedan aprovecharlos al máximo. También enfatiza la importancia de probar los diseños con usuarios reales, ya que esto puede proporcionar información valiosa sobre qué tan útil es un diseño. Finalmente, Krug brinda algunas pautas para una buena usabilidad, como diseñar para escanear, asegurarse de que los enlaces sean visibles y fáciles de hacer clic, y usar un lenguaje claro y simple.
#### Capítulo 5: Evita las palabras innecesarias
En el quinto capítulo del libro "No me hagas pensar" de Steve Krug, el autor discute la idea de "mantenerlo simple". Argumenta que los sitios web más exitosos son aquellos que tienen un diseño simple y directo que permite a los usuarios encontrar rápidamente lo que buscan y completar sus tareas de la manera más eficiente posible. Continúa explicando la importancia de diseñar pensando en el usuario y de asegurarse de que la interfaz sea lo más intuitiva y fácil de usar posible. También habla de la necesidad de mantener el contenido claro y conciso, y de evitar complejidades innecesarias. Finalmente, describe algunos principios generales para el diseño web, como mantener los menús y la navegación simples y consistentes, y usar elementos como imágenes, colores y tipografía de una manera que ayude a guiar a los usuarios a través del sitio.
#### Capítulo 6: Señales en la calle y migas de pan
En el Capítulo 6 de No me hagas pensar de Steve Krug, se centra en la importancia de las pruebas de usabilidad, que es la práctica de observar y entrevistar a los usuarios de un sitio web o aplicación para evaluar su experiencia. Krug explica que las pruebas de usabilidad no solo son fundamentales para garantizar una experiencia de usuario positiva, sino también para descubrir posibles fallas de diseño y áreas de mejora. Continúa describiendo los diferentes tipos de pruebas de usabilidad, como pruebas exploratorias, comparativas y basadas en tareas, y proporciona instrucciones detalladas sobre cómo configurar y ejecutar pruebas de usabilidad. Concluye el capítulo enfatizando que las pruebas de usabilidad no deben pasarse por alto, ya que pueden ser la diferencia entre el éxito y el fracaso de cualquier sitio web o aplicación.
#### Capítulo 7: La teoría del Big Bang del diseño web: La página principal
En el séptimo capítulo de No me hagas pensar, Steve Krug habla sobre la importancia de escribir contenido para la web. Comienza señalando que la redacción web es un oficio, y que la redacción web bien elaborada es esencial para un sitio web exitoso. Krug continúa explicando que la web es diferente de la impresión en muchos aspectos, y que la escritura web debe aprovechar estas diferencias para crear una mejor experiencia de usuario. Habla sobre la necesidad de mantener las oraciones cortas y usar palabras simples, así como también cómo usar el diseño y los espacios en blanco para ayudar a guiar a los usuarios a través de la página. También aconseja a los escritores que eviten la jerga y las explicaciones largas, y que usen títulos y encabezados para ayudar a dividir la página y facilitar el escaneo. Finalmente, Krug alienta a los escritores a usar un lenguaje que sea tanto conversacional como profesional, y que escriban pensando en el usuario en todo momento.
#### Capítulo 8: El granjero y el vaquero deben ser amigos
En el Capítulo 8 del libro de Steve Krug, No Me Hagas Pensar, habla sobre la importancia de comprender las necesidades y deseos de los usuarios al crear sitios web. Él enfatiza que el diseño centrado en el usuario requiere que el creador del sitio web se ponga en el lugar del usuario y piense en cómo navegará por el sitio, qué información necesitará y cómo interactuará con el sitio web. Krug explica que el usuario debe ser quien guíe el diseño del sitio y que el sitio debe diseñarse según sus necesidades, no las del diseñador. También describe algunas preguntas que los diseñadores deben hacerse al crear un sitio web, como: ¿qué intentará lograr el usuario en el sitio web? ¿Cómo encontrarán lo que buscan? ¿Qué los motivará a usar el sitio web? Finalmente, Krug enfatiza la importancia de probar el sitio con usuarios reales para garantizar que el diseño sea efectivo.
#### Capítulo 9: Test de usabilidad de 10 céntimos por día
En el noveno capítulo de No me hagas pensar, Steve Krug habla sobre la importancia de crear una jerarquía visual en tu sitio web. Explica el concepto de "aroma de información", que es la idea de que los usuarios deben tener una idea clara de a dónde ir y qué hacer tan pronto como lleguen a una página. Esto se puede lograr a través de una jerarquía visual bien diseñada que resalte los elementos más importantes de la página y dirija la atención del usuario hacia ellos. Krug también menciona la idea de "divulgación progresiva", que es la idea de revelar gradualmente más información a medida que el usuario avanza en el sitio. Él explica que el objetivo de la divulgación progresiva es proporcionar la cantidad justa de información en cada paso, para que el usuario nunca se sienta abrumado. Krug termina el capítulo enfatizando la necesidad de probar y refinar continuamente la jerarquía visual de un sitio web para garantizar una usabilidad óptima.
#### Capítulo 10: Mobile. Ya no es solo una ciudad de Alabama
En el capítulo 10 del libro de Steve Krug, Don't Make Me Think, explora la importancia de las pruebas de usabilidad como una forma de asegurarse de que un sitio web sea tan fácil e intuitivo de usar como sea posible. Comienza explicando qué son las pruebas de usabilidad y cómo funcionan, luego analiza los beneficios de las pruebas y los diversos tipos de pruebas que se pueden realizar. Luego entra en detalles sobre las diferentes etapas de una prueba de usabilidad y las diversas técnicas y herramientas que se pueden usar durante cada etapa. Finalmente, habla sobre cómo prepararse y realizar una prueba de usabilidad, y cómo analizar e incorporar los resultados en el diseño de un sitio web. Krug destaca la importancia de las pruebas de usabilidad como herramienta para garantizar el éxito de un sitio web y anima a cualquier diseñador de sitios web a incorporarlas en su proceso de diseño.
#### Capítulo 11: La usabilidad como cortesía común
En el Capítulo 11 de No me hagas pensar, Steve Krug destaca la importancia de probar los sitios web para garantizar que la experiencia del usuario sea lo más fluida y exitosa posible. Explica que las pruebas deben realizarse tanto en dispositivos de escritorio como móviles, así como en múltiples navegadores para garantizar que el sitio web funcione según lo previsto en cualquier dispositivo o plataforma. Krug sugiere usar varias herramientas para probar el sitio web, como pruebas de usabilidad, encuestas de usuarios y grupos focales. También explica la importancia de verificar la accesibilidad, asegurándose de que el sitio web sea compatible con lectores de pantalla y otras herramientas de accesibilidad. Krug también destaca la importancia de mantener el sitio web actualizado, corregir los enlaces o las imágenes rotas y asegurarse de que los cambios se prueben antes de implementarlos. Finalmente, Krug destaca la importancia de rastrear los datos y análisis del sitio web para garantizar que el sitio web funcione como se espera.
#### Capítulo 12: La accesibilidad y tú
En el capítulo doce del libro, Steve Krug explica la importancia de la experiencia del usuario en el diseño web. Él enfatiza que la experiencia del usuario no se trata solo de hacer que un sitio web se vea atractivo, sino también de hacer que sea fácil de usar. Recomienda tomarse el tiempo para comprender cómo piensan los usuarios y cómo interactúan con los sitios web. También alienta a los diseñadores web a centrarse en la experiencia del usuario con el sitio web, en lugar de lo que creen que se ve bien. Krug también enfatiza la necesidad de probar sitios web con diferentes usuarios para garantizar que el diseño funcione para todo tipo de usuarios. Finalmente, sugiere considerar la experiencia del usuario al realizar cambios en un sitio web, ya que cualquier cambio debería hacer que el sitio web sea más fácil de usar y no más difícil.
#### Capítulo 13: Guía para los perplejos: consigue que la usabilidad suceda
In the thirteenth chapter of "No Me Hagas Pensar", Steve Krug explains the importance of making information easy to find on websites. He begins by noting that the process of finding something on a website is often a source of frustration, and that it's essential for website creators to design their sites in a way that makes it easy for users to find what they're looking for. He then goes on to explain the importance of organizing content in a logical way, using menus, labels, and search functions that make sense to the user. He also discusses the need for website creators to think about the user's point of view and how they might go about finding the information they need. Finally, he emphasizes the importance of testing the website with users to ensure that the design is effective and intuitive.
#### Conclusión
No me hagas pensar de Steve Krug es un libro increíble sobre el diseño de interfaces de usuario. Está lleno de gran conocimiento práctico sobre cómo hacer que un producto web sea fácil de usar para los usuarios. El libro es fácil de leer y se centra en conceptos prácticos, con numerosos ejemplos. El lenguaje es simple y los principios descritos son fácilmente aplicables a proyectos de diseño de interfaces de usuario. Recomiendo encarecidamente este libro a cualquiera que esté interesado en el diseño de interfaces de usuario.

# Seminario 3

## Fecha - 21 / 10 / 2022
### Trabajo 1 : Entrada a la bitácora sobre adaptabilidad
#### UO acabado en 2 : Buscar y comentar 3 artículos en revistas especializadas en adaptabilidad Web
><a href="https://sauvage-atelier.com/adaptabilidad-en-website/">Artículo 1</a>: En este artículo se nos habla sobre diversos puntos de la adaptabilidad web de cara a porqué deberías implementarla en tu sitio web y cómo deberías hacerlo. En estos puntos pasamos desde cómo y porqué realizar esta transición a la adaptabilidad hasta cuales son las ventajas y desventajas de esta aplicación. Concluye todo esto recordándonos la importancia de la adaptabilidad por el creciente uso de dispositivos móviles además de advertirnos de que las páginas adaptables siempre tendrán preferencia y estarán mejor posicionadas de cara a las búsquedas.

><a href="https://business.tutsplus.com/es/tutorials/what-is-responsive-web-design-definition-examples--cms-30843">Artículo 2</a>: En este artículo se nos da un repaso general a lo que sería un diseño web adaptable. En este artículo podremos encontrar los siguientes puntos de importancia:
> - Principios básicos del diseño web adaptable
> - Como funciona el diseño web adaptable en la vida real
> - Por qué necesitamos un diseño web adaptable en nuestras aplicaciones web
> - Por donde empezar para hacer un diseño web adaptable
> 
> En cada una de las partes que he mencionado con anterioridad el articulo nos muestra los diferentes puntos contenidos dentro de estas proveyéndonos de una pequeña explicación de cada uno de ellos. En el artículo se concluye diciéndo que el diseño web adaptable es algo que ha llegado para quedarse y que tiene muchas ventajas que pueden beneficiar al balance final de cualquier negocio.

><a href="https://www.latevaweb.com/diseno-web-adaptable">Artículo 3</a>: En este tercer artículo se nos presenta la adaptabilidad web centrada principalmente en el creciente uso de los dispositivos móviles de manera cotidiana. Comienza dando un repaso por cómo la web ha pasado de estar centrada pricipalmente en el uso del ordenador a cómo a día de hoy el uso del dispositivo móvil es el principal modo de consultar la misma por la comodidad que este proporciona. Seguido de lo anterior nos explica de manera sencilla lo que es el diseño web y como no surgió con el principal motivo de adaptar las páginas web a los dispositivos móviles. También menciona algunas técnicas que se utilizaban antes para representar las web en los diversos dispositivos.
>
>A continuación nos presenta las características principales de un diseño web adaptable analizándolas de manera sencilla y breve. Nos presenta también las diferencias entre un diseño web responsivo y uno adaptable aclarando la principal difenrecia entre estos métodos. Por último nos presenta la herramienta de Google la cual nos permite verificar si nuestro sitio web está adaptado de manera correcta a dispositivos móviles.
### Trabajo 2 : Búsqueda de herramientas de adaptabilidad
#### Escribir una entrada sobre 3 herramientas de adaptabilida Web

*Uso y opinión de las herramientas:*

- <a href="https://www.bing.com/webmaster/tools/mobile-friendliness">Bing-mobile friendliness test tool</a>: Esta herramienta nos permite comprobar de manera sencilla la adaptabilidad de nuestro sitio web dándonos unas pequeñas indicaciones de los posibles fallos que se puedan estar produciendo. Su funcionamiento es sencillo, simplemente introducir el enlace de nuestra pagina en el cuadro de texto y tras unos instantes se nos mostrará el resultado de la prueba.
- <a href="http://responsivetesttool.com/">Responsive Tool</a>: Esta herramienta nos permite visualizar en diferentes dispositivos nuestra pagina web para comprobar si se adapta de manera correcta a estos. El funcionamiento es sencillo, tras poner la url en el cuadro de texto se nos mostrará la pagina en el dispositivo mostrado por defecto. Arriba a la izquierda podremos modificar los dispositivos o resoluciones para poder comprobar la adaptabilidad en distintos tamaños de pantalla o dispositivos. El único problema es que no tiene ninguna función a parte de la visualización en dispositivos.
- <a href="https://developer.chrome.com/docs/devtools/">Dev Tools</a>: Esta herramienta es la más sencilla debido a que viene por defecto con cualquier navegador. Nos mostrará, al igual que la anterior, una previsualización de la página en difentes dispositivos a nuestra elección. El problema de esta es el mismo que el de la anterior, más allá de tener una previsualización no tenemos más funciones ni de comprobación ni nada. Para usarla deberemos hacer los siguiente:
  - Hacer clic derecho en la página y seleccionar la opción de inspeccionar
  - En esta vista hacer clic en el botón que se encuentra arriba a la izquierda de la herramienta y que tiene un icono representando un telefono móvil y una tablet
  - Por último sobre la vista de la derecha tendremos un desplegable que nos permitirá cambiar entre las vistas de diferentes dispositivos.
#### Prueba de las herramientas anteriores
*Herramienta de Bing:*

Esta herramienta es útil pero bastante sencilla ya que no muestra mucho detalle de los errores. Solo tenemos comprobación de cuatro puntos principales y no nos da demasiada información cuando fallan.

PUNTUACIÓN: 7

<img src="./Multimedia/Fotos/Screenshot_8.png"/>

<img src="./Multimedia/Fotos/Screenshot_11.png"/>

<img src="./Multimedia/Fotos/Screenshot_15.png"/>

<img src="./Multimedia/Fotos/Screenshot_19.png"/>

*Herramienta de Responsive Tool:*

Esta herramienta es sencilla pero efectiva de cara a comprobar la adaptabilidad en un gran número de dispositivos. A pesar de esto la herramienta es bastante simple y no proporciona información de errores. Incluso, como se puede ver en la página del principado de asturias, en ciertos casos no es capaz de cargar la página.

PUNTUACIÓN: 6

<img src="./Multimedia/Fotos/Screenshot_9.png"/>

<img src="./Multimedia/Fotos/Screenshot_12.png"/>

<img src="./Multimedia/Fotos/Screenshot_16.png"/>

<img src="./Multimedia/Fotos/Screenshot_20.png"/>

*Herramientas de Dev Tools:*

Las Dev Tools de los navegadores son fáciles de usar y no requieren entrar a ninguna página externa, podríamos decir que se puede hacer una comprobación rápida en caliente de la adaptabilidad. Los problemas principales son la falta de comprobación de errores y que no hay muchos dispositivos disponibles a probar a pesar de que tenemos la opción de redimensionar a placer veo de más utilidad tener tamaños de dispositivos concretos.

PUNTUACIÓN: 5

<img src="./Multimedia/Fotos/Screenshot_10.png"/>

<img src="./Multimedia/Fotos/Screenshot_13.png"/>

<img src="./Multimedia/Fotos/Screenshot_17.png"/>

<img src="./Multimedia/Fotos/Screenshot_21.png"/>

*Herramienta de Google (Usada a modo de comparación):*

Esta herramienta la he puesto más que nada como comparación ya que es la herramienta propuesta en el propio seminario y la que usamos en nuestras prácticas de laboratorio. Creo que es un buen ejemplo de herramienta. Podemos comprobar que no coincide exactamente con la de Bing en los errores obtenidos ya que cada una nos da errores en una página diferente. La principal diferencia está en como muestra los errores. A diferencia de la de Bing esta nos da los errores con más detalles como podemos ver en el ejemplo de la página del concejo de Valdés en la que la herramienta de google nos da varios errores.

<img src="./Multimedia/Fotos/Screenshot_7.png"/>

<img src="./Multimedia/Fotos/Screenshot_14.png"/>

<img src="./Multimedia/Fotos/Screenshot_18.png"/>

<img src="./Multimedia/Fotos/Screenshot_22.png"/>

*Comparativa de características*:

|                             | Herramienta de Bing | Responsive Tool | DevTools | Herramienta de Google |
|-----------------------------|:-------------------:|:---------------:|:--------:|:---------------------:|
| Muestra errores             |         SI          |         NO      |    NO    |          SI           |
| Ofrece soluciones           |         SI          |         NO      |    NO    |          SI           |
| Visionado en dispositivos   |         SI          |         SI      |    SI    |          SI           |

### Trabajo 3 : Comprobar la adaptabilidad
#### Escribir una entrada sobre la comprobación de adaptabilidad del ejercicio de la calculadora RPN
El único cambio necesario de cara a que sea adaptable es el de añadir:
- ```height: fit-content``` a la zona de la botonera dentro del css
- ```max-width: max-content;margin: auto;``` a la zona del body para que se centre de manera correcta en todos los dispositivos cosa que antes de esta modificación no funcionaba siempre.
><a href="">Herramienta de Google</a>: La primera herramienta propuesta nos da que la página web es perfectamente adaptable
<img src="./Multimedia/Fotos/Screenshot_6.png" alt="Herramienta de Google"/>

><a href="https://www.w3.org/2016/11/mobile-checker-disabled/">Herramienta del W3</a> Esta página, que es la de la segunda herramienta propuesta, se encuentra aún desabilidata por lo que es imposible realizar la comprobación.

><a href="https://www.bing.com/webmaster/tools/mobile-friendliness">Herramienta 1</a>: 
La primera herramienta usada es la propia herramienta Bing de Microsoft, después de hacer un pequeño cambio en el comportamiento de los botones de la calculadora pasa sin problema.
<img src="./Multimedia/Fotos/Screenshot_23.png" alt="Primera herramienta propuesta, Bing"/>

><a href="http://responsivetesttool.com/">Herramienta 2</a>: La segunda herramienta no nos da una descripción de los errores pero si nos permite ver la adaptabilidad de nuestra pagina en diferentes dispositivos, por lo que he podido revisar es perfectamente adaptable a estos.
<img src="./Multimedia/Fotos/Screenshot_4.png" alt="Segunda herramienta propuesta, Responsive Tool"/>

><a href="https://developer.chrome.com/docs/devtools/">Herramienta 3</a>: Las propias Dev Tools de los navegadores mismamente nos permiten también realizar una comprobación de adaptabilidad y en este caso la calculadora también pasa la prueba de manera exitosa.
<img src="./Multimedia/Fotos/Screenshot_5.png" alt="Tercera herramienta propuesta, Dev Tools"/>

# Seminario 4

## Fecha - 04 / 11 / 2022
### Trabajo 1 : Entrada a la bitácora sobre "Accesibilidad en la Web"
#### UO acabado en 2 : Entrada sobre 3 sitios Web especializados en accesibilidad en la Web
><a href="https://www.iberdrola.com/innovacion/que-es-accesibilidad-web">Página 1</a>: Creo que esta página es interesante de cara a entender un poco la accesibilidad en la web. Nos explica qué es, las pautas a seguir para implementarla en nuestros proyectos como son la accesibilidad del contenido, de las herramientas de autor y los agentes de usuario, nos habla un poco de los niveles de accesibilidad que existen y acaba presentandonos algunas herramientas para medir el nivel de accesibilidad de una página que en este caso son TAW y HERA.

><a href="http://accesibilidadweb.dlsi.ua.es/">Página 2</a>: En este caso tenemos la página de la universidad de alicante. En esta página podemos ver de manera estructurada los siguiente:
>- Definición de Accesibilidad
>- Introducción a la accesibilidad
>- Por qué es importante la accesibilidad 
>- Por qué en muchos casos no se implementa
>- Quienes son los beneficiarios de la implementación de sitios web accesibles
>- Mitos acerca de la accesibilidad
>- Beneficios de los sitios accesibles
>- Cómo se logra tener un sitio accesible
>- Las pautas a seguir para conseguir la accesibilidad en el contenido web
>- Diversa bibliografía acerca del tema como libros, revistas, congresos y otros

><a href="https://www.seoenmexico.com.mx/blog/accesibilidad-web/">Página 3</a>: En esta última página tras darnos una pequeña definición se nos pasa a comentar los diferentes elementos de la accesibilidad web o puntos clave. Seguidamente nos muestra diferentes herramientas para comprobar la accesibilidad de un contenido web y termina dándonos unas recomendaciones básicas como tipografía clara, buen contraste de colores, describir imágenes o audios, usar enlaces de hipertexto y organizar las páginas con encabezados, listas...

### Trabajo 2 : Sitio web de una comunidad o ciudad autónoma
#### Módulo 18 de mi UO es 8: Escribir una entrada sobre la web de Cataluña

Si tuviera que destacar algo de la accesibilidad de esta página sería al inexistencia de la misma. Hay una cantidad de errores y warnings de accesibilidad inmensa, pasando por id repetidos, imágenes sin texto alternativo, falta de labels asociadas con ciertos elementos, labels sin texto... Podría seguir diciendo errores pero está página sería dificilmente navegable por personas con ciertos tipos de problemas o discapacidades. 

Primero la herramienta **Wave** nos da 71 errores importantes entre los que se encuentran cosas que he mencionado anteriormente. Además también da 61 errores de contraste de color y una inmensa cantidad de warnings.

<img src="./Multimedia/Fotos/Screenshot_24.png" alt="Wave Tool"/>

<img src="./Multimedia/Fotos/Screenshot_25.png" alt="Wave Tool"/>

En la herramienta de **AChecker** al igual que en la anterior nos da una cantidad considerable de errores y warnings. Entre estos se encuentran más o menos los mismo fallos que en la anterior herramienta, id repetidos, elementos que necesitan texto vacíos, imágenes sin el texto alternativo...

<img src="./Multimedia/Fotos/Screenshot_26.png" alt="AChecker"/>

<img src="./Multimedia/Fotos/Screenshot_27.png" alt="AChecker"/>

<img src="./Multimedia/Fotos/Screenshot_28.png" alt="Achecker"/>

En la última herramienta propuesta, la herramienta **Taw** tenemos un comportamiento parecido, 207 problemas graves, 331 advertencias y 14 criterios no verificados. He de decir que en este caso tuve que usar la versión en catalán de la página ya que la versión en español se cayó durante el transcurso de las pruebas por lo que podemos ver perfectamente que la página no está precisamente cuidada al detalle.

<img src="./Multimedia/Fotos/Screenshot_63.png" alt="Taw"/>

Debajo tenemos la lista de errores detallados que nos proporciona la herramienta Taw separados en Perceptibles, Operables, Comprensibles y Robustos.

<img src="./Multimedia/Fotos/Screenshot_36.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_37.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_38.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_39.png" alt="Taw"/>

### Trabajo 3 : Sitio Web de un ayuntamiento asturiano

#### Comprobar la accesibilidad haciendo uso de las herramientas proporcionadas en el Seminario

En la primera herramienta probada, **AChecker** principalmente tenemos errores de labels vacías, imágenes a las que les falta el texto alternativo, labels asociadas a inputs vacías y elementos de estilo mezclados dentro del html como etiquetas ```<i>``` para poner elementos en cursiva o etiquetas ```<b>``` para ponerlo en negrita. Además también hay un error de verificación debido a que se usa una lista para formatear texto de manera incorrecta.

<img src="./Multimedia/Fotos/Screenshot_29.png" alt="Achecker"/>

<img src="./Multimedia/Fotos/Screenshot_30.png" alt="Achecker"/>

<img src="./Multimedia/Fotos/Screenshot_31.png" alt="Achecker"/>

En la herramienta **Wave** obtenemos 17 errores y 5 errores de contraste. Entre estos están principalmente los mismos que encontrabamos en el Achecker.

<img src="./Multimedia/Fotos/Screenshot_64.png" alt="Wave"/>

<img src="./Multimedia/Fotos/Screenshot_65.png" alt="Wave"/>

En la herramienta Taw entontramos 29 errores graves, 93 advertencias y 17 no verificados que necesitan comprobación manual

<img src="./Multimedia/Fotos/Screenshot_66.png" alt="Taw"/>

Aquí tenemos la lista detallada de los errores que proporciona Taw separados en Perceptibles, Operables, Comprensibles y Robustos.

<img src="./Multimedia/Fotos/Screenshot_32.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_33.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_34.png" alt="Taw"/>

<img src="./Multimedia/Fotos/Screenshot_35.png" alt="Taw"/>

La accesibilidad del sitio web parece más o menos aceptable si tenemos en cuenta la cantidad de errores que tenía por ejemplo, la página de cataluña. Lo que si parece es que la plantilla usada para la página es común para al menos una gran parte de los ayuntamientos asturianos por lo que puede que modificar estos errores no sea una cosa que puedan hacer con facilidad. Esto no ocurre en todas las páginas pero si en muchas de las que he podido comprobar por lo que puede ser una plantilla genérica que utilizan.

# Seminario 5

## Fecha - 18 / 11 / 2022
### Trabajo 1 : Prueba de usabilidad de la calculadora RPN
#### Escribir una entrada haciendo una prueba de usabilidad a un grupo de usuarios con respecto al uso de la calculadora RPN

### Tanda 1

- **Tanda 1 Primera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |62|
| Sexo                        |Hombre|
| Nivel Informático           |4|
| Comentarios                 |Las operaciones son bastante complejas de entender al comienzo debido a la costumbre de usar calculadoras en las que se introducen los signos de operación entre medias. Al principio sin información es complejo entender como operar con la calculadora hasta que se te explica. El orden de las opearaciones en la pantalla es confuso ya que las operaciones complejas se deben leer de derecha a izquierda en vez de derecha a izquierda por el orden de los numeros|
| Propuestas                  |Consideraría añadir un alguna opción de información para entender el uso básico de la calculadora y cambiar el color del enter por algo que destaque más|
| Valoración de la APP        |6|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 349 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_40.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/IMG_0125.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-50-29-609_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 54 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_42.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/IMG_0123.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-49-32-823_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 416 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_44.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_45.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_46.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_47.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_48.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/IMG_0126.png" alt="RPN Proceso persona 1 tarea 3" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-51-03-970_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 3" width="300"/>

- **Tanda 1 Segunda Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |17|
| Sexo                        |Mujer|
| Nivel Informático           |6|
| Comentarios                 |No entendía como se realizaban las operaciones, intentaba realizarlas como en una calculadora convencional. Acabó cansada porque no era capaz de realizar ningún calculo correctamente|
| Propuestas                  |Estaría bien tener algún tipo de ayuda de cara al aprendizaje de uso|
| Valoración de la APP        |5|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


- **Tanda 1 Tercera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |86|
| Sexo                        |Mujer|
| Nivel Informático           |5|
| Comentarios                 |Le costó adaptarse al principio pero acabó pudiendo realizar algunas operaciones. Le hubiera gustado tener algo más de ayuda para saber como funcionaba|
| Propuestas                  |Añadir algo de ayuda|
| Valoración de la APP        |8 - Le gustaba el diseño|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 243 |
|Realización de la tarea       | SI |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/IMG_0123.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-49-32-823_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


- **Tanda 1 Cuarta Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |58|
| Sexo                        |Mujer|
| Nivel Informático           |7|
| Comentarios                 |La colocación de algunos botones no le convencía mucho y le gustaría haber tenído unos botones algo más grandes|
| Propuestas                  |Consideraría modificar un poco la botonera de la calculadora|
| Valoración de la APP        |7|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 298 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_40.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/IMG_0125.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-50-29-609_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 78 |
|Realización de la tarea       | SI |

<img src="./Multimedia/Fotos/Screenshot_42.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/IMG_0123.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-16-49-32-823_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |



### Tanda 2
- **Tanda 2 Primera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |96|
| Sexo                        |Hombre|
| Nivel Informático           |2|
| Comentarios                 |La calculadora era demasiado difícil de comprender y a pesar de la información de ayuda el bajo nivel informático le imposibilita realizar las operaciones|
| Propuestas                  |Una calculadora de toda la vida mejor|
| Valoración de la APP        |3|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


- **Tanda 2 Segunda Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |38|
| Sexo                        |Mujer|
| Nivel Informático           |9|
| Comentarios                 |La calculadora está aceptablemente estructurada y el botón de ayuda provee información básica necesaria|
| Propuestas                  |Ninguna objeción, quizás para otro usuario se necesitaría algo más de información en la parte de ayuda|
| Valoración de la APP        |6|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 150 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-42-55-616_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/88B76E2F-7A56-45FE-BE95-93F993447E93.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 10 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-03-860_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/3F41AEDE-9A99-4D1C-A1A2-5B6F83DF20F6.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 200 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_48.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-17-741_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 3" width="300"/>

<img src="./Multimedia/Fotos/3F9BFAD5-B354-4CCD-99E5-378C3FA44C69.png" alt="RPN Proceso persona 1 tarea 3" width="300"/>


- **Tanda 2 Tercera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |46|
| Sexo                        |Hombre|
| Nivel Informático           |1|
| Comentarios                 |La ayuda proporcionada es insuficiente|
| Propuestas                  |El apartado de ayuda necesita algo más de información|
| Valoración de la APP        |7|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |


- **Tanda 2 Cuarta Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |12|
| Sexo                        |Hombre|
| Nivel Informático           |8|
| Comentarios                 |La calculadora le resultó un poco extraña de primeras pero después de acostumbrarse tras la primera tarea pudo completar la segunda. La tercera tarea se le resistió y acabó cansándose antes de que acabara el tiempo|
| Propuestas                  |Un poco más de información en la ventana de ayuda|
| Valoración de la APP        |8|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 496 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-42-55-616_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/88B76E2F-7A56-45FE-BE95-93F993447E93.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 40 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-03-860_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/3F41AEDE-9A99-4D1C-A1A2-5B6F83DF20F6.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 200 |
|Realización de la tarea       | NO  |

### Tanda 3

- **Tanda 3 Primera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |6|
| Sexo                        |Mujer|
| Nivel Informático           |3|
| Comentarios                 |Comenta que le resulta muy extraña y que no entiende lo que dice la ayuda, puede que tenga un lenguaje muy técnico|
| Propuestas                  |Mejoral contenido de la parte de ayuda|
| Valoración de la APP        |2|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

- **Tanda 3 Segunda Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |48|
| Sexo                        |Hombre|
| Nivel Informático           |5|
| Comentarios                 |La calculadora es entendible aunque puede que compleja de primeras para gente que no sepa manejarla, el apartado de ayuda contiene bastante información que parece ser suficiente para las tareas propuestas y otras operaciones básicas|
| Propuestas                  |Está suficientemente bien para las tareas propuestas|
| Valoración de la APP        |9|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 113 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-42-55-616_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/88B76E2F-7A56-45FE-BE95-93F993447E93.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 32 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-03-860_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/3F41AEDE-9A99-4D1C-A1A2-5B6F83DF20F6.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 256 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_48.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-17-741_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 3" width="300"/>

<img src="./Multimedia/Fotos/3F9BFAD5-B354-4CCD-99E5-378C3FA44C69.png" alt="RPN Proceso persona 1 tarea 3" width="300"/>

- **Tanda 3 Tercera Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |56|
| Sexo                        |Mujer|
| Nivel Informático           |4|
| Comentarios                 |El apartado de ayuda es un poco complejo de entender por el vocabulario pero se puede sacar más o menos el resultado con tiempo|
| Propuestas                  |Mejorar el texto contenido en ayuda, la cantidad es suficiente pero quizás debería ser un poco más "para todos" y no tanto para gente más puesta|
| Valoración de la APP        |6|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 338 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-42-55-616_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/88B76E2F-7A56-45FE-BE95-93F993447E93.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 243 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-03-860_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/3F41AEDE-9A99-4D1C-A1A2-5B6F83DF20F6.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 500 |
|Realización de la tarea       | NO  |

- **Tanda 3 Cuarta Persona**

|#                            |Datos|
|-----------------------------|:---:|
| Edad                        |26|
| Sexo                        |Hombre|
| Nivel Informático           |8|
| Comentarios                 |La calculadora funciona como se espera, cree que es una buena interpretación de una calculadora RPN|
| Propuestas                  |Ningún comentario, funcionamiento correcto|
| Valoración de la APP        |9|

|Tarea 1||
|--|---|
|Tiempo empleado (en segundos) | 69 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_41.png" alt="RPN Proceso persona 1 tarea 1"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-42-55-616_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 1" width="300"/>

<img src="./Multimedia/Fotos/88B76E2F-7A56-45FE-BE95-93F993447E93.png" alt="RPN Proceso persona 1 tarea 1" width="300"/>

|Tarea 2||
|--|---|
|Tiempo empleado (en segundos) | 23 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_43.png" alt="RPN Proceso persona 1 tarea 2"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-03-860_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 2" width="300"/>

<img src="./Multimedia/Fotos/3F41AEDE-9A99-4D1C-A1A2-5B6F83DF20F6.png" alt="RPN Proceso persona 1 tarea 2" width="300"/>

|Tarea 3||
|--|---|
|Tiempo empleado (en segundos) | 232 |
|Realización de la tarea       | SI  |

<img src="./Multimedia/Fotos/Screenshot_48.png" alt="RPN Proceso persona 1 tarea 3"/>

<img src="./Multimedia/Fotos/Screenshot_2022-12-18-17-43-17-741_com.opera.touch.jpg" alt="RPN Proceso persona 1 tarea 3" width="300"/>

<img src="./Multimedia/Fotos/3F9BFAD5-B354-4CCD-99E5-378C3FA44C69.png" alt="RPN Proceso persona 1 tarea 3" width="300"/>

### Mejoras implementadas
#### Tanda 1
- Poner el botón de enter de un color más llamativo: Uno de los primeros errores recalcados y si que es verdad que el hechod e ver el botón más llamativo ha ayudado al menos a que la gente tratara de darle como segunda opción cuando veían que la calculadora no funcionaba como una normal.
- Botón de ayuda: Fue una petición general, aunque ya me lo esperaba debido a que este tipo de calculadoras no es muy común entre la gran mayoría de gente.
- Recolocación de algunos elementos de la botonera: Algunas personas se me quejaron que era un poco raro la colocación de algunos botones. Reorganicé principalemente un poquito la parte del '.', el '0' y el 'ENTER' y parece que con eso se ha simplificado el uso.
- Aumento del tamaño de los botones: Esto parece simple pero de cara a el uso en dispositivos más pequeños como la tablet y el móvil la verdad que en general me agradecieron haber agrandado el tamaño de los botones y la fuente de estos para que fuera más facil de pulsarlos
#### Tanda 2
- Aumento del apartado de ayuda: A pesar de haber añadido un apartado de ayuda parece ser que era insuficiente por lo que añadí algo más de información
#### Tanda 3
- Perfeccionamiento de texto de la sección de ayuda: Las personas más experimentadas o con mayor vocabulario no han tenido tanto problema pero si que es verdad que no todo el mundo es capaz de entender el mismo vocabulario el cual era más tecnico de cara a la primera versión que implementé del botón de ayuda, esto se mejoró y en general los usuarios han quedado bastante contentos.


### Estadísticas
- Edad Media de los usuarios: 45,917 años
- Frecuencias de % de intervalos de edad:
  - De 18 a 25: 25%
  - De 25 a 50: 33,33%
  - De 50 a 75: 25%
  - 75 o más: 16,67%
- Freciencias del % de cada tipo de género de usuarios:
  - Hombres: 50%
  - Mujeres: 50%
- Tiempo medio de cada tarea:
  - Tarea 1: 359,41
  - Tarea 2: 226,91
  - Tarea 3: 400,33
- Porcentaje de usuarios que han realizado correctamente la tarea:
  - Tarea 1: 58,33%
  - Tarea 2: 66,67%
  - Tarea 3: 25%
- Valor medio de la aplicación: 6,33

### Gráficos

<img src="./Multimedia/Fotos/Screenshot_49.png" alt="Frecuencia Edades" width="480"/>
<img src="./Multimedia/Fotos/Screenshot_50.png" alt="Frecuencia Géneros" width="480"/>
<img src="./Multimedia/Fotos/Screenshot_51.png" alt="Tiempo medio de tareas" width="480"/>
<img src="./Multimedia/Fotos/Screenshot_52.png" alt="Porcentaje de realización correcta" width="480"/>

### Conclusiones
En parte me sentí extraño realizando esta prueba ya que nunca había mostrado a personas ajenas a la universidad ninguno de mis proyectos. En general la respuesta de los usuarios ha sido más o menos positiva pero este acercamiento de mi trabajo a usuarios ajenos a mi carrera me ha hecho darme cuenta de lo importante que es explicar todo poniendome en el lugar de una persona que no entiende de informática o no tiene un conocimiento tan técnico. Me ha hecho darme cuenta de que en una aplicación no todo es apariencia ya que por muy bonito que sea un proyecto si no hace bien su funcionalidad o no es capaz de transmitirle a los usuarios con facilidad lo que deben hacer no sirve de nada.

Estoy satisfecho de manera general con las pruebas que he realizado y agradecido con la gente que me ha ayudado en la realización de todas estas pruebas participando como "conejillos de indias" de mi trabajo.

# Seminario 6

## Fecha - 02 / 12 / 2022
### Trabajo 1 : Nuevas entradas en la bitácora sobre servidores Web
#### Crear 3 nuevas entradas en la bitácora sobre servidores Web
>- Protocolo HTTP:
>
>   ¿Qué es?
>   
>   Todas las direcciones en Internet comienzan por http:// (o https://). Estas siglas hacen referencia al protocolo HTTP, que es el que utiliza el navegador para acceder a una página web. ¿Qué es HTTP, en qué se diferencian las distintas versiones y qué otros conceptos están relacionados con el protocolo?
>   
>   ¿Qué significa?
>   
>   HTTP son las siglas de Hypertext Transfer Protocol, es decir, Protocolo de Transferencia de Hipertexto. Este concepto es uno de los que Tim Berners-Lee desarrolló en el CERN (Suiza) y formaron la base de la World Wide Web: los otros dos son HTML y URI. Mientras que HTML (Hypertext Markup Language) define la estructura de las páginas web, la dirección URL (Uniform Resource Locator), una forma derivada del URI, define cómo se localiza a un recurso (p. ej., una página web) en Internet. El protocolo HTTP, en cambio, regula cómo el servidor envía este recurso al cliente.
>
>   Pero ¿qué significa hipertexto, ese término que forma parte de las siglas HTTP y HTML? Se trata de un concepto que en realidad todos conocemos: el enlace a otros archivos, como los hiperenlaces que se usan en las páginas web para redirigir a otras páginas.
>
>   ¿Qué funciones comple HTTP?
>   
>   Cuando escribes una dirección web en tu navegador y se abre la página que deseas, es porque tu navegador se ha comunicado con el servidor web por HTTP. Dicho de otra manera, el protocolo HTTP es el código o lenguaje en el que el navegador le comunica al servidor qué página quiere visualizar.
>
>   ¿Cómo funciona HTTP?
>   
>   1. En la barra de direcciones del navegador, el usuario teclea example.com.
>   2. El navegador envía esa solicitud, es decir, la petición HTTP, al servidor web que administre el dominio example.com. Normalmente, la solicitud del cliente dice algo así como “Envíame este archivo”, pero también puede ser simplemente “¿Tienes este archivo?”.
>   3. El servidor web recibe la solicitud HTTP, busca el archivo en cuestión (en nuestro ejemplo, la página de inicio de example.com, que corresponde al archivo index.html) y envía en primer lugar una cabecera o header. Esta cabecera le comunica al cliente, mediante un código de estado, el resultado de la búsqueda. Para conocer más detalles acerca de los códigos de estado, no te pierdas nuestro artículo al respecto.
>   4. Si se ha encontrado el archivo solicitado y el cliente ha solicitado recibirlo (y no solo saber si existe), el servidor envía, tras el header, el message bodyo cuerpo del mensaje, es decir, el contenido solicitado: en nuestro ejemplo, el archivo index.html.
>   5. El navegador recibe el archivo y lo abre en forma de página web.
>
>   ¿Para qué se usa HTTP?
>   
>   - Cuando se creó, el protocolo HTTP solo servía para solicitar documentos HTML a un servidor web. Hoy en día, en cambio, se usa con gran variedad de fines:
>   - Los navegadores usan HTTP para solicitar cualquier tipo de archivo habitual en las webs modernas: de texto, de vídeo, de código de programación, etc.
>   - Los programas de aplicación utilizan HTTP para cargar archivos y actualizaciones de servidores lejanos.
>   - La API basada en REST es una solución que utiliza HTTP para controlar servicios web.
>   - Otra tecnología que se basa en HTTP es WebDAV.
>   - En la comunicación de máquina a máquina se utiliza HTTP como protocolo de comunicación entre servicios web.
>   - Los reproductores multimedia también utilizan HTTP.
>   - Las operaciones de acceso a bases de datos en la web y, por lo tanto, también las operaciones CRUD, pueden realizarse también mediante HTTP.

>- **Apache**
>   
>   **¿Qué es un servidor Web?**
>   
>   Un servidor web es un programa de tipo informático que se encarga de procesar una aplicación del lado del servidor, cada una de las cuales puede acceder a archivos almacenados en un servidor físico y usarlos para diferentes propósitos, mediante conexiones bidireccionales o unidireccionales con la máquina del cliente, tras lo cual se genera una respuesta del lado del cliente.
>   
>   El trabajo de un servidor es servir sitios web en Internet. Para lograr ese objetivo, actúa como un intermediario entre el servidor y las máquinas de los clientes. Extrae el contenido del servidor en cada solicitud de usuario y lo envía a la web.
>   
>   El mayor desafío de un servidor es servir a muchos usuarios diferentes de la web al mismo tiempo, cada uno de los cuales solicita diferentes páginas. Los servidores web procesan archivos escritos en diferentes lenguajes de programación como PHP, Python, Java y otros.
>   
>   Los convierten en archivos HTML estáticos y le entregan estos archivos al navegador de los usuarios de la web. Cuando escuches la palabra servidor web, piensa que es la herramienta responsable de la comunicación adecuada entre el servidor y el cliente.
>
>   **¿Cómo funciona Apache?**
>   
>   Aunque llamamos a Apache un servidor web, no es un servidor físico, sino un software que se ejecuta en un servidor. Su trabajo es establecer una conexión entre un servidor y los navegadores de los visitantes del sitio web (Firefox, Google Chrome, Safari, etc.) mientras envían archivos entre ellos (estructura cliente-servidor). Apache es un software multiplataforma, por lo cual funciona tanto en servidores Unix como en Windows.
>   
>   Cuando un visitante quiere cargar una página de tu sitio web, por ejemplo la página de inicio o tu página «Acerca de nosotros», su navegador le envía una solicitud a tu servidor y Apache le devuelve una respuesta con todos los archivos solicitados (texto, imágenes, etc. ) El servidor y el cliente se comunican a través del protocolo HTTP y Apache es responsable de garantizar una comunicación fluida y segura entre las dos máquinas.
>   
>   Apache es altamente personalizable, ya que tiene una estructura basada en módulos. Los módulos le permiten a los administradores del servidor activar y desactivar funcionalidades adicionales. Apache tiene módulos de seguridad, almacenamiento en caché, reescritura de URL, autenticación de contraseña y más. También puedes ajustar tus propias configuraciones del servidor a través de un archivo llamado .htaccess
>
>   **¿Pros y contras de Apache?**
>   
>   Un servidor web Apache puede ser una excelente opción para ejecutar tu sitio web en una plataforma estable y versátil. Sin embargo, también presenta algunas desventajas a las que debes prestarle atención.
>   
>   *Pros:*
>   
>   - De código abierto y gratuito, incluso para uso comercial.
>   - Software confiable y estable.
>   - Parches de seguridad regulares y actualizados con frecuencia.
>   - Flexible debido a su estructura basada en módulos.
>   - Fácil de configurar para principiantes.
>   - Multiplataforma (funciona tanto en servidores Unix como en Windows).
>   - Viene listo para trabajar con sitios de WordPress.
>   - Enorme comunidad y soporte fácilmente disponible en caso de cualquier problema.
>
>   *Contras:*
>   
>   - Problemas de rendimiento en sitios web con demasiado tráfico.
>   - Demasiadas opciones de configuración pueden generar vulnerabilidades de seguridad.
>   
>   **Entonces resumidamente, ¿Qué es Apache?**
>   
>   Apache es uno de los servidores web más populares que te permite ejecutar un sitio web seguro sin demasiados dolores de cabeza. Es la opción más común de los emprendedores en solitario y pequeñas empresas que desean tener presencia en la web.
>   
>   Puedes instalar un sitio web de WordPress en un servidor web Apache sin ninguna personalización. Además, Apache funciona excelentemente con muchos otros sistemas de administración de contenido (Joomla, Drupal, etc.), marcos web (Django, Laravel, etc.) y lenguajes de programación. Esto lo convierte en una elección sólida para todo tipo de plataformas de hosting web, como VPS o hosting barato compartido.
>
> - **PHP**
>
>   El término PHP es un acrónimo de PHP: Hypertext Preprocessor. PHP es un lenguaje de scripting del lado del servidor diseñado específicamente para el desarrollo web. Es de código abierto, lo que significa que es gratis para descargar y usar. Es muy simple de aprender y usar. Los archivos tienen la extensión ".php".
>
>   Rasmus Lerdorf inspiró la primera versión de PHP y participó en las versiones posteriores. Es un lenguaje interpretado y no requiere un compilador.
>   - El código PHP se ejecuta en el servidor.
>   - Se puede integrar con muchas bases de datos como Oracle, Microsoft SQL Server, MySQL, PostgreSQL, Sybase e Informix.
>   - Es poderoso para mantener un sistema de gestión de contenido como WordPress y se puede utilizar para controlar el acceso de los usuarios.
>   - Es compatible con los principales protocolos como HTTP Basic, HTTP Digest, IMAP, FTP y otros.
>   - Los sitios web como www.facebook.com y www.yahoo.com también se basan en PHP.
>   - Una de las principales razones detrás de esto es que PHP se puede incrustar fácilmente en archivos HTML y los códigos HTML también se pueden escribir en un archivo PHP.
>   - Lo que diferencia a PHP del lenguaje del lado del cliente como HTML es que los códigos PHP se ejecutan en el servidor, mientras que los códigos HTML se representan directamente en el navegador. Los códigos PHP se ejecutan primero en el servidor y luego el resultado se devuelve al navegador.
>   - La única información que el cliente o navegador conoce es el resultado devuelto después de ejecutar el script PHP en el servidor y no los códigos PHP reales presentes en el archivo PHP. Además, los archivos PHP pueden admitir otros lenguajes de scripting del lado del cliente como CSS y JavaScript.
>
>   *Otras características de PHP*
>    - Simple y rápido
>    - Eficaz
>    - Asegurado
>    - Flexible
>    - Multiplataforma, funciona con los principales sistemas operativos como Windows, Linux y macOS.
>    - Código abierto
>    - Potente compatibilidad con bibliotecas
>    - Conectividad de base de datos
>
>   *Porqué usar PHP*
>
>   PHP puede hacer cualquier cosa relacionada con el scripting del lado del servidor o más popularmente conocido como el backend de un sitio web. Por ejemplo, PHP puede recibir datos de formularios, generar contenido dinámico de páginas, puede trabajar con bases de datos, crear sesiones, enviar y recibir cookies, enviar correos electrónicos, etc. También hay muchas funciones hash disponibles en PHP para cifrar los datos de los usuarios, lo que hace que PHP sea seguro y confiable para ser utilizado como un lenguaje de scripting del lado del servidor. Así que estas son algunas de las habilidades de PHP que lo hacen adecuado para ser utilizado como un lenguaje de scripting del lado del servidor. Conocerás más de estas habilidades en otros tutoriales.
Incluso si las habilidades anteriores no lo convencen de PHP, hay algunas características más de PHP. PHP puede ejecutarse en todos los principales sistemas operativos como Windows, Linux, Unix, Mac OS X, etc. Casi todos los principales servidores disponibles hoy en día como Apache soportan PHP. PHP permite utilizar una amplia gama de bases de datos. Y el factor más importante es que es de uso y descarga gratuitos y cualquiera puede descargar PHP desde su fuente oficial: www.php.net.
Consulte la configuración del entorno de desarrollo y la sintaxis básica de PHP en artículos posteriores.
>
>   *Desventajas de PHP*
>    - PHP no es seguro ya que es de código abierto.
>    - No es bueno crear aplicaciones de escritorio.
>    - No es adecuado para aplicaciones web grandes: el código PHP es difícil de mantener ya que no es muy modular.
>    - Problema de modificación: PHP no permite el cambio en el comportamiento central de las aplicaciones web.
### Trabajo 2 : Crear un servidor Web Apache con Ubuntu Linux en Azure
#### Documentar la creación del servidor Web Apache

1. Primero creo la máquina virual al igual que habíamos hecho para el seminario 1. Me da validación correcta y me conecto mediante el uso de ssh y la clave pem
<img src="./Multimedia/Fotos/Screenshot_53.png" alt="Máquina Azure"/>
<img src="./Multimedia/Fotos/Screenshot_54.png" alt="Máquina Azure"/>
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-53-40.png" alt="Máquina Azure"/>

2. Para realizar la instalación de apache primero procedo a realizar un sudo apt update para evitar problemas
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-54-45.png" alt="Máquina Azure"/>

3. Seguidamente procedo a instalar apache en la máquina
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-55-04.png" alt="Máquina Azure"/>

4. Compruebo con este comando si apache está correctamente configurado en el firewall de la máquina, vemos que aparece correctamente permitido.
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-55-30.png" alt="Máquina Azure"/>

5. Con el siguiente comando comprobamos el estado del apache y vemos que está corriendo
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-56-04.png" alt="Máquina Azure"/>

6. Con estos comandos podemos revisar en que dirección se va a localizar nuestra página, en este caso la dirección  usada será 20.77.4.206
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_19-56-54.png" alt="Máquina Azure"/>

7. Finalmente en la carpeta ```/var/www/html``` tendremos el html que la página usará al entrar, aquí es donde deberemos crear los html y css con la misma estructura que teníamos en la práctica
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_20-34-02.png" alt="Máquina Azure"/>

8. Y aquí tenemos el resultado final
<img src="./Multimedia/Fotos/Screenshot_58.png" alt="Máquina Azure"/>

### Trabajo 3 : Instalar LAMP con Ubuntu Linux en Azure
#### Documentar la instalación de LAMP en la máquina Ubuntu Linux de Azure

El proceso de instalación de LAMP está realizado en la misma sesión que el anterior proceso para el HTML por lo que me ahorro toda la parte de la creación de la máquina.

1. Instalamos el lamp con el siguiente comando, el cual instala lamp y todo lo necesario para su uso
<img src="./Multimedia/Fotos/Captura_de_pantalla_de_2022-12-18_21-01-54.png" alt="Máquina Azure"/>

2. En la carpeta en la que previamente habíamos subido el html subimos en este caso el php de la misma manera, ya sea creando los archivo en consola o en este caso como he hecho yo subiendolos mediante filezilla
<img src="./Multimedia/Fotos/Screenshot_62.png" alt="Máquina Azure"/>

3. Abrimos la página de la misma manera que antes y se nos mostrará perfectamente
<img src="./Multimedia/Fotos/Screenshot_61.png" alt="Máquina Azure"/>

4. Eliminamos la máquina virtual y con esto abremos acabado
<img src="./Multimedia/Fotos/Screenshot_67.png" alt="Máquina Azure"/>
<img src="./Multimedia/Fotos/Screenshot_68.png" alt="Máquina Azure" width="700"/>