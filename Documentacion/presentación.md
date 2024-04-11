# Temas Presentación #

## Presentación del equipo: 
Francisco Pereyra: Tengo 38 años Product Owner: Encargado de determinar la prioridad de las funcionalidades de la página.
Lucas Herbon: Scrum Master: Encargado de llevar a cabo las ceremonias de SCRUM y de mantener el tablero KANBAN en JIRA.
Lucas Medina: Developer Full Stack: Encargado de desarrollar el front end y back end del ecommerce.


## Marketing ##

    **Estudio de mercado**
    **Publico objetivo**
    **Demografía**
    **Rango etario**

    Gamers Costumes ofrece indumentaria gamer para un público adulto nacido entre 1980 y 1990. 
    Apela a la nostalgia, brindado productos de grandes franquicias que surgieron en los 90' y 
    perduran hasta nuestros días como Mario Bros, La Leyenda de Zelda, Street Figther y Mortal Kombat.
    El compromiso de Gamers Costumes es llevar las ventas online al siguiente nivel ofreciendo
    remeras de 100% algodón y estampados flexibles, durables y de alta resolución.

## Diseño UX/UI ##

    **Teoría del color**
    **Armonía del diseño: Criterios Homogenos, hojas de estilo compartidas. Coherencia y cohesión.
    **Accesibilidad: Estructura sémantica, fotos con textos alternativos, contraste de color.
    **Diseño responsivo.
    **Performance y tiempos de carga.

    Ofreciendo una paleta de colores que recuerda al control de SUPER NINTENDO, se apuesta
    por brindar una experiencia de usuario basada en lo lúdico, invitando al cliente a divertirse y 
    jugar comprando en la plataforma.

    Se optó por la aplicación de dos fuentes provistas por Google Fonts: Roboto por su simplicidad,
    minimalismo y accesibilidad y 2P Press Start para apelar a la nostalgia de los 8-bits.

    El sitio se encuentra construido con Node JS 20.11 LTS, HTML5 sobre EJS con estructura sémantica que facilita la accesibilidad, CSS 3 que asegura su funcionamiento en una amplia varidad de navegadores y dispositivos.

    Google Chrome LigthHouse asegurando las métricas de Performance, Best Practices, Accesibility y SEO. 

## Seguridad ##

    * El uso de una base de datos MYSQL a traves de SEQUELIZE como ORM, minimiza el riesgo de Inyección de código SQL.
    * El reemplazo del ID de usuario por un UUID binario, dificulta la adivinación de usuarios por ID.
    * El hasheo del password de usuario utilizando BCRYPT, disminuya la posiblidad de una brecha y filtración de datos.
    * El uso de variables de entorno evita que los datos sensibles de nuestra aplicación puedan ser accedidos en el repositorio de GITHUB.
    * La implementación del Github dependabot, asegura la actualización automática del repositorio.


## Funcionalidades 
se puede  crear, eliminar y editar productos como administrador.
Como usuario uno se puede registrar e ingrear en el sitio, donde se pueden agregar y quitar productos del carrito de compras.
Y contamos con un dashboard que permite visualizar las estadisticas del sitio en formato de tablero de control.


##Lucas Herbon:
 ** Mostrar vistas
 ** Mostrar Registro y Login de Usuarios.
 ** Mostrar vistas de footer.

 Lucas Medina:
 ** Mostrar CRUD de Productos
 ** Dashboard: REST API Y REACT.
