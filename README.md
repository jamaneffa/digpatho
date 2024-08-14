# digPatho

Este proyecto, desarrollado con Next.js, optimiza la experiencia de usuario (UX) y la interfaz de usuario (UI) de la aplicación digPatho.

Las principales mejoras incluyen:

- Logo Consistente: Se ha unificado el logo en la web y en la aplicación para una experiencia de marca coherente.
- Paleta de Colores y Estilos: La paleta de colores y los estilos se han armonizado con la página principal, evitando la sensación de estar navegando por sitios diferentes.
Simplificación de la Navegación: Se han eliminado botones innecesarios (como el botón de "Home" en la barra de navegación) y accesos a vistas en las que el usuario ya está logueado (por ejemplo, el botón de "Login" no se muestra si el usuario está en el formulario de login).
- Formulario de Registro: Se ha creado un formulario de registro para facilitar el acceso a la aplicación.
- Modo Oscuro: Se ha implementado un modo oscuro para mejorar la usabilidad en diferentes condiciones de iluminación.

Cabe destacar que este proyecto no cuenta con un backend que valide credenciales ni procese la información de las imágenes cargadas. Por lo tanto, al hacer clic en el botón de login, se puede acceder directamente al Dashboard de la aplicación, donde el procesamiento de imágenes está simulado, sin importar qué imagen se suba.

## Construcción y Ejecucion del proyecto con  Docker

A continuación se indican los pasos para construir y ejecutar el proyecto utilizando Docker.

1) Abrir la aplicacion de escritorio de Docker (asegurarse de que el equipo esté configurado para ejecutarla).
1) Abrir una terminal
2) Clonar el repositorio => git clone https://github.com/jamaneffa/digpatho.git
3) Navegar al directorio del proyecto: => cd digpatho
4) Construir la imagen => docker build -t digpatho .
5) Ejecutar el contendor => docker run -p 3000:3000 digpatho
6) Abrir el proyecto en http://localhost:3000

Para detener la ejecucion del proyecto ingresar Ctrl. + C en la terminal